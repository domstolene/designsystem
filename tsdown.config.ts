import { defineConfig } from 'tsdown';

export default defineConfig({
  format: ['cjs', 'esm'],
  target: 'es2022',
  sourcemap: true,
  css: {
    fileName: 'index.css',
    transformer: 'postcss',
    modules: {
      generateScopedName: 'dds-[name]__[local]',
    },
  },
  loader: {
    '.svg': 'dataurl',
    '.css': 'css',
  },
  dts: false,
});
