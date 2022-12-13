import { Table as BaseTable } from './Table';
import { CollapsibleTable as BaseCollapsibleTable } from './collapsible/CollapsibleTable';
import {
  TableProps,
  TableDensity,
  CollapsibleTableProps,
  TableRowProps,
  TableRowType,
} from './Table.types';
import { Head, TableHeadProps } from './Head';
import { Body, TableBodyProps } from './Body';
import { Foot, TableFootProps } from './Foot';
import { Row } from './Row';
import { CollapsibleRow } from './collapsible/CollapsibleRow';
import { Cell, TableCellProps, TableCellLayout, TableCellType } from './Cell';
import { SortCell, TableSortCellProps, SortOrder } from './SortCell';
import { TableWrapper } from './TableWrapper';

type TableCompoundProps = typeof BaseTable & {
  Wrapper: typeof TableWrapper;
  Head: typeof Head;
  Body: typeof Body;
  Foot: typeof Foot;
  Row: typeof Row;
  Cell: typeof Cell;
  SortCell: typeof SortCell;
};

const Table = BaseTable as TableCompoundProps;

Table.Wrapper = TableWrapper;
Table.Head = Head;
Table.Body = Body;
Table.Cell = Cell;
Table.SortCell = SortCell;
Table.Row = Row;
Table.Foot = Foot;

type CollapsibleTableCompoundProps = typeof BaseCollapsibleTable & {
  Row: typeof CollapsibleRow;
};

const CollapsibleTable = BaseCollapsibleTable as CollapsibleTableCompoundProps;

CollapsibleTable.Row = CollapsibleRow;

export { Table };
export { CollapsibleTable };

export type {
  TableCellProps,
  TableDensity,
  TableProps,
  TableRowProps,
  TableRowType,
  TableHeadProps,
  TableBodyProps,
  TableFootProps,
  TableSortCellProps,
  SortOrder,
  TableCellLayout,
  TableCellType,
  CollapsibleTableProps,
};
