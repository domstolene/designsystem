import { InputHTMLAttributes } from 'react';
import { Property } from 'csstype';

export type InputSize = 'medium' | 'small' | 'tiny';

export type InputProps = {
  /**Ledetekst for input. */
  label?: string;
  /**Størrelse på inputfeltet. */
  componentSize?: InputSize;
  /**Bredde for inputfeltet. */
  width?: Property.Width<string>;
  /**Hjelpetekst. */
  tip?: string;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type StyledInputProps = Pick<
  InputProps,
  'readOnly' | 'disabled' | 'componentSize'
> & {
  hasErrorMessage: boolean;
};
