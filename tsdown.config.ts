import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/index.ts',
  format: ['cjs', 'esm'],
  target: 'es2022',
  sourcemap: true,
  css: {
    transformer: 'postcss',
  },
  loader: {
    '.svg': 'dataurl',
    '.css': 'css',
  },
  clean: false,
  dts: false,
});
