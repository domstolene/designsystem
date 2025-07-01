import baseConfig from './eslint.config.mjs';
import importPlugin from 'eslint-plugin-import';

export default baseConfig.map(config => {
  if (config.rules) {
    return {
      ...config,
      plugins: {
        ...(config.plugins || {}),
        import: importPlugin,
      },
      rules: {
        ...config.rules,
        'import/no-cycle': 'error',
      },
    };
  }
  return config;
});
