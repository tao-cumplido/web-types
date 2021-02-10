import * as fs from 'fs';
import * as path from 'path';

import { Project } from 'ts-morph';

import packageJson from '../package.json';

const packagesRoot = 'packages';

const exposedInterfaces = new Map<string, string[]>();
const globalScopes = new Map<string, { global: string[]; properties: string[] }>();

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

				if (!context) {
					throw new Error(`missing context for tag @${tag.getTagName()}`);
				}

				if (tag.getTagName() === 'exposed') {
					const interfaces = exposedInterfaces.get(context) ?? [];
					interfaces.push(namespace.getName());
					exposedInterfaces.set(context, interfaces);
				}

				if (tag.getTagName() === 'global') {
					const scope = globalScopes.get(namespace.getName()) || {
						global: [],
						properties: typeChecker
							.getPropertiesOfType(typeChecker.getTypeAtLocation(sourceFile.getInterfaceOrThrow(namespace.getName())))
							.map((symbol) => symbol.getName()),
					};

					scope.global.push(context);
					globalScopes.set(namespace.getName(), scope);
				}
			}

			docComment.remove();
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

	fs.mkdirSync(path.join(packagesRoot, packageName));
	fs.writeFileSync(
		path.join(packagesRoot, packageName, 'index.d.ts'),
		// prettier-ignore
		`import * as web from '@tswt/core';\n\ndeclare global {\n${
			scope.global.flatMap((exposed) => exposedInterfaces.get(exposed)?.map((name) => `\tvar ${name}: web.${name}.Constructor;`) ?? []).join('\n')
		}\n${
			scope.properties.map((name) => `\tvar ${name}: web.${context}['${name}'];`).join('\n')
		}\n}`,
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
