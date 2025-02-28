import { type Property } from 'csstype';
import { type ComponentPropsWithRef } from 'react';

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
} & ComponentPropsWithRef<'input'>;

export type StatefulInputProps = {
  hasErrorMessage: boolean;
} & Omit<InputProps, keyof CommonInputProps>;

export type InputTypographyTypes = Record<InputSize, StaticTypographyType>;
