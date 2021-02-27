/* eslint-disable max-depth */

import fs from 'fs';
import path from 'path';

import prettier from 'prettier';
import { Node, Project } from 'ts-morph';

import packageJson from '../package.json';
import { updateMap } from './update-map';

const packagesRoot = 'packages';

const exposedInterfaces = new Map<string, string[]>();
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

for (const sourceFile of project.getSourceFiles()) {
	sourceFile.forEachDescendant((node, traversal) => {
		if (!Node.isJSDocableNode(node)) {
			traversal.skip();
			return;
		}

		for (const jsDocNode of node.getJsDocs()) {
			for (const tag of jsDocNode.getTags()) {
				if (['exposed', 'legacyWindowAlias', 'global', 'augment'].includes(tag.getTagName())) {
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

	fs.mkdirSync(path.join(packagesRoot, packageName));
	fs.writeFileSync(
		path.join(packagesRoot, packageName, 'index.d.ts'),
		prettier.format(
			`
				import * as web from '@tswt/core';

				${augmentationBlock}

				declare global {
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
