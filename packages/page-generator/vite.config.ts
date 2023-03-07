/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

function isBareModuleId(id: string) {
  return (
    !id.startsWith('.') &&
    !id.includes(path.join(process.cwd(), 'src')) &&
    !id.includes(path.join(process.cwd(), 'modules')) &&
    !id.includes(path.join(process.cwd(), 'typings'))
  );
}

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
    react(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DdsPageGenerator',
      fileName: 'dds-page-generator',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: isBareModuleId,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
});
