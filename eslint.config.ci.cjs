const baseConfig = require('./eslint.config.cjs');

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    'import/no-cycle': 'error',
  },
};
