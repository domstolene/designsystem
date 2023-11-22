import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.@(md|mdx)',
    '../../../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/*/src/**/*.mdx',
  ],
  staticDirs: ['./images', '../../../packages/components/dist/assets/fonts'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource'],
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
