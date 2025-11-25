import '@norges-domstoler/dds-components/index.css';
import { addons } from 'storybook/manager-api';

import ddsTheme, { injectCSS } from './ddsTheme';

injectCSS();

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
      'patterns',
      'playground',
    ],
  },
});
