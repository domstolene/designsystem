import { InputHTMLAttributes } from 'react';
import { Property } from 'csstype';
import { StaticTypographyType } from '@norges-domstoler/dds-typography';

export interface CommonInputProps {
  /**Ledetekst for input. */
  label?: string;
  /**Bredde for inputfeltet. */
  width?: Property.Width<string>;
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

export type StyledCommonInputProps = Pick<
  InputProps,
  'readOnly' | 'disabled'
> & {
  hasErrorMessage: boolean;
};

export type StyledInputProps = StyledCommonInputProps & {
  prefixLength?: number;
  suffixLength?: number;
} & Pick<InputProps, 'componentSize'>;

export type InputTypographyTypes = { [k in InputSize]: StaticTypographyType };
