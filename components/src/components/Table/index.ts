import { Table as BaseTable, TableProps, TableDensity } from './Table';
import { Head, TableHeadProps } from './Head';
import { Body, TableBodyProps } from './Body';
import { Foot, TableFootProps } from './Foot';
import { Row, TableRowProps, TableRowType } from './Row';
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

export { Table };

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
};
