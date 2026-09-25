import { defineConfig } from 'tsdown';

export default defineConfig({
  format: ['esm', 'cjs'],
  unbundle: true,
  dts: false,
  sourcemap: true,
  copy: [
    {
      from: 'generated-tokens/css/**/*.css',
      to: 'dist/css',
    },
    {
      from: 'generated-tokens/scss/**/*.scss',
      to: 'dist/scss',
    },
  ],
});
