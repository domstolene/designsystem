module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  features: {
    previewMdx2: true,
    postcss: false,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => {
        if (
          prop.declarations === undefined ||
          prop.declarations === null ||
          prop.declarations.every(dec => /node_modules/.test(dec.fileName))
        ) {
          return false;
        }

        return true;
      },
    },
  },
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['./images'],
};
