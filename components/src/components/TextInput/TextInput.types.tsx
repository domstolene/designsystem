import { InputHTMLAttributes } from 'react';

import { InputProps } from '../../helpers';

export type TextInputProps = {
  /**Gjør inputfeltet om til `<textarea>`. */
  multiline?: boolean;
  /** Spesifiserer om tegntelleren skal vises. */
  withCharacterCounter?: boolean;
} & InputProps &
  InputHTMLAttributes<HTMLTextAreaElement>;
