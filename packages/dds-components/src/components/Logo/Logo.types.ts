import { type Language } from '../../i18n/translation.types';
import { type DdsThemeMode } from '../ThemeProvider';

export type LogoSource = string | Record<DdsThemeMode, string>;

export interface LogoDefSingle {
  src: LogoSource;
  alt: string | Record<Language, string>;
  height: number;
  width: number;
}

export interface LogoDefI18n {
  variants: Record<Language, LogoDefSingle>;
}

export type LogoDefinition = LogoDefSingle | LogoDefI18n;
