/* eslint-disable max-depth */

import fs from 'fs';
import path from 'path';

import prettier from 'prettier';
import { Project } from 'ts-morph';

import packageJson from '../package.json';

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
	for (const namespace of sourceFile.getNamespaces()) {
		for (const docComment of namespace.getJsDocs()) {
			for (const tag of docComment.getTags()) {
				const context = tag.getComment();
				const tagName = tag.getTagName();

				if (!context) {
					throw new Error(`missing context for tag @${tagName}`);
				}

				if (tagName === 'exposed') {
					const interfaces = exposedInterfaces.get(context) ?? [];
					interfaces.push(namespace.getName());
					exposedInterfaces.set(context, interfaces);
					tag.remove();
				}

				if (tagName === 'legacyWindowAlias') {
					legacyWindowAliases.push({ alias: context, name: namespace.getName() });
					tag.remove();
				}

				if (tagName === 'global') {
					const scope = globalScopes.get(namespace.getName()) ?? {
						global: [],
						properties: typeChecker
							.getPropertiesOfType(typeChecker.getTypeAtLocation(sourceFile.getInterfaceOrThrow(namespace.getName())))
							.map((symbol) => symbol.getName()),
					};

					scope.global.push(context);
					globalScopes.set(namespace.getName(), scope);
					tag.remove();
				}
			}

			if (!docComment.getInnerText().trim()) {
				docComment.remove();
			}
		}

		for (const interfaceNode of namespace.getInterfaces()) {
			for (const docComment of interfaceNode.getJsDocs()) {
				for (const tag of docComment.getTags()) {
					if (tag.getTagName() === 'augment') {
						const interfaces = augmentations.get(interfaceNode.getName()) ?? [];
						interfaces.push(namespace.getName());
						augmentations.set(interfaceNode.getName(), interfaces);
						tag.remove();
					}
				}

				if (!docComment.getInnerText().trim()) {
					docComment.remove();
				}
			}
		}
	}

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
								interface Prototype extends ${context} {}
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
