/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'src/setupTests.ts')],
  },
};

export default defineConfig({
  test: vitestConfig.test,
  plugins: [
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: path.resolve(__dirname, 'tsconfig.json'),
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DddPageGenerator',
      fileName: 'dds-page-generator',
      formats: ['es', 'cjs'],
    },
  },
});
