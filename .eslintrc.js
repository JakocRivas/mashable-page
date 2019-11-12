module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    ['airbnb-base','prettier','plugin:node/recommended'],
  ],
  plugins: ["prettier"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier":"error",
    "no-unused-vars":"warn",
    "func-names":'off',
    'object-shorthand':'off'
  },
};
