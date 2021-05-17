module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],

  env: {
    es6: true,
    node: true,
  },

  ignorePatterns: ['/lib/**'],

  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
  },
}
