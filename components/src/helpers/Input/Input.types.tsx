import { InputHTMLAttributes } from 'react';
import { Property } from 'csstype';

export type InputProps = {
  /**Ledetekst for input. */
  label?: string;
  /**Bredde for inputfeltet. */
  width?: Property.Width<string>;
  /**Hjelpetekst. */
  tip?: string;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type StyledInputProps = Pick<InputProps, 'readOnly' | 'disabled'> & {
  hasErrorMessage: boolean;
  hasLabel: boolean;
};

export type StyledLabelProps = { disabled?: boolean };
