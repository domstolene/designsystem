import { type Property } from 'csstype';
import { type AnchorHTMLAttributes, type RefObject } from 'react';

import { type BaseComponentPropsWithChildren } from '../../types';
import { type CheckboxPickedHTMLAttributes } from '../SelectionControl/Checkbox';
import { type SelectionControlCommonProps } from '../SelectionControl/common/SelectionControl.types';
import { type RadioPickedInputHTMLAttributes } from '../SelectionControl/RadioButton/RadioButton.types';

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
} & Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'target' | 'onClick'
  >;

export type ExpandableCardProps = BaseCardProps<HTMLDivElement> & {
  cardType: 'expandable';
};

export type CardProps =
  | InfoCardProps
  | NavigationCardProps
  | ExpandableCardProps;

export type CardSelectableType = 'radio' | 'checkbox';

export type CardSelectableProps = BaseComponentPropsWithChildren<
  HTMLInputElement,
  Pick<BaseCardProps<HTMLInputElement>, 'appearance'> &
    Omit<SelectionControlCommonProps, 'label'> & {
      /** Spesifiserer inputtype som returneres. */
      cardType?: CardSelectableType;
      /** Custom padding. */
      padding?: Property.Padding;
      /** Custom absolutt posisjonering av kontroll-elementet. */
      controlPlacementProps?: {
        left?: Property.Left;
        top?: Property.Top;
      };
    } & RadioPickedInputHTMLAttributes &
    CheckboxPickedHTMLAttributes
>;
