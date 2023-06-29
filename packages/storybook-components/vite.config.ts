import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';

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

export default defineConfig({
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
      name: 'StorybookComponents',
      fileName: 'storybook-components',
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
