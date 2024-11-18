import '@norges-domstoler/dds-components/index.css';
import React from 'react';
import type { Preview } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs';
import { Unstyled } from '@storybook/blocks';
import {
  ToggleBar,
  ToggleRadio,
  ThemeProvider,
  DdsTheme,
} from '@norges-domstoler/dds-components';
import { useState } from 'storybook/internal/preview-api';

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
          <Unstyled>
            {/**Setter fast theme for Storybook preview */}
            <ThemeProvider>{children}</ThemeProvider>
          </Unstyled>
        </DocsContainer>
      ),
    },
  },
  decorators: [
    /** Styring av theme med toggle bar i hver story */
    Story => {
      const [theme, setTheme] = useState<DdsTheme>('core');

      return (
        <ThemeProvider theme={theme}>
          <div className="theme-toggle-bar-wrapper">
            <ToggleBar
              size="tiny"
              name="theme"
              value={theme}
              htmlProps={{ 'aria-label': 'Tema' }}
              onChange={(_event, theme) => {
                theme && setTheme(theme);
              }}
            >
              <ToggleRadio value="core" label="core" />
              <ToggleRadio value="public" label="public" />
            </ToggleBar>
          </div>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
