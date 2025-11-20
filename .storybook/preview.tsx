import '@norges-domstoler/dds-components/index.css';
import { useEffect, useState } from 'react';
import type { Preview } from '@storybook/react-vite';
import { DocsContainer, Unstyled } from '@storybook/addon-docs/blocks';
import {
  ToggleBar,
  ToggleRadio,
  ThemeProvider,
  DdsTheme,
} from '@norges-domstoler/dds-components';

// Setter bakgrunn i Canvas basert på verdien til --dds-color-bg-default i ThemeProvider
const setCanvasBackgroundFromTheme = (counter: number) => {
  const themeWrapper = document.getElementById(
    `theme-toggle-bar-wrapper-${counter}`,
  )?.parentElement;

  if (themeWrapper) {
    const bgColor = getComputedStyle(themeWrapper).getPropertyValue(
      '--dds-color-bg-default',
    );

    // main Canvas
    document.documentElement.style.background = bgColor;

    // Docs Canvas
    const docsCanvas = themeWrapper.closest('.docs-story');
    if (docsCanvas) {
      (docsCanvas as HTMLElement).style.background = bgColor;
    }
  }
};

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

      const [theme, setTheme] = useState<DdsTheme>('core-light');
      nameCounter++;

      useEffect(() => {
        setCanvasBackgroundFromTheme(nameCounter);
      }, [theme]);

      return (
        <ThemeProvider theme={theme}>
          <div
            className="theme-toggle-bar-wrapper"
            id={`theme-toggle-bar-wrapper-${nameCounter}`}
          >
            <ToggleBar
              size="xsmall"
              name={`theme-${nameCounter}`}
              value={theme}
              htmlProps={{ 'aria-label': 'Tema' }}
              onChange={(_event, theme) => {
                if (theme) setTheme(theme);
              }}
            >
              <ToggleRadio value="core-light" label="core-light" />
              <ToggleRadio value="core-dark" label="core-dark" />
              <ToggleRadio value="public-light" label="public-light" />
              <ToggleRadio value="public-dark" label="public-dark" />
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
