import { InputHTMLAttributes } from 'react';

import { InputProps } from '../../helpers';

export type TextInputProps = {
  /**Gjør inputfeltet om til `<textarea>`. */
  multiline?: boolean;
} & InputProps &
  InputHTMLAttributes<HTMLTextAreaElement>;
