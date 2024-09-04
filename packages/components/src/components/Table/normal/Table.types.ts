import { type HTMLAttributes, type ReactNode } from 'react';

import { type Density } from '../../../types';

export type TableDensity = Density;

export type TableProps = {
  /**Spesifiserer hvor romslige cellene i tabellen skal være.
   * @default "normal"
   */
  density?: TableDensity;
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
