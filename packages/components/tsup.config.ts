import { defineConfig } from 'tsup';

import baseConfig from '../../tsup.config';

export default defineConfig({
  ...baseConfig,
  publicDir: 'public',
  banner: {
    js: '"use client";',
  },
});
