import { InputHTMLAttributes } from 'react';
import { BaseComponentProps } from '@norges-domstoler/dds-core';

export type CheckboxPickedHTMLAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'aria-describedby'
  | 'name'
  | 'checked'
  | 'defaultChecked'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'onBlur'
>;

export type CheckboxProps = BaseComponentProps<
  HTMLInputElement,
  {
    /** Ledetekst for inputelementet. */
    label?: string;
    /**Indikererr ugyldig input, endrer styling. */
    error?: boolean;
    /** Setter disabled-tilstand for inputelementet. */
    disabled?: boolean;
    /**Inputelementet blir readOnly - den kan ikke interageres med. Brukes til å hente input brukeren har fylt ut andre steder. */
    readOnly?: boolean;
    /**Brukes ved nøstet struktur der alle Checkbox som hører til en gruppe kan bli valgt ved å trykke på en forelder Checkbox. Hvis enkelte <Checkbox /> blir valgt men ikke alle skal forelder <Checkbox /> få tilstanden indeterminate - verken checked eller ikke. */
    indeterminate?: boolean;
  } & CheckboxPickedHTMLAttributes,
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    keyof CheckboxPickedHTMLAttributes
  >
>;
