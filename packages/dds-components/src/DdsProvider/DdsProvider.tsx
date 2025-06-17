import {
  ThemeProvider,
  type ThemeProviderProps,
} from '../components/ThemeProvider';
import { LanguageProvider, type LanguageProviderProps } from '../i18n';

export type DdsProviderProps = LanguageProviderProps & ThemeProviderProps;

export function DdsProvider({ language, theme, children }: DdsProviderProps) {
  return (
    <LanguageProvider language={language}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageProvider>
  );
}
