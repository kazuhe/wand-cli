module.exports = {
  root: true,

  plugins: ['prettier'],

  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
  },

  parserOptions: {
    ecmaVersion: 2017,
  },
}
