module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    ecmaVersion: 12
  },
  plugins: ['react-refresh'],
  rules: {
    //react
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-dom-props': ['error'],
    'react/forbid-elements': ['warn'],
    'react/hook-use-state': ['error'],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-handler-names': ['warn', { checkLocalVariables: true }],
    'react/jsx-key': ['error', { warnOnDuplicates: true }],
    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce'] }],
    'react/jsx-no-target-blank': ['warn'],
    'react/jsx-no-useless-fragment': ['error'],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-wrap-multilines': ['error'],
    'react/no-array-index-key': ['warn'],
    'react/require-optimization': ['error'],
    'react/self-closing-comp': ['warn'],
    'react/no-object-type-as-default-prop': ['warn'],
    'react/style-prop-object': ['warn'],
    'react/jsx-sort-props': [
      'warn',
      { callbacksLast: true, shorthandFirst: true, reservedFirst: true }
    ],
    //import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-unresolved': 'off',
    'no-duplicate-imports': 'warn',
    //hooks
    'react-hooks/exhaustive-deps': 'off',
    // common
    semi: ['error', 'never'],
    curly: ['error', 'multi-or-nest', 'consistent'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', { functions: 'ignore' }],
    'no-constant-condition': 'warn',
    'no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-cond-assign': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'object-curly-spacing': ['error', 'always'],
    // es6
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'generator-star-spacing': 'off',
    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    complexity: ['off', 11],
    eqeqeq: ['error', 'smart'],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'operator-linebreak': 'off',
    'no-implicit-coercion': 'error',
    // unicorns
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          camelCase: true
        },
        ignore: [/\w*.tsx/]
      }
    ],

    // eslint-comments
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    // TS
    'no-useless-constructor': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } }
    ],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/space-before-function-paren': 0
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    },
    react: {
      version: 'detect'
    }
  }
}
