const { defineConfig } = require('eslint/config');
const baseConfig = require('./eslint.config.cjs');

module.exports = defineConfig([
  {
    ...baseConfig,
    rules: {
      ...baseConfig.rules,
      'import/no-cycle': 'error',
    },
  },
]);
