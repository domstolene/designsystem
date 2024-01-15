module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
  ],
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  overrides: [
    {
      files: ['packages/**/*.ts', 'packages/**/*.tsx'],
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
      plugins: ['testing-library'],
      extends: ['plugin:testing-library/react'],
      rules: {},
    },
  ],
};
