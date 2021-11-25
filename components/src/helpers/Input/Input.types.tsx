import { InputHTMLAttributes } from 'react';
import * as CSS from 'csstype';

export type InputProps = {
  label?: string;
  width?: CSS.WidthProperty<string>;
  tip?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type StyledInputProps = Pick<
  InputProps,
  'readOnly' | 'errorMessage' | 'label' | 'disabled'
>;
