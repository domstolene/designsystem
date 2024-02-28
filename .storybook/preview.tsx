import '@norges-domstoler/dds-design-tokens/dist/css/borderRadius.css';
import '@norges-domstoler/dds-design-tokens/dist/css/border.css';
import '@norges-domstoler/dds-design-tokens/dist/css/spacing.css';
import '@norges-domstoler/dds-design-tokens/dist/css/colors.css';
import '@norges-domstoler/dds-design-tokens/dist/css/font.css';
import '@norges-domstoler/dds-components/dist/styles/fontStyles.css';
import '@norges-domstoler/dds-components/dist/styles/selection.css';
import React from 'react';
import type { Preview } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs';
import { Unstyled } from '@storybook/blocks';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', '*', ['Introduction', 'Changelog']],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      container: ({ children, context }) => (
        <DocsContainer context={context}>
          <Unstyled>{children}</Unstyled>
        </DocsContainer>
      ),
    },
  },
};

export default preview;
