import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.@(md|mdx)',
    '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/*/src/**/*.mdx',
    '../packages/*/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/*/stories/**/*.mdx',
  ],
  staticDirs: ['./images', '../packages/components/dist/assets/fonts'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: true,
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => {
        if (
          prop.declarations === undefined ||
          prop.declarations === null ||
          prop.declarations.every(dec =>
            /node_modules\/@types\/react(-dom)?/.test(dec.fileName),
          )
        ) {
          return false;
        }

        return true;
      },
    },
  },
};

export default config;
