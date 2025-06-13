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
    nn: 'Escape, Enter eller Tab for å lagre.',
    en: 'Escape, Enter or Tab to save.',
  },
  notClearable: {
    nb: ' Inputfeltet er ikke tømbart.',
    no: ' Inputfeltet er ikke tømbart.',
    nn: ' Inputfeltet er ikke tømbart.',
    en: ' Input field cannot be cleared.',
  },
});
