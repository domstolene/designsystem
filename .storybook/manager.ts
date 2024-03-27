import '@norges-domstoler/dds-components/dist/styles/fontStyles.css';
import '@norges-domstoler/dds-design-tokens/dist/css/colors.css';
import '@norges-domstoler/dds-design-tokens/dist/css/font.css';
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
