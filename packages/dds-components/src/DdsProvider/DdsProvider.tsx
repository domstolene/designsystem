import {
  ThemeProvider,
  type ThemeProviderProps,
} from '../components/ThemeProvider';
import { type LanguageContextProps, LanguageProvider } from '../i18n';

export type DdsProviderProps = LanguageContextProps & ThemeProviderProps;

export function DdsProvider({ language, theme, children }: DdsProviderProps) {
  <LanguageProvider language={language}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </LanguageProvider>;
}
