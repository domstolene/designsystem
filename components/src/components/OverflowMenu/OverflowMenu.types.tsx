import { Placement } from '../../hooks/useFloatPosition';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  RefObject
} from 'react';
import { IconName } from '../../icons';

export type OverflowMenuContextItem = {
  title: string;
  icon?: IconName;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);
export type OverflowMenuNavItem = {
  title: string;
  icon?: IconName;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type UserProps = {
  name: string;
  href?: string;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

export type OverflowMenuProps = {
  /**Lenker eller knapper som skal vises i menyen. Støtter ikon i tillegg til tekst. */
  items?: OverflowMenuContextItem[];
  /**Eget element for brukernavn, kan være interaktivt eller statisk. Ligger alltid på toppen av menyen. */
  userProps?: UserProps;
  /**Navigasjonslenker, brukes hvis navigasjonen skal ligge i menyen (f.eks. ved liten skjerm o.l.). */
  navItems?: OverflowMenuNavItem[];
  /**Spesifiserer om menyen skal vises. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.  */
  isOpen?: boolean;
  /**Callback for å lukke menyen. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.  */
  onClose?: () => void;
  /**Ref til elementet som styrer menyen. **OBS!** nødvendig kun hvis ``<OverflowMenuGroup />` ikke brukes.  */
  anchorRef?: RefObject<HTMLButtonElement>;
  /**Plassering av menyen i forhold til anchor-elementet. */
  placement?: Placement;
  /**Avstand fra anchor-elementet i px. */
  offset?: number;
} & HTMLAttributes<HTMLDivElement>;
