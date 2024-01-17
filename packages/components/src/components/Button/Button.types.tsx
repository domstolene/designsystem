import {
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';

import { type BaseComponentProps } from '../../types';
import { type SvgIcon } from '../Icon/utils';

export type ButtonPurpose = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
export type ButtonAppearance = 'filled' | 'ghost' | 'rounded' | 'borderless';
export type IconPosition = 'left' | 'right';

type PickedHTMLAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'onFocus' | 'onBlur' | 'type'
>;

export type ButtonProps = BaseComponentProps<
  HTMLButtonElement,
  {
    /**Størrelsen på knappen. */
    size?: ButtonSize;
    /**
     * Innhold i knappen. Hvis `children` er definert så blir den prioritert.
     * @deprecated Bruk `children` i stedet.
     * */
    label?: string | ReactElement;
    /**Innhold i knappen. Denne blir prioritert over `label`. */
    children?: ReactNode;
    /**Bestemmer farger basert på formål. */
    purpose?: ButtonPurpose;
    /**	Posisjonen til ikonet i forhold til teksten.*/
    iconPosition?: IconPosition;
    /**Bestemmer utseende på knappen, bl.a. bakgrunn, border radius og skygger.  */
    appearance?: ButtonAppearance;
    /**Indikerer en loading-knapp. */
    loading?: boolean;
    /**Tooltip som vises ved loading. */
    loadingTooltip?: string;
    /**Ikonet som ligger i knappen.  */
    icon?: SvgIcon;
    /**Knapp med full bredde. */
    fullWidth?: boolean;
    /**URL for knapper som skal brukes som lenke. Knappen blir til et `<a>`-element. */
    href?: string;
    /**Nativt target-attributt som kan spesifiseres når knappen er et `<a>`-element.  */
    target?: string;
  } & PickedHTMLAttributes,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof PickedHTMLAttributes>
>;
