import '@norges-domstoler/dds-components/index.css';
import addonA11y from '@storybook/addon-a11y';
import addonDocs from '@storybook/addon-docs';
import {
  DocsContainer,
  type DocsContainerProps,
  Unstyled,
} from '@storybook/addon-docs/blocks';
import addonLinks from '@storybook/addon-links';
import { definePreview } from '@storybook/react-vite';
import { type PropsWithChildren, useEffect, useState } from 'react';

import {
  DdsProvider,
  Toggle,
  ToggleBar,
  ToggleRadio,
} from '../packages/dds-components/src';
import {
  type DdsThemeMain,
  type DdsThemeMode,
} from '../packages/dds-components/src/components/ThemeProvider/ThemeProvider';

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

export default definePreview({
  parameters: {
    controls: { sort: 'requiredFirst' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', '*', ['Introduction', 'Changelog']],
      },
    },
    docs: {
      container: ({
        children,
        context,
      }: PropsWithChildren<DocsContainerProps>) => (
        <DocsContainer context={context}>
          <Unstyled>
            {/**Setter fast theme for Storybook preview */}
            <DdsProvider language="nb">{children}</DdsProvider>
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
          <DdsProvider language="nb">
            <Story />
          </DdsProvider>
        );
      }

      const [mainTheme, setMainTheme] = useState<DdsThemeMain>('core');
      const [mode, setMode] = useState<boolean>(false);
      nameCounter++;
      const checkedToMode: (checked: boolean) => DdsThemeMode = (
        checked: boolean,
      ) => (checked ? 'dark' : 'light');

      useEffect(() => {
        setCanvasBackgroundFromTheme(nameCounter);
      }, [mainTheme, mode]);

      return (
        <DdsProvider
          theme={`${mainTheme}-${checkedToMode(mode)}`}
          language="nb"
        >
          <div
            className="theme-toggle-bar-wrapper"
            id={`theme-toggle-bar-wrapper-${nameCounter}`}
          >
            <Toggle
              name={`mode-toggle-${nameCounter}`}
              htmlProps={{ 'aria-label': 'Modus' }}
              checked={mode}
              onChange={setMode}
              variant="colorScheme"
            />
            <ToggleBar
              size="xsmall"
              name={`theme-${nameCounter}`}
              value={mainTheme}
              htmlProps={{ 'aria-label': 'Tema' }}
              onChange={(_event, theme) => {
                if (theme) setMainTheme(theme);
              }}
              purpose="secondary"
            >
              <ToggleRadio value="core" label="core" />
              <ToggleRadio value="public" label="public" />
            </ToggleBar>
          </div>
          <Story />
        </DdsProvider>
      );
    },
  ],

  tags: ['autodocs'],
  addons: [addonLinks(), addonA11y(), addonDocs()],
});
