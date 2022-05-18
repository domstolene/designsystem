import { InputHTMLAttributes } from 'react';

import { InputProps } from '../../helpers/Input';

export type TextInputProps = {
  /**Gjør inputfeltet om til `<textarea>`. */
  multiline?: boolean;
} & InputProps &
  InputHTMLAttributes<HTMLTextAreaElement>;
