import styles from './InlineEdit.module.css';
import { createTexts, useTranslation } from '../../i18n';
import focusStyles, { focusable } from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import typographyStyles from '../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../VisuallyHidden';

export const inlineEditVisuallyHidden = (id: string, clearable?: boolean) => {
  const { t } = useTranslation();
  return (
    <VisuallyHidden id={id}>
      {t(texts.inlineEditInfo)} {!clearable && t(texts.notClearable)}
    </VisuallyHidden>
  );
};

const texts = createTexts({
  inlineEditInfo: {
    nb: 'Escape, Enter eller Tab for å lagre.',
    no: 'Escape, Enter eller Tab for å lagre.',
    nn: 'Escape, Enter eller Tab for å lagra.',
    en: 'Escape, Enter or Tab to save.',
    se: 'Escape, Enter dahje Tab go áiggut vurket',
  },
  notClearable: {
    nb: 'Innskrivingsfeltet kan ikke tømmes.',
    no: 'Innskrivingsfeltet kan ikke tømmes.',
    nn: 'Innskrivingsfeltet kan ikkje tømmast.',
    en: 'Input field cannot be cleared.',
    se: 'Čállinbáikki ii sáhte sihkut',
  },
});

export const inlineEditCns = (
  hasErrorState?: boolean,
  showEditingIcon?: boolean,
) => [
  styles['inline-input'],
  typographyStyles['body-medium'],
  hasErrorState && styles['inline-input--danger'],
  showEditingIcon && styles['inline-input--with-icon'],
];

export const inlineInputCns = (
  hasErrorState?: boolean,
  showEditingIcon?: boolean,
) => [...inlineEditCns(hasErrorState, showEditingIcon), focusable];

export const inlineTextareaCns = (
  hasErrorState?: boolean,
  showEditingIcon?: boolean,
) => [...inlineInputCns(hasErrorState, showEditingIcon), utilStyles.scrollbar];

export const inlineSelectCns = (
  hasErrorState?: boolean,
  showEditingIcon?: boolean,
  hasValue?: boolean,
) => [
  ...inlineEditCns(hasErrorState, showEditingIcon),
  styles['inline-select'],
  hasValue && styles['inline-select--with-clear-button'],
  focusStyles['focusable-focus'],
];
