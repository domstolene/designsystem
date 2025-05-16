import { type Property } from 'csstype';
import {
  type AnchorHTMLAttributes,
  type InputHTMLAttributes,
  type RefObject,
} from 'react';

import { type BaseComponentPropsWithChildren } from '../../types';
import { type CheckboxPickedHTMLAttributes } from '../SelectionControl/Checkbox';

export type CardAppearance = 'filled' | 'border';

export type CardType = 'info' | 'navigation' | 'expandable';

type BaseCardProps<T extends HTMLElement> = BaseComponentPropsWithChildren<
  T,
  {
    /** Utseende på komponenten.
     * @default "filled"
     */
    appearance?: CardAppearance;

    /** Referanse til komponenten. */
    cardRef?: RefObject<T | null>;
  }
>;

export type InfoCardProps = BaseCardProps<HTMLDivElement> & {
  /** Spesifiserer funksjonalitet og formål med komponenten. **OBS!** ved `'navigation'` må `href` oppgis. */
  cardType: 'info';
};

export type NavigationCardProps = BaseCardProps<HTMLAnchorElement> & {
  cardType: 'navigation';
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target'>;

export type ExpandableCardProps = BaseCardProps<HTMLDivElement> & {
  cardType: 'expandable';
};

export type CardProps =
  | InfoCardProps
  | NavigationCardProps
  | ExpandableCardProps;

export type SelectionControlCardProps = BaseComponentPropsWithChildren<
  HTMLInputElement,
  Pick<BaseCardProps<HTMLInputElement>, 'appearance' | 'cardRef'> & {
    /** Spesifiserer funksjonalitet og formål med komponenten. */
    cardType: 'radio' | 'checkbox';
    /** Custom padding. */
    padding?: Property.Padding;
    controlPlacementProps?: {
      left?: Property.Left;
      top?: Property.Top;
    };
  } & CheckboxPickedHTMLAttributes,
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    keyof CheckboxPickedHTMLAttributes
  >
>;

// export type SelectionControlCardProps = Pick<
//   BaseCardProps<HTMLInputElement>,
//   'appearance' | 'cardRef'
// > & {
//   cardType: 'radio' | 'checkbox';
// } & SelectionControlCommonProps;
