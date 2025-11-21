import { type ReactNode, createContext, useContext } from 'react';

import { type Language } from './translation.types';

export interface LanguageContextProps {
  language: Language;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

export interface LanguageProviderProps {
  language: Language;
  children?: ReactNode;
}

export function LanguageProvider({
  /**Språk på siden. */
  language,
  /**Selve applikasjonen. */
  children,
}: LanguageProviderProps) {
  return <LanguageContext value={{ language }}>{children}</LanguageContext>;
}

export function useLanguage() {
  const lang = useContext(LanguageContext)?.language;

  if (!lang) {
    throw new Error('useLangage must be used within DdsProvider.');
  }

  return lang;
}
