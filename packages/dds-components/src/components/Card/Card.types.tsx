import { type Property } from 'csstype';
import {
  type AnchorHTMLAttributes,
  type ComponentPropsWithRef,
  type ElementType,
  type RefObject,
} from 'react';

import {
  type BaseComponentPropsWithChildren,
  type PolymorphicBaseComponentProps,
} from '../../types';
import { type CheckboxPickedHTMLAttributes } from '../SelectionControl/Checkbox';
import { type SelectionControlCommonProps } from '../SelectionControl/common/SelectionControl.types';
import { type RadioPickedInputHTMLAttributes } from '../SelectionControl/RadioButton/RadioButton.types';

export type CardAppearance = 'filled' | 'border';

export type CardType = 'info' | 'navigation' | 'expandable';

interface CardCommonProps {
  /** Utseende på komponenten.
   * @default "filled"
   */
  appearance?: CardAppearance;
}

type BaseCardProps<T extends HTMLElement> = BaseComponentPropsWithChildren<
  T,
  CardCommonProps & {
    /** Referanse til komponenten. */
    cardRef?: RefObject<T | null>;
  }
>;

export type InfoCardProps = BaseCardProps<HTMLDivElement> & {
  /** Spesifiserer funksjonalitet og formål med komponenten. **OBS!** ved `'navigation'` må `href` oppgis. */
  cardType: 'info';
};

export type NavigationCardProps<T extends ElementType = 'a'> =
  PolymorphicBaseComponentProps<
    T,
    CardCommonProps & {
      /** Spesifiserer funksjonalitet og formål med komponenten. */
      cardType: 'navigation';
      /** Referanse til komponenten. */
      cardRef?: ComponentPropsWithRef<T>['ref'];
      /**
       * Tvinger komponenten til å behandle `as` som en anchor wrapper og forwarde anchor-spesifikke props.
       * Brukes når custom `as` komponent wrapper en `<a>` tag.
       */
      isAnchor?: boolean;
    } & (T extends 'a'
        ? Pick<
            AnchorHTMLAttributes<HTMLAnchorElement>,
            'href' | 'target' | 'onClick'
          >
        : object)
  >;

export type ExpandableCardProps = BaseCardProps<HTMLDivElement> & {
  cardType: 'expandable';
};

export type CardProps<T extends ElementType = 'a'> =
  InfoCardProps | NavigationCardProps<T> | ExpandableCardProps;

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
