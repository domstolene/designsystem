import { type HTMLAttributes, type ReactNode } from 'react';

import { type Size } from '../../../types';

export type TableSize = Extract<Size, 'small' | 'medium' | 'large'>;

export type TableProps = {
  /**
   * Størrelse på tabellen. Påvirker tetthet i cellene og font.
   * @default "medium"
   */
  size?: TableSize;
  /**Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling. */
  stickyHeader?: boolean;
  /**Legger skillelinjer mellom radene. */
  withDividers?: boolean;
} & HTMLAttributes<HTMLTableElement>;

export type HeaderValues = Array<{ key: string; content: ReactNode }>;

export type TableRowType = 'body' | 'head';
export type RowMode = 'normal' | 'sum';

export type TableRowProps = {
  /**
   * Spesifiserer om raden skal brukes i `<head>` eller `<body>`-seksjonen.
   * @default "body" hvis den er brukt i `<Table.Body>` eller `<Table.Foot>`, 'head' hvis den er i `<Table.Head>`.
   */
  type?: TableRowType;
  /**Custom modus for rader som har ytterligere semantisk betydning (f.eks. summeringsrad), definerer kun styling.
   * Ved bruk av sum må `<Cell>` med tall i høyrestilles vha layout prop.
   * @default "normal"
   **/
  mode?: RowMode;
  /**Spesifiserer om raden har blitt valgt/markert. */
  selected?: boolean;
  /**Spesifiserer om raden skal ha hover styling. Brukes hovedsakelig på rader med klikkbar innhold. */
  hoverable?: boolean;
} & HTMLAttributes<HTMLTableRowElement>;
