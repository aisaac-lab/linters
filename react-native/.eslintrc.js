module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', 'react-hooks', 'react-native', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'no-implicit-coercion': ['error', { boolean: false }],
    'object-shorthand': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'react-native/no-unused-styles': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off', // TODO
    '@typescript-eslint/no-explicit-any': 'off', // TODO
    '@typescript-eslint/explicit-function-return-type': 'off', // TODO
    '@typescript-eslint/no-use-before-define': 'off', // TODO
    '@typescript-eslint/camelcase': 'off', // TODO
    '@typescript-eslint/ban-ts-comment': 'off', // TODO
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        semi: false,
        bracketSpacing: true,
      },
    ],
  },
}