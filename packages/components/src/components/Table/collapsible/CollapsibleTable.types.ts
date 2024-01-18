import { type HeaderValues, type TableProps } from '../normal/Table.types';

export type CollapsibleTableProps = {
  /**Om tabellen skal kollapse. */
  isCollapsed?: boolean;
  /**Innhold i headere (`content`) og deres `key`. `headerValues.content` må være den samme som faktisk innhold i `<Table.Cell type='head'>`. */
  headerValues: HeaderValues;
  /**
   * Indeksen(e) til kolonnen(e) som skal synes når tabellen er kollapset. Rekkefølgen i array avgjør rekkefølgen i render.
   * @default [0]
   *  */
  definingColumnIndex?: Array<number>;
} & TableProps;
