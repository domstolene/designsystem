import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';

import { type BaseComponentProps } from '../../types';
import { type ScreenSizeLiteral } from '../helpers';
import { type SvgIcon } from '../Icon/utils';

type NavigationLinkProps = {
  href: string;
  title: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ContextMenuElementProps = {
  title: string;
  href?: string;
  icon?: SvgIcon;
  onClick?: () => void;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

interface InternaHeaderUserProps {
  name: string;
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
    smallScreenBreakpoint?: ScreenSizeLiteral;
    /**Info om brukeren. Dukker opp som punkt på toppen av kontekstmenyen med tekst oppgitt i name. Blir en lenke hvis href er oppgitt. */
    userProps?: InternaHeaderUserProps;
    /**Lenker som skal vises i navigasjonsmenyen. */
    navigationElements?: Array<NavigationLinkProps>;
    /**Lenker eller knapper som skal vises i kontekstmenyen. Støtter ikon i tillegg til tekst. */
    contextMenuElements?: Array<ContextMenuElementProps>;
    /**URL til siden i navigasjonen brukeren er på. Gir highlight til navigasjonselementet i navigationElements med samme URL. */
    currentPageHref?: string;
    /**Ekstra logikk som kjøres når currentPage endres. */
    onCurrentPageChange?: () => void;
  }
>;
