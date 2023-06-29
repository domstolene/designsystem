/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

function isInternal(id: string) {
  return (
    id.startsWith('.') &&
    id.includes(path.join(process.cwd(), 'src')) &&
    id.includes(path.join(process.cwd(), 'modules')) &&
    id.includes(path.join(process.cwd(), 'typings')) &&
    id.includes('@norges-domstoler/') &&
    !id.includes('@norge-domstoler/dds-design-tokens') // dds-tokens skal være ekstern dependency
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
    react({
      plugins: [['@swc/plugin-styled-components', { ssr: true }]],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DdsCore',
      fileName: 'dds-core',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: id => !isInternal(id),
      output: {
        interop: 'compat',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
});
