module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'hotel rental',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
  },
};
