import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/index.ts',
  format: ['cjs', 'esm'],
  target: 'es2019',
  sourcemap: true,
  loader: {
    '.svg': 'dataurl',
    '.css': 'css',
  },
  clean: false,
  dts: false,
});
