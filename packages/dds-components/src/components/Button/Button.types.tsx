import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import {
  type BaseComponentProps,
  createPurposes,
  createSizes,
} from '../../types';
import { type SvgIcon } from '../Icon/utils';

export const BUTTON_SIZES = createSizes('xsmall', 'small', 'medium', 'large');
export const BUTTON_PURPOSES = createPurposes(
  'primary',
  'secondary',
  'tertiary',
  'danger',
);
export type ButtonSize = (typeof BUTTON_SIZES)[number];
export type ButtonPurpose = (typeof BUTTON_PURPOSES)[number];
export type IconPosition = 'left' | 'right';

type PickedHTMLAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'onFocus' | 'onBlur' | 'type'
>;

export type ButtonProps = BaseComponentProps<
  HTMLButtonElement,
  {
    /** Størrelsen på knappen.
     *  @default "medium"
     */
    size?: ButtonSize;
    /**Innhold i knappen (unntatt ikon). */
    children?: ReactNode;
    /**Bestemmer farger basert på formål.
     * @default "primary"
     */
    purpose?: ButtonPurpose;
    /**	Posisjonen til ikonet i forhold til teksten.
     *  @default "left"
     */
    iconPosition?: IconPosition;
    /**Indikerer en loading-knapp. */
    loading?: boolean;
    /** Tooltip som vises ved loading.
     *  @default "Lagring pågår"
     */
    loadingTooltip?: string;
    /**Ikonet som ligger i knappen.  */
    icon?: SvgIcon;
    /**Knapp med full bredde. */
    fullWidth?: boolean;
    /**URL for knapper som skal brukes som lenke. Knappen blir til et `<a>`-element. */
    href?: string;
    /**Nativt `target`-attributt. Kan settes når knappen er et `<a>`-element.  */
    target?: string;
  } & PickedHTMLAttributes,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof PickedHTMLAttributes>
>;
