import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type RefObject,
} from 'react';

import { type Placement } from '../../hooks';
import { type BaseComponentProps } from '../../types';
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

export type OverflowMenuProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Lenker eller knapper som skal vises i menyen. Støtter ikon i tillegg til tekst. */
    items?: Array<OverflowMenuContextItem>;
    /**Eget element for brukernavn, kan være interaktivt eller statisk. Ligger alltid på toppen av menyen. */
    userProps?: UserProps;
    /**Navigasjonslenker, brukes hvis navigasjonen skal ligge i menyen (f.eks. ved liten skjerm o.l.). */
    navItems?: Array<OverflowMenuNavItem>;
    /**Spesifiserer om menyen skal vises. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.  */
    isOpen?: boolean;
    /**Callback for å lukke menyen. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.  */
    onClose?: () => void;
    /**Callback for å toggle menyen. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.  */
    onToggle?: () => void;
    /**Ref til elementet som styrer menyen. **OBS!** nødvendig kun hvis ``<OverflowMenuGroup />` ikke brukes.  */
    anchorRef?: RefObject<HTMLButtonElement>;
    /**Plassering av menyen i forhold til anchor-elementet. */
    placement?: Placement;
    /**Avstand fra anchor-elementet i px. */
    offset?: number;
  }
>;
