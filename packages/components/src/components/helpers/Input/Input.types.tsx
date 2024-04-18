import { type Property } from 'csstype';
import { type InputHTMLAttributes } from 'react';

import { type StaticTypographyType } from '../../Typography';

export interface CommonInputProps {
  /**Ledetekst for input. */
  label?: string;
  /**Bredde for inputfeltet. */
  width?: Property.Width;
  /**Hjelpetekst. */
  tip?: string;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
}

export type InputSize = 'medium' | 'small' | 'tiny';

export type InputProps = CommonInputProps & {
  /**Størrelse på inputfeltet. */
  componentSize?: InputSize;
} & InputHTMLAttributes<HTMLInputElement>;

export type StatefulInputProps = {
  hasErrorMessage: boolean;
} & Pick<InputProps, 'componentSize'> &
  InputHTMLAttributes<HTMLInputElement>;

export type InputTypographyTypes = { [k in InputSize]: StaticTypographyType };
