import { InputHTMLAttributes } from 'react';

import { InputProps } from '../../helpers';
import { SvgIcon } from '../../icons/utils';

export type TextInputProps = {
  /**Gjør inputfeltet om til `<textarea>`. */
  multiline?: boolean;
  /** Spesifiserer om tegntelleren skal vises. */
  withCharacterCounter?: boolean;
  /** Ikonet som vises i komponenten. */
  icon?: SvgIcon;
} & InputProps &
  InputHTMLAttributes<HTMLTextAreaElement>;
