/* eslint-disable max-depth */

import fs from 'fs';
import path from 'path';

import type {
	JSDocableNode,
	NamespaceDeclaration,
	ReferenceFindableNode,
	TypeParameterDeclarationStructure,
} from 'ts-morph';
import { Node, Project } from 'ts-morph';

import packageJson from '../package.json';
import { updateMap } from './update-map';
import { docTags, guardsUnion } from './utility';

const packagesRoot = 'packages';

const exposedInterfaces = new Map<string, Array<{ name: string; secureContext: boolean }>>();
const exposedTypes = new Map<string, Map<string, TypeParameterDeclarationStructure[]>>();
const legacyWindowAliases: Array<{ alias: string; name: string }> = [];
const globalScopes = new Map<
	string,
	{ name: string; global: string[]; properties: string[]; globalProperties: string[] }
>();
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
					const secureContext = docTags(namespaceNode, 'secureContext').length > 0;
					updateMap(exposedInterfaces, context, (interfaces) => [...interfaces, { name: namespace, secureContext }], [{
						name: namespace,
						secureContext,
					}]);
				}

				if (tagName === 'legacyWindowAlias') {
					legacyWindowAliases.push({ alias: context, name: namespace });
				}

				if (tagName === 'global') {
					const exposed = docTags(namespaceNode, 'exposed');
					const realm = exposed[0].getComment();

					if (exposed.length !== 1 || !realm) {
						throw new Error(`@global interface ${namespace} @exposed error`);
					}

					const propertySymbols = typeChecker
						.getPropertiesOfType(typeChecker.getTypeAtLocation(sourceFile.getInterfaceOrThrow(namespace)))
						// filter out properties of type symbol
						.filter((property) => !property.getName().startsWith('__@'));

					const globalProperties = propertySymbols
						.flatMap((property) => [...new Set(property.getDeclarations())])
						.filter(Node.isPropertySignature)
						.filter((node) => docTags(node, 'globalThis').length)
						.map((node) => node.getName());

					const properties = propertySymbols
						.map((symbol) => symbol.getName())
						.filter((name) => !globalProperties.includes(name));

					updateMap(
						globalScopes,
						realm,
						(scope) => {
							scope.global.push(context);
							return scope;
						},
						{
							name: namespace,
							global: [context],
							globalProperties,
							properties,
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
		node.getTypeParameters().map((parameter) => parameter.getStructure())
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

				if (!host || host === sourceNode) {
					continue;
				}

				findExposures(host);
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
	sourceFile.forEachDescendant((node) => {
		if (!Node.isJSDocableNode(node)) {
			return;
		}

		for (const jsDocNode of node.getJsDocs()) {
			for (const tag of jsDocNode.getTags()) {
				const removableTags = [
					'exposed',
					'legacyWindowAlias',
					'global',
					'nonStandard',
					'legacyNullToEmptyString',
					'globalThis',
					'putForwards',
					'secureContext',
				];

				if (removableTags.includes(tag.getTagName())) {
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

const packages: string[] = [];

for (const [context, scope] of globalScopes) {
	// eslint-disable-next-line prefer-named-capture-group
	const packageName = context.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase();

	packages.push(packageName);

	let augmentationBlock = '';

	const augmentedInterfaces = augmentations.get(context);

	if (augmentedInterfaces) {
		// dprint-ignore
		const format = (name: string) => `
			namespace ${name} {
				interface Prototype extends Prototype.${context} {}
			}
		`;

		augmentationBlock = `
			declare module '@tswt/core' {
				${augmentedInterfaces.map(format).join('\n')}
			}
		`;
	}

	const interfaces = [
		...new Set(scope.global.flatMap(
			(exposed) => exposedInterfaces.get(exposed) ?? [],
		)),
	].map(({ name, secureContext }) => {
		if (secureContext) {
			return `var ${name}: web.${name}.Constructor | undefined;`;
		}

		return `var ${name}: web.${name}.Constructor;`;
	});

	if (context === 'Window') {
		interfaces.push(...legacyWindowAliases.map(({ alias, name }) => `var ${alias}: web.${name}.Constructor;`));
	}

	const types = [...new Map(scope.global.flatMap((exposed) => [...(exposedTypes.get(exposed) ?? [])]))].map(
		([type, parameters]) => {
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
		},
	);

	const globalProperties = scope.globalProperties.map((name) =>
		`var ${name}: web.${scope.name}['${name}'] & typeof globalThis;`
	);
	const properties = scope.properties.map((name) => `var ${name}: web.${scope.name}['${name}'];`);

	fs.mkdirSync(path.join(packagesRoot, packageName));
	fs.writeFileSync(
		path.join(packagesRoot, packageName, 'index.d.ts'),
		`
			import * as web from '@tswt/core';

			${augmentationBlock}

			declare global {
				${types.join('\n')}
				${interfaces.join('\n')}
				${globalProperties.join('\n')}
				${properties.join('\n')}
			}
		`,
	);

	writePackage(packageName, { '@tswt/core': `~${packageJson.version}` });

	fs.writeFileSync(
		path.join(packagesRoot, `tsconfig.${packageName}.json`),
		JSON.stringify(
			{
				extends: '../tsconfig.base.json',
				compilerOptions: {
					types: [],
				},
				include: [`${packageName}/**/*.ts`],
			},
			null,
			'\t',
		),
	);
}

fs.writeFileSync(
	path.join(packagesRoot, 'tsconfig.json'),
	JSON.stringify(
		{
			files: [],
			references: packages.map((name) => {
				return { path: `tsconfig.${name}.json` };
			}),
		},
		null,
		'\t',
	),
);
