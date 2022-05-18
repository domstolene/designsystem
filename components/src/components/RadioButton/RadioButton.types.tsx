import { InputHTMLAttributes } from 'react';

export type RadioButtonProps = {
  /**Ledetekst for alternativet. */
  label?: string;
  /**Spesifiserer om input er disabled. */
  disabled?: boolean;
  /**Indikerer valideringsfeil. Påvirker styling. */
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
