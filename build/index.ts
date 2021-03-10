/* eslint-disable max-depth */

import fs from 'fs';
import path from 'path';

import type {
	JSDocableNode,
	NamespaceDeclaration,
	ReferenceFindableNode,
	TypeParameterDeclarationStructure,
} from 'ts-morph';
import prettier from 'prettier';
import { Node, Project } from 'ts-morph';

import packageJson from '../package.json';
import { updateMap } from './update-map';
import { docTags, guardsUnion } from './utility';

const packagesRoot = 'packages';

const exposedInterfaces = new Map<string, string[]>();
const exposedTypes = new Map<string, Map<string, TypeParameterDeclarationStructure[]>>();
const legacyWindowAliases: Array<{ alias: string; name: string }> = [];
const globalScopes = new Map<string, { global: string[]; properties: string[] }>();
const augmentations = new Map<string, string[]>();

function writePackage(name: string, dependencies: Record<string, string> = {}) {
	const { version, author, license } = packageJson;
	fs.writeFileSync(
		path.join(packagesRoot, name, 'package.json'),
		JSON.stringify(
			{
				name: `@tswt/${name}`,
				version,
				author,
				license,
				types: 'index.d.ts',
				dependencies,
			},
			null,
			'\t',
		),
	);
}

const project = new Project({
	tsConfigFilePath: 'tsconfig.src.json',
});

const typeChecker = project.getTypeChecker();

for (const sourceFile of project.getSourceFiles()) {
	for (const namespaceNode of sourceFile.getNamespaces()) {
		const namespace = namespaceNode.getName();

		for (const jsDocNode of namespaceNode.getJsDocs()) {
			for (const tagNode of jsDocNode.getTags()) {
				const context = tagNode.getComment();
				const tagName = tagNode.getTagName();

				if (!context) {
					continue;
				}

				if (tagName === 'exposed') {
					namespaceNode.getInterfaceOrThrow('Constructor');
					updateMap(exposedInterfaces, context, (interfaces) => [...interfaces, namespace], [namespace]);
				}

				if (tagName === 'legacyWindowAlias') {
					legacyWindowAliases.push({ alias: context, name: namespace });
				}

				if (tagName === 'global') {
					updateMap(
						globalScopes,
						namespace,
						(scope) => {
							scope.global.push(context);
							return scope;
						},
						{
							global: [context],
							properties: typeChecker
								.getPropertiesOfType(typeChecker.getTypeAtLocation(sourceFile.getInterfaceOrThrow(namespace)))
								.map((symbol) => symbol.getName()),
						},
					);
				}
			}
		}

		for (const interfaceNode of namespaceNode.getNamespace('Prototype')?.getInterfaces() ?? []) {
			updateMap(augmentations, interfaceNode.getName(), (interfaces) => [...interfaces, namespace], [namespace]);
		}
	}
}

for (const [name, declarations] of project.getSourceFileOrThrow('index.d.ts').getExportedDeclarations()) {
	const jsDocables = declarations.filter(Node.isJSDocableNode);

	if (jsDocables.some((node) => docTags(node, 'nonStandard').length)) {
		continue;
	}

	const typeDeclarations = jsDocables.filter(guardsUnion(Node.isInterfaceDeclaration, Node.isTypeAliasDeclaration));

	const exposedRealms = docTags(jsDocables.find(Node.isNamespaceDeclaration), 'exposed').map((tag) => {
		const comment = tag.getComment();

		if (!comment) {
			throw new Error(`missing value for @exposed tag`);
		}

		return comment;
	});

	const typeParameters = typeDeclarations.flatMap((node) =>
		node.getTypeParameters().map((parameter) => parameter.getStructure()),
	);

	if (typeDeclarations.length && exposedRealms.length) {
		for (const realm of exposedRealms) {
			// TODO: copy partial jsdocs
			updateMap(
				exposedTypes,
				realm,
				(types) => updateMap(types, name, () => typeParameters, typeParameters),
				new Map([[name, typeParameters]]),
			);
		}

		continue;
	}

	if (!typeDeclarations.length) {
		if (!exposedRealms.length) {
			// eslint-disable-next-line no-console
			console.warn(`no declarations found for '${name}'`);
		}
		continue;
	}

	const findExposures = (sourceNode: ReferenceFindableNode & JSDocableNode) => {
		for (const reference of sourceNode.findReferencesAsNodes()) {
			const exposedNamespace = reference.getFirstAncestor((node): node is NamespaceDeclaration => {
				if (!Node.isNamespaceDeclaration(node)) {
					return false;
				}

				return docTags(node, 'exposed').length > 0;
			});

			if (!exposedNamespace) {
				const host = reference.getFirstAncestor(
					guardsUnion(Node.isInterfaceDeclaration, Node.isTypeAliasDeclaration, Node.isNamespaceDeclaration),
				);

				if (host) {
					findExposures(host);
				}

				continue;
			}

			const exposureSet = docTags(exposedNamespace, 'exposed').map((tag) => tag.getComment() ?? '');

			for (const context of exposureSet) {
				updateMap(
					exposedTypes,
					context,
					(types) => updateMap(types, name, () => typeParameters, typeParameters),
					new Map([[name, typeParameters]]),
				);
			}
		}
	};

	typeDeclarations.forEach(findExposures);

	if (!new Set([...exposedTypes.values()].flatMap((set) => [...set.keys()])).has(name)) {
		// eslint-disable-next-line no-console
		console.warn(`no referenced exposure found for '${name}'`);
	}
}

for (const sourceFile of project.getSourceFiles()) {
	sourceFile.forEachDescendant((node, traversal) => {
		if (!Node.isJSDocableNode(node)) {
			traversal.skip();
			return;
		}

		for (const jsDocNode of node.getJsDocs()) {
			for (const tag of jsDocNode.getTags()) {
				if (['exposed', 'legacyWindowAlias', 'global', 'nonStandard'].includes(tag.getTagName())) {
					tag.remove();
				}
			}

			if (!jsDocNode.getInnerText().trim()) {
				jsDocNode.remove();
			}
		}
	});

	const fileName = path.relative(process.cwd(), sourceFile.getFilePath()).replace(/^src[/\\]/u, '');
	const outPath = path.join(packagesRoot, 'core', fileName);

	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, sourceFile.getText());
	writePackage('core');
}

for (const [context, scope] of globalScopes) {
	// eslint-disable-next-line prefer-named-capture-group
	const packageName = context.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase();

	let augmentationBlock = '';

	const augmentedInterfaces = augmentations.get(context);

	if (augmentedInterfaces) {
		augmentationBlock = `
			declare module '@tswt/core' {
				${augmentedInterfaces
					.map(
						(name) => `
							namespace ${name} {
								interface Prototype extends Prototype.${context} {}
							}
						`,
					)
					.join('\n')}
			}
		`;
	}

	const interfaces = scope.global.flatMap(
		(exposed) => exposedInterfaces.get(exposed)?.map((name) => `var ${name}: web.${name}.Constructor;`) ?? [],
	);

	if (context === 'Window') {
		interfaces.push(...legacyWindowAliases.map(({ alias, name }) => `var ${alias}: web.${name}.Constructor;`));
	}

	const types = scope.global.flatMap((exposed) =>
		[...(exposedTypes.get(exposed) ?? [])].map(([type, parameters]) => {
			if (!parameters.length) {
				return `type ${type} = web.${type};`;
			}

			const parameterSignature = parameters
				.map(({ name, constraint, default: assignedDefault }) => {
					if (typeof constraint === 'string') {
						if (typeof assignedDefault === 'string') {
							return `${name} extends ${constraint} = ${assignedDefault}`;
						}

						return `${name} extends ${constraint}`;
					}

					return name;
				})
				.join(', ');

			const parameterNames = parameters.map(({ name }) => name).join(', ');

			return `type ${type}<${parameterSignature}> = web.${type}<${parameterNames}>;`;
		}),
	);

	fs.mkdirSync(path.join(packagesRoot, packageName));
	fs.writeFileSync(
		path.join(packagesRoot, packageName, 'index.d.ts'),
		prettier.format(
			`
				import * as web from '@tswt/core';

				${augmentationBlock}

				declare global {
					${types.join('\n')}
					${interfaces.join('\n')}
					${scope.properties.map((name) => `var ${name}: web.${context}['${name}'];`).join('\n')}
				}
			`,
			{
				...prettier.resolveConfig.sync(__filename),
				parser: 'typescript',
			},
		),
	);

	writePackage(packageName, { '@tswt/core': `~${packageJson.version}` });
}

fs.writeFileSync(
	path.join(packagesRoot, 'tsconfig.json'),
	JSON.stringify(
		{
			extends: '../tsconfig.base.json',
			compilerOptions: {
				types: [],
			},
			include: ['**/*.ts'],
		},
		null,
		'\t',
	),
);
