import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type RefObject,
} from 'react';

import { type Placement } from '../../hooks';
import { type BaseComponentPropsWithChildren } from '../../types';
import { type SvgIcon } from '../Icon/utils';

export interface OverflowMenuListItemBaseProps {
  /**Ikon som vises ved teksten. */
  icon?: SvgIcon;
}

export type OverflowMenuButtonProps = OverflowMenuListItemBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type OverflowMenuLinkProps = OverflowMenuListItemBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type OverflowMenuSpanProps = OverflowMenuListItemBaseProps &
  HTMLAttributes<HTMLSpanElement>;

export type OverflowMenuProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Plassering av menyen i forhold til anchor-elementet. */
    placement?: Placement;
    /**Avstand fra anchor-elementet i px. */
    offset?: number;
    /**Spesifiserer om menyen skal vises. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.  */
    isOpen?: boolean;
    /**Callback for å lukke menyen. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.  */
    onClose?: () => void;
    /**Callback for å toggle menyen. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.  */
    onToggle?: () => void;
    /**Ref til elementet som styrer menyen. **OBS!** nødvendig kun hvis ``<OverflowMenuGroup />` ikke brukes.  */
    anchorRef?: RefObject<HTMLButtonElement>;
  }
>;
