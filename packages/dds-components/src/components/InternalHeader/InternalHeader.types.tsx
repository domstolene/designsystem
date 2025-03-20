import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';

import { type BaseComponentProps } from '../../types';
import { type SvgIcon } from '../Icon/utils';
import { type Breakpoint } from '../layout';

type NavigationLinkProps = {
  children: ReactNode;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ContextMenuElementProps = {
  children: ReactNode;
  href?: string;
  icon?: SvgIcon;
  onClick?: () => void;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

interface InternaHeaderUserProps {
  children: ReactNode;
  href?: string;
}

export type InternalHeaderProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Navn på applikasjonen. */
    applicationName?: string;
    /**Beskrivelse på applikasjonen ellen tittel på en underside. Tilgjengelig fram til Lovisa Next kommer. */
    applicationDesc?: string;
    /**URL til hovedsiden. */
    applicationHref?: string;
    /**Spesifiserer ved hvilket brekkpunkt og nedover versjonen for små skjermer skal vises; den justerer på spacing og legger navigasjonen i kontekstmenyen. */
    smallScreenBreakpoint?: Breakpoint;
    /**Info om brukeren. Dukker opp som punkt på toppen av kontekstmenyen med tekst oppgitt i name. Blir en lenke hvis href er oppgitt. */
    user?: InternaHeaderUserProps;
    /**Lenker som skal vises i navigasjonsmenyen. */
    navItems?: Array<NavigationLinkProps>;
    /**Lenker eller knapper som skal vises i kontekstmenyen. Støtter ikon i tillegg til tekst. */
    contextMenuItems?: Array<ContextMenuElementProps>;
    /**URL til siden i navigasjonen brukeren er på. Gir highlight til navigasjonselementet i navItems med samme URL. */
    currentPageHref?: string;
    /**Ekstra logikk som kjøres når currentPage endres. */
    onCurrentPageChange?: () => void;
  }
>;
