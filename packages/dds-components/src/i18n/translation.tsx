import { useLanguage } from './LanguageProvider';
import { type TranslationObj, type Translations } from './translation.types';

export function useTranslation() {
  const lang = useLanguage();
  const t = (text: TranslationObj) => text[lang] as string;
  return { t, lang };
}

export function createTexts<T extends Translations>(texts: T) {
  return texts;
}
