import eslint from '@eslint/js';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { parser, configs } from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import importXPlugin, {
  createNodeResolver,
  flatConfigs,
} from 'eslint-plugin-import-x';
import storybook from 'eslint-plugin-storybook';
import testingLibrary from 'eslint-plugin-testing-library';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  flatConfigs.recommended,
  flatConfigs.typescript,
  ...configs.recommended,
  ...configs.stylistic,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: reactPlugin,
      'import-x': importXPlugin,
      storybook,
      'testing-library': testingLibrary,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: ['tsconfig.json', 'packages/*/tsconfig.json'],
        }),
        createNodeResolver(),
      ],
    },
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'generic' }], // https://tkdodo.eu/blog/array-types-in-type-script
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'unknown',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import-x/no-cycle': 'error',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    plugins: {
      'testing-library': testingLibrary,
    },
  },
  {
    ignores: ['packages/*/src/setupTests.ts', 'packages/*/dist', '**/*.d.ts'],
  },
  prettierConfig,
];
