import { type InputHTMLAttributes } from 'react';

import { type BaseComponentProps, type Size } from '../../types';

export type InputStepperSize = Extract<Size, 'small' | 'medium'>;

export type InputStepperProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Id. */
    id?: string;
    /**Label */
    label: string;
    /**Label for minusknapp */
    decreaseButtonLabel?: string;
    /**Label for plussknapp */
    increaseButtonLabel?: string;

    /**Størrelse.
     * @default 'medium'
     */
    componentSize?: InputStepperSize;
    /**Formål.*/
    /**Minimumsverdi
     * @default 0
     */
    minValue?: number;
    /**Maksimumsverdi
     * @default 10
     */
    maxValue?: number;
    /**Steg
     * @default 1
     */
    step?: number;
    /**Startverdi
     * @default 0
     */
    defaultValue?: number | undefined;
    /** Funksjon for å håndtere onChange    */
    onChange?: (value: number) => void;
    /**Feilmelding */
    errorMessage?: string;
    /**Hjelpetekst */
    tip?: string;
    htmlProps?: React.InputHTMLAttributes<HTMLInputElement>;
  } & InputHTMLAttributes<HTMLInputElement>,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue'>
>;
