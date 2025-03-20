import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.@(md|mdx)',
    '../stories/*.@(md|mdx)',
    '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/*/src/**/*.mdx',
    '../packages/*/stories/**/*.mdx',
    '../packages/*/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['./images'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-essentials'),
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: true,
        },
      },
    },
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  docs: {
    autodocs: true,
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
