import { type InputHTMLAttributes } from 'react';

import { type BaseComponentProps, type Size } from '../../types';
import { type InputProps } from '../helpers/Input';

export type InputStepperSize = Extract<Size, 'small' | 'medium'>;

export function isPositiveInteger(n: number): n is number {
  return Number.isInteger(n) && n >= 0;
}

export type InputStepperProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst for minusknapp */
    decreaseButtonLabel?: string;
    /**Ledetekst for plussknapp */
    increaseButtonLabel?: string;
    /**Minimumsverdi. Negative tall støttes ikke
     * @default 0
     */
    minValue?: number;
    /**Maksimumsverdi. Negative tall støttes ikke
     */
    maxValue: number;
    /**Steg. Negative tall støttes ikke
     * @default 1
     */
    step?: number;
    /**Startverdi
     * @default 0
     */
    defaultValue?: number;
    /**Verdi */
    value?: number;
    /** Funksjon for å håndtere onChange    */
    onChange?: (value: number) => void;
  } & InputProps,
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'defaultValue' | 'onChange' | 'width' | 'value'
  >
>;
