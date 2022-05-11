import { InputHTMLAttributes } from 'react';
import * as CSS from 'csstype';

export type InputProps = {
  /**Ledetekst for input. */
  label?: string;
  /**Bredde for inputfeltet. */
  width?: CSS.Property.Width<string>;
  /**Hjelpetekst. */
  tip?: string;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type StyledInputProps = Pick<
  InputProps,
  'readOnly' | 'label' | 'disabled'
> & { hasErrorMessage: boolean };

export type StyledLabelProps = Pick<InputProps, 'disabled'>;
