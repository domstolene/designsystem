import { InputHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types';

type PickedInputHTMLAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'name'
  | 'readOnly'
  | 'checked'
  | 'value'
  | 'required'
  | 'onChange'
  | 'aria-describedby'
>;

export type RadioButtonProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst for alternativet. */
    label?: string;
    /**Spesifiserer om input er disabled. */
    disabled?: boolean;
    /**Indikerer valideringsfeil. Påvirker styling. */
    error?: boolean;
  } & PickedInputHTMLAttributes,
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof PickedInputHTMLAttributes>
>;
