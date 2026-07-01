import { defineConfig } from 'tsdown';

import baseConfig from '../../tsdown.config';

export default defineConfig({
  ...baseConfig,
  banner: {
    js: '"use client";',
  },
  copy: [
    {
      from: 'src/styles/assets',
      to: 'dist',
    },
  ],
});
