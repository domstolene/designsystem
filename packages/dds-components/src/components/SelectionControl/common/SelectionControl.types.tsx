import { type ReactNode } from 'react';

import { type Direction } from '../../../types';

export interface SelectionControlCommonProps {
  /**Ledetekst for alternativet. */
  label?: string;
  /**Spesifiserer om input er `disabled`. */
  disabled?: boolean;
  /**Indikerer valideringsfeil. Påvirker styling. */
  error?: boolean;
  /**Inputelementet blir `readonly` - den kan ikke interageres med. Brukes bl.a. til å presentere input brukeren har fylt ut andre steder. */
  readOnly?: boolean;
  /**Barn. Brukes når komponenten skal ha unik layout eller lignende. */
  children?: ReactNode;
}

export interface SelectionControlGroupCommonProps {
  /**Ledetekst for gruppen. */
  label?: string;
  /**Retningen barna gjengis i.
   * @default "row"
   */
  direction?: Direction;
  /**Custom id for for gruppen, knytter ledetekst til gruppen via `aria-label`. */
  groupId?: string;
  /**Hjelpetekst for gruppen. */
  tip?: string;
  /**Gir alle barna `disabled` prop. */
  disabled?: boolean;
  /**Gir alle barna `readOnly` prop. */
  readOnly?: boolean;
  /**Meldingen som vises ved valideringsfeil. Gir error-tilstand til barna og setter `aria-describedby` for barna. */
  errorMessage?: string;
}
