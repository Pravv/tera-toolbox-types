// https://github.com/benmosher/eslint-plugin-import/issues/1285

const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended', // Out of the box Typescript rules
    'standard',
  ],
  rules: {
    'no-console': 'off', // Replace with LogProvider
    'space-before-function-paren': 'off',
    'semi': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'comma-dangle': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-use-before-define': 'warn',
    'consistent-return': 'warn',
    'no-unused-vars': 'off',
    'camelcase': 'off',
  },
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      'node': {
        'extensions': allExtensions,
      },
    },
  },
  'globals': {
    'BigInt': true,
  },
};
