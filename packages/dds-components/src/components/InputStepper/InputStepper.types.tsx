import { type InputHTMLAttributes } from 'react';

import { type BaseComponentProps, type Size } from '../../types';

export type InputStepperSize = Extract<Size, 'small' | 'medium'>;

export function isPositiveInteger(n: number): n is number {
  return Number.isInteger(n) && n >= 0;
}

export type InputStepperProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst */
    label?: string;
    /**Ledetekst for minusknapp */
    decreaseButtonLabel?: string;
    /**Ledetekst for plussknapp */
    increaseButtonLabel?: string;
    /**Størrelse.
     * @default 'medium'
     */
    componentSize?: InputStepperSize;
    /**Minimumsverdi. Negative tall støttes ikke
     * @default 0
     */
    minValue?: number;
    /**Maksimumsverdi. Negative tall støttes ikke
     * @default 10
     */
    maxValue?: number;
    /**Steg. Negative tall støttes ikke
     * @default 1
     */
    step?: number;
    /**Startverdi
     * @default 0
     */
    defaultValue?: number;
    /**Disabled
     * @default false
     */
    disabled?: boolean;
    /**ReadOnly
     * @default false
     */
    readOnly?: boolean;
    /**Verdi */
    value?: number;
    /** Funksjon for å håndtere onChange    */
    onChange?: (value: number) => void;
    /**Feilmelding */
    errorMessage?: string;
    /**Hjelpetekst */
    tip?: string;
  } & InputHTMLAttributes<HTMLInputElement>,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange'>
>;
