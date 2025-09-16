import { type Language } from '../../../i18n/translation.types';

export const LOCALE: Record<Language, string> = {
  nb: 'nb-NO',
  no: 'no-NO',
  nn: 'nn-NO',
  en: 'en-GB',
} as const;

export const timezone = 'Europe/Oslo' as const;
