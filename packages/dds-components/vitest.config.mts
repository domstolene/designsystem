/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reportOnFailure: true,
      reporter: ['text', 'text-summary', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.d.ts',
        'src/**/index.ts',
        'src/**/*.stories.tsx',
        'src/storybook',
        'src/**/storybook-utils',
        'src/components/Icon/overview-page',
        'src/**/*Example.tsx',
        'src/**/*.styles.ts*',
      ],
      thresholds: {
        statements: 90,
        // lavere branch coverage; mange av branchene resulterer i varianter i CSS styling. Det er ikke nyttig å teste for spesifikke CSS klasser eller variabler.
        branches: 85,
        functions: 90,
        lines: 90,
      },
    },
  },
});
