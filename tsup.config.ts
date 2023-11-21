import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'es2019',
  sourcemap: true,
  loader: {
    '.svg': 'dataurl',
  },
});
