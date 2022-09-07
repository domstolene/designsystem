import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { SvgIcon } from '../../icons/utils';
import { BaseComponentProps } from '../../types';

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

type InternaHeaderUserProps = {
  name: string;
  href?: string;
};

export type InternalHeaderProps = BaseComponentProps<
  HTMLDivElement,
  {
    /**Logo i form av tekst. Brukes til navnet på applikasjonen fram til Lovisa Next kommer. */
    logo?: string;
    /**Navn på applikasjonen. Brukes til navnet til undersiden eller kort beskrivelse fram til Lovisa Next kommer. */
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
