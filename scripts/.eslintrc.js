module.exports = {
  root: true,
  env: {
    node: true,
    es2017: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'linebreak-style': 'off',
    // 'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'arrow-body-style': 'off',
    'max-len': ['error', { 'code': 120 }],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
  },
};
