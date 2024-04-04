import '@norges-domstoler/dds-components/index.css';
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
