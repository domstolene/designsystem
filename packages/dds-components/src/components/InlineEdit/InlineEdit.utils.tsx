import { createTexts, useTranslation } from '../../i18n';
import { VisuallyHidden } from '../VisuallyHidden';

export const inlineEditVisuallyHidden = (id: string, clearable?: boolean) => {
  const { t } = useTranslation();
  return (
    <VisuallyHidden id={id}>
      {t(texts.inlineEditInfo)}
      {!clearable && t(texts.notClearable)}
    </VisuallyHidden>
  );
};

const texts = createTexts({
  inlineEditInfo: {
    nb: 'Escape, Enter eller Tab for å lagre.',
    no: 'Escape, Enter eller Tab for å lagre.',
    nn: 'Escape, Enter eller Tab for å lagra.',
    en: 'Escape, Enter or Tab to save.',
  },
  notClearable: {
    nb: ' Innskrivingsfeltet kan ikke tømmes.',
    no: ' Innskrivingsfeltet kan ikke tømmes.',
    nn: ' Innskrivingsfeltet kan ikkje tømmast.',
    en: ' Input field cannot be cleared.',
  },
});
