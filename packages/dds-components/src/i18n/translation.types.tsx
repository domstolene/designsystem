export type Language = 'nb' | 'nn' | 'no' | 'en';

export type TranslationObj = Record<Language, string | React.ReactElement>;

type TranslationFunction = (...args: Array<string | number>) => TranslationObj;

type Translation = TranslationObj | TranslationFunction;

export interface Translations {
  [key: string]: Translation | Translations;
}
