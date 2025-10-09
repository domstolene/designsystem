import { type ComponentPropsWithRef, type ReactNode } from 'react';

import { createSizes } from '../../../types';
import { type ResponsiveProps } from '../../layout/common/Responsive.types';
import { type StaticTypographyType } from '../../Typography';

export interface CommonInputProps {
  /**Ledetekst. */
  label?: string;
  /** Innhold etter ledetekst, f.eks. knapp som viser ekstra info e.l. */
  afterLabelContent?: ReactNode;
  /**Bredde for inputfeltet. Kan settes per brekkpunkt, manglende brekkpunter får da default bredde. */
  width?: ResponsiveProps['width'];
  /**Hjelpetekst. */
  tip?: string;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
}

export const INPUT_SIZES = createSizes('xsmall', 'small', 'medium');
export type InputSize = (typeof INPUT_SIZES)[number];

export type InputProps = CommonInputProps & {
  /**Størrelse på inputfeltet.
   * @default "medium"
   */
  componentSize?: InputSize;
} & Omit<ComponentPropsWithRef<'input'>, 'width'>;

export type StatefulInputProps = {
  hasErrorMessage: boolean;
} & Omit<InputProps, keyof CommonInputProps>;

export type InputTypographyTypes = Record<InputSize, StaticTypographyType>;
