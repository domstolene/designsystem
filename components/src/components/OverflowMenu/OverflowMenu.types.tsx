import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Placement } from '../../hooks/useFloatPosition';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, RefObject } from 'react';
import { BaseComponentProps } from '../../types';

export type OverflowMenuContextItem = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);
export type OverflowMenuNavItem = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

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
  }
>;
