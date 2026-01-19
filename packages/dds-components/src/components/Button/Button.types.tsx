import {
  type ButtonHTMLAttributes,
  type ElementType,
  type ReactNode,
} from 'react';

import {
  type PolymorphicBaseComponentProps,
  createPurposes,
  createSizes,
} from '../../types';
import { type IconStatesOf, type SvgIcon } from '../Icon/utils';

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
  'onClick' | 'onFocus' | 'onBlur' | 'type' | 'aria-label'
>;

export type ButtonProps<
  I extends SvgIcon = SvgIcon,
  T extends ElementType = 'button',
> = PolymorphicBaseComponentProps<
  T,
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
    icon?: I;
    /**
     * Ikon-state hvis ikonet kan animeres; types basert på ikon valgt i `icon` prop. Statiske ikoner støtter ikke propen.
     */
    iconState?: IconStatesOf<I>;
    /**Knapp med full bredde. */
    fullWidth?: boolean;
  } & PickedHTMLAttributes
>;
