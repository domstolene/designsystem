import '@norges-domstoler/dds-components/index.css';
import { addons } from '@storybook/manager-api';
import ddsTheme from './ddsTheme';

addons.setConfig({
  theme: ddsTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [
      'dds-components',
      'development-utils',
      'dds-design-tokens',
      'dds-formatting',
      'icons',
      'examples',
      'playground',
    ],
  },
});
