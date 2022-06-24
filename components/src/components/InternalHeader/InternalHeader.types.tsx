import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types';

type NavigationLinkProps = {
  href: string;
  title: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ContextMenuElementProps = {
  title: string;
  href?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  onClick?: () => void;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

type InternaHeaderUserProps = {
  name: string;
  href?: string;
};

export type InternalHeaderProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Navn på applikasjonen. */
    applicationName?: string;
    /**Indikerer om versjonen for små skjermer skal vises. */
    smallScreen?: boolean;
    /**Info om brukeren. Dukker opp som punkt på toppen av kontekstmenyen med tekst oppgitt i name. Blir en lenke hvis href er oppgitt. */
    userProps?: InternaHeaderUserProps;
    /**Lenker som skal vises i navigasjonsmenyen. */
    navigationElements?: NavigationLinkProps[];
    /**Lenker eller knapper som skal vises i kontekstmenyen. Støtter ikon i tillegg til tekst. */
    contextMenuElements?: ContextMenuElementProps[];
    /**URL til siden i navigasjonen brukeren er på. Gir highlight til navigasjonselementet i navigationElements med samme URL. */
    currentPageHref?: string;
    /**Ekstra logikk som kjøres når currentPage endres. */
    onCurrentPageChange?: () => void;
  }
>;
