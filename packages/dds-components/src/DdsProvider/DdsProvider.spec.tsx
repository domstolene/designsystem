import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { describe, expect, it } from 'vitest';

import { DdsProvider } from './DdsProvider';
import { useTheme } from '../components/ThemeProvider';
import { LanguageContext } from '../i18n/LanguageProvider';

function LanguageConsumer() {
  const lang = useContext(LanguageContext)?.language;

  if (!lang) {
    throw new Error('Missing language context');
  }

  return <div data-testid="lang">{lang}</div>;
}

function ThemeConsumer() {
  const { themeName } = useTheme();
  return <div data-testid="theme">{themeName}</div>;
}

describe('<DdsProvider>', () => {
  it('renders children', () => {
    const text = 'text';
    render(
      <DdsProvider language="nb">
        <span>{text}</span>
      </DdsProvider>,
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('provides the correct language to children', () => {
    const language = 'en';
    render(
      <DdsProvider language={language}>
        <LanguageConsumer />
      </DdsProvider>,
    );
    expect(screen.getByTestId('lang')).toHaveTextContent(language);
  });

  it('provides the default theme "core-light" when no theme is given', () => {
    render(
      <DdsProvider language="nb">
        <ThemeConsumer />
      </DdsProvider>,
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('core-light');
  });

  it('provides the specified theme to children', () => {
    const theme = 'core-dark';
    render(
      <DdsProvider language="nb" theme={theme}>
        <ThemeConsumer />
      </DdsProvider>,
    );
    expect(screen.getByTestId('theme')).toHaveTextContent(theme);
  });

  it('applies the theme CSS class to the wrapper element', () => {
    const theme = 'core-light';
    const { container } = render(
      <DdsProvider language="nb" theme={theme}>
        <span>test</span>
      </DdsProvider>,
    );
    expect(container.firstChild).toHaveClass(`dds-${theme}`);
  });
});
