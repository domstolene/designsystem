import { HTMLAttributes, ReactNode } from 'react';

export type TableDensity = 'normal' | 'compact' | 'alternative';

export type TableProps = {
  /**Spesifiserer hvor romslige cellene i tabellen skal være. */
  density?: TableDensity;
  /**Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling. */
  stickyHeader?: boolean;
  /**Legger skillelinjer mellom radene. */
  withDividers?: boolean;
} & HTMLAttributes<HTMLTableElement>;

export type HeaderValues = { key: string; content: ReactNode }[];

export type CollapsibleTableProps = {
  /**Om tabellen skal kollapse. */
  isCollapsed?: boolean;
  /**Innhold i headere (`content`) og deres `key`. `headerValues.content` må være den samme som faktisk innhold i `<Table.Cell type='head'>`. */
  headerValues: HeaderValues;
  /**
   * Indeksen(e) til kolonnen(e) som skal synes når tabellen er kollapset. Rekkefølgen i array avgjør rekkefølgen i render.
   * @default [0]
   *  */
  definingColumnIndex?: number[];
} & TableProps;

export type TableRowType = 'body' | 'head';
export type RowMode = 'normal' | 'sum';

export type TableRowProps = {
  /**Spesifiserer om raden skal brukes i `<head>` eller `<body>`-seksjonen. */
  type?: TableRowType;
  /**Custom modus for rader som har ytterligere semantisk betydning (f.eks. summeringsrad), definerer kun styling. Ved bruk av sum må `<Cell>` med tall i høyrestilles vha layout prop.  */
  mode?: RowMode;
  /**Spesifiserer om raden har blitt valgt/markert. */
  selected?: boolean;
  /**Spesifiserer om raden skal ha hover styling. Brukes hovedsakelig på klikkbare rader. */
  hoverable?: boolean;
  /**Spesifiserer om raden med type="head" skal ha hvit bakgrunnsfarge. */
  useWhiteBackground?: boolean;
  /**Spesifiserer om radene skal ha motsatt even-odd bakgrunnsfarge sammenlignet med default. */
  invertEvenOdd?: boolean;
} & HTMLAttributes<HTMLTableRowElement>;
