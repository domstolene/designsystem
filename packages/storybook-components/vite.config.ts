import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';

function isBareModuleId(id: string) {
  return (
    !id.startsWith('.') &&
    !id.includes(path.join(process.cwd(), 'src')) &&
    !id.includes(path.join(process.cwd(), 'modules')) &&
    !id.includes(path.join(process.cwd(), 'typings'))
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
      external: isBareModuleId,
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
