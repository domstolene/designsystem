import '@norges-domstoler/dds-design-tokens/dist/css/borderRadius.css';
import '@norges-domstoler/dds-design-tokens/dist/css/spacing.css';
import '@norges-domstoler/dds-design-tokens/dist/css/colors.css';
import '@norges-domstoler/dds-design-tokens/dist/css/font.css';
import '@norges-domstoler/dds-components/dist/styles/fontStyles.css';
import '@norges-domstoler/dds-components/dist/styles/selection.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', '*', ['Introduction', 'Changelog']],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
};

export default preview;
