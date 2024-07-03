import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type RefObject,
} from 'react';

import { type Placement } from '../../hooks';
import { type BaseComponentPropsWithChildren } from '../../types';
import { type SvgIcon } from '../Icon/utils';

interface OverflowMenuItemBase {
  title: string;
  icon?: SvgIcon;
}

export type OverflowMenuButtonItem = OverflowMenuItemBase &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type OverflowMenuLinkItem = OverflowMenuItemBase &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type OverflowMenuContextItem =
  | OverflowMenuButtonItem
  | OverflowMenuLinkItem;

export type OverflowMenuNavItem = OverflowMenuLinkItem;

type UserProps = {
  name: string;
  href?: string;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);
export interface OverflowMenuListItemBaseProps {
  /**Ikon som vises ved teksten. */
  icon?: SvgIcon;
}

export type OverflowMenuButtonProps = OverflowMenuListItemBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type OverflowMenuLinkProps = OverflowMenuListItemBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type OverflowMenuSpanProps = OverflowMenuListItemBaseProps &
  BaseComponentPropsWithChildren<HTMLSpanElement>;

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
    /**Lenker eller knapper som skal vises i menyen. Støtter ikon i tillegg til tekst.
     *
     * @deprecated
     */
    items?: Array<OverflowMenuContextItem>;
    /**Eget element for brukernavn, kan være interaktivt eller statisk. Ligger alltid på toppen av menyen.
     *
     * @deprecated
     */
    userProps?: UserProps;
    /**Navigasjonslenker, brukes hvis navigasjonen skal ligge i menyen (f.eks. ved liten skjerm o.l.).
     *
     * @deprecated
     */
    navItems?: Array<OverflowMenuNavItem>;
  }
>;
