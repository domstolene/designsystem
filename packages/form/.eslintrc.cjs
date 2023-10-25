module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
