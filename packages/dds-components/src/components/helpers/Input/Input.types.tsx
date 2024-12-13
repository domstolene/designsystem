import { type Property } from 'csstype';
import { type InputHTMLAttributes } from 'react';

import { type Size } from '../../../types';
import { type StaticTypographyType } from '../../Typography';

export interface CommonInputProps {
  /**Ledetekst. */
  label?: string;
  /**Bredde for inputfeltet. */
  width?: Property.Width;
  /**Hjelpetekst. */
  tip?: string;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
}

export type InputSize = Extract<Size, 'medium' | 'small' | 'xsmall'>;

export type InputProps = CommonInputProps & {
  /**Størrelse på inputfeltet.
   * @default "medium"
   */
  componentSize?: InputSize;
} & InputHTMLAttributes<HTMLInputElement>;

export type StatefulInputProps = {
  hasErrorMessage: boolean;
} & Pick<InputProps, 'componentSize'> &
  InputHTMLAttributes<HTMLInputElement>;

export type InputTypographyTypes = Record<InputSize, StaticTypographyType>;
