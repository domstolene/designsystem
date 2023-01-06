import { InputHTMLAttributes } from 'react';

export type CheckboxPickedHTMLAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'aria-describedby'
  | 'name'
  | 'checked'
  | 'defaultChecked'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'onBlur'
>;
