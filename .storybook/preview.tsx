import '@norges-domstoler/dds-components/index.css';
import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { Unstyled } from '@storybook/addon-docs/blocks';
import {
  ToggleBar,
  ToggleRadio,
  ThemeProvider,
  DdsTheme,
} from '@norges-domstoler/dds-components';

let nameCounter = 0;

const preview: Preview = {
  parameters: {
    controls: { sort: 'requiredFirst' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', '*', ['Introduction', 'Changelog']],
      },
    },
    docs: {
      container: ({ children, context }) => (
        <DocsContainer context={context}>
          <Unstyled>
            {/**Setter fast theme for Storybook preview */}
            <ThemeProvider>{children}</ThemeProvider>
          </Unstyled>
        </DocsContainer>
      ),
      canvas: { sourceState: 'shown' },
      story: { inline: true },
      controls: { sort: 'requiredFirst' },
      codePanel: true,
    },
  },

  decorators: [
    /** Styring av theme med toggle bar i hver story */
    /** Hvis story ikke skal ha theme-styring returner fast theme  */
    (Story, context) => {
      if (context.parameters.disableGlobalDecorator) {
        return (
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        );
      }
      const [theme, setTheme] = React.useState<DdsTheme>('core');
      nameCounter++;

      return (
        <ThemeProvider theme={theme}>
          <div className="theme-toggle-bar-wrapper">
            <ToggleBar
              size="xsmall"
              name={`theme-${nameCounter}`}
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

  tags: ['autodocs'],
};

export default preview;
