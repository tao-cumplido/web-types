module.exports = {
	plugins: ['style'],
	env: {
		es2020: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	rules: {
		'array-callback-return': 'error',
		'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
		'camelcase': 'error',
		'class-methods-use-this': 'error',
		'complexity': 'warn',
		'consistent-return': 'error',
		'curly': ['error', 'all'],
		'default-case-last': 'error',
		'default-param-last': 'error',
		'eqeqeq': 'error',
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'error',
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'max-depth': 'error',
		'max-statements-per-line': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-caller': 'error',
		'no-cond-assign': ['error', 'always'],
		'no-console': ['error', { allow: ['error', 'warns'] }],
		'no-duplicate-imports': 'error',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inner-declarations': ['error', 'both'],
		'no-invalid-this': ['error', { capIsConstructor: false }],
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loss-of-precision': 'error',
		'no-multi-assign': 'error',
		'no-multi-str': 'error',
		'no-negated-condition': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal-escape': 'error',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': ['error', { builtinGlobals: true }],
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-underscore-dangle': ['error', { allow: ['_'], enforceInMethodNames: true }],
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 0,
		'no-unused-vars': ['error', { ignoreRestSiblings: true }],
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': ['warn', { location: 'anywhere' }],
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'operator-assignment': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': 'error',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'require-atomic-updates': 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
		'symbol-description': 'error',
		'use-isnan': ['error', { enforceForIndexOf: true }],
		'yoda': 'error',
		// plugins
		'style/group-imports': 'error',
		'style/sort-imports': ['error', { caseGroups: true, typesInGroup: 'top' }],
		'style/experimental/no-commented-code': [
			'warn',
			{
				ignorePatterns: ['^https?://', '^prettier-', '^dprint-ignore'],
				extendDefaultIgnorePatterns: true,
			},
		],
	},
	overrides: [
		{
			files: ['.*rc.js'],
			env: {
				node: true,
			},
		},
		{
			files: '*.ts',
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				project: ['tsconfig.src.json', 'tsconfig.build.json', 'jsdom/tsconfig.json'],
			},
			plugins: ['@typescript-eslint'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'prettier',
				'prettier/@typescript-eslint',
			],
			rules: {
				'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
				'@typescript-eslint/ban-types': [
					'error',
					{
						types: { BigInt: { fixWith: 'bigint' } },
						extendDefaults: true,
					},
				],
				'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
				'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
				'@typescript-eslint/consistent-type-assertions': [
					'error',
					{
						assertionStyle: 'as',
						objectLiteralTypeAssertions: 'allow-as-parameter',
					},
				],
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
				'default-param-last': 0,
				'@typescript-eslint/default-param-last': 'error',
				'@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
				'lines-between-class-members': 0,
				'@typescript-eslint/lines-between-class-members': [
					'error',
					'always',
					{
						exceptAfterSingleLine: true,
						exceptAfterOverload: true,
					},
				],
				'@typescript-eslint/member-ordering': [
					'error',
					{
						default: [
							'private-static-field',
							'protected-static-field',
							'public-static-field',
							'private-static-method',
							'protected-static-method',
							'public-static-method',
							'signature',
							'protected-abstract-field',
							'public-abstract-field',
							'private-decorated-field',
							'private-instance-field',
							'protected-decorated-field',
							'protected-instance-field',
							'public-decorated-field',
							'public-instance-field',
							'field',
							'private-constructor',
							'protected-constructor',
							'public-constructor',
							'constructor',
							'protected-abstract-method',
							'public-abstract-method',
							'private-decorated-method',
							'private-instance-method',
							'protected-decorated-method',
							'protected-instance-method',
							'public-decorated-method',
							'public-instance-method',
							'method',
						],
					},
				],
				'@typescript-eslint/method-signature-style': ['error', 'method'],
				'camelcase': 0,
				'no-underscore-dangle': 0,
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'default',
						format: ['camelCase', 'UPPER_CASE'],
						leadingUnderscore: 'forbid',
						trailingUnderscore: 'forbid',
					},
					{
						selector: ['typeLike', 'enumMember'],
						format: ['PascalCase'],
					},
					{
						selector: 'parameter',
						format: ['camelCase'],
						leadingUnderscore: 'allow',
					},
				],
				'no-dupe-class-members': 0,
				'@typescript-eslint/no-dupe-class-members': 'error',
				'no-duplicate-imports': 0,
				'@typescript-eslint/no-duplicate-imports': 'error',
				'@typescript-eslint/no-dynamic-delete': 'error',
				'@typescript-eslint/no-empty-function': [
					'error',
					{
						allow: ['arrowFunctions', 'private-constructors', 'protected-constructors', 'decoratedFunctions'],
					},
				],
				'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
				'@typescript-eslint/no-extra-non-null-assertion': 0,
				'@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
				'@typescript-eslint/no-implicit-any-catch': 'error',
				'no-invalid-this': 0,
				'@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],
				'@typescript-eslint/no-invalid-void-type': 'error',
				'no-loss-of-precision': 0,
				'@typescript-eslint/no-loss-of-precision': 'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain': 0,
				'no-redeclare': 0,
				'@typescript-eslint/no-redeclare': 'error',
				'@typescript-eslint/no-require-imports': 'error',
				'no-shadow': 0,
				'@typescript-eslint/no-shadow': ['error', { builtinGlobals: true, ignoreTypeValueShadow: false }],
				'@typescript-eslint/no-unnecessary-type-constraint': 'error',
				'no-unused-expressions': 0,
				'@typescript-eslint/no-unused-expressions': 'error',
				'no-unused-vars': 0,
				'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
				'no-useless-constructor': 0,
				'@typescript-eslint/no-useless-constructor': 'error',
				'@typescript-eslint/prefer-enum-initializers': 'error',
				'@typescript-eslint/prefer-for-of': 'error',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-literal-enum-member': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
				// require type information
				'@typescript-eslint/no-base-to-string': 'error',
				'@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
				'no-throw-literal': 'error',
				'@typescript-eslint/no-throw-literal': 'error',
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
					'error',
					{
						allowComparingNullableBooleansToTrue: false,
						allowComparingNullableBooleansToFalse: false,
					},
				],
				'@typescript-eslint/no-unnecessary-condition': 'error',
				'@typescript-eslint/no-unnecessary-qualifier': 'error',
				'@typescript-eslint/no-unnecessary-type-arguments': 'error',
				'@typescript-eslint/prefer-includes': 'error',
				'@typescript-eslint/prefer-nullish-coalescing': 'error',
				'@typescript-eslint/prefer-readonly': 'error',
				'@typescript-eslint/prefer-reduce-type-parameter': 'error',
				'@typescript-eslint/prefer-string-starts-ends-with': 'error',
				'@typescript-eslint/promise-function-async': 'error',
				'@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
				'@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
				'no-return-await': 0,
				'@typescript-eslint/return-await': 'error',
				'@typescript-eslint/strict-boolean-expressions': [
					'error',
					{
						allowNullableString: true,
						allowNullableNumber: true,
						allowNullableBoolean: true,
					},
				],
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
				'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
			},
		},
	],
};
