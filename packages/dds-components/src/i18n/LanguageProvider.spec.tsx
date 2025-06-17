import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LanguageProvider, createTexts, useLanguage, useTranslation } from '.';

function TestComponent() {
  const lang = useLanguage();
  return <div>{lang}</div>;
}
function TranslationComponent() {
  const { t } = useTranslation();
  const translated = t({ en: 'Hello', nb: 'Hei', nn: 'Hei', no: 'Hei' });
  return <div>{translated}</div>;
}

describe('LanguageProvider', () => {
  it('provides the correct language to children', () => {
    const l = 'en';
    render(
      <LanguageProvider language={l}>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByText(l)).toBeInTheDocument();
  });

  it('returns English translation based on language', () => {
    render(
      <LanguageProvider language="en">
        <TranslationComponent />
      </LanguageProvider>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
  it('returns Nynorsk translation based on language', () => {
    render(
      <LanguageProvider language="nn">
        <TranslationComponent />
      </LanguageProvider>,
    );
    expect(screen.getByText('Hei')).toBeInTheDocument();
  });

  it('returns the same object passed to createTexts', () => {
    const texts = {
      greeting: { en: 'Hello', nb: 'Hei', nn: 'Hei', no: 'Hei' },
    };
    const result = createTexts(texts);
    expect(result).toEqual(texts);
  });
});
