import { Body, type TableBodyProps } from './Body';
import {
  Cell,
  type TableCellLayout,
  type TableCellProps,
  type TableCellType,
} from './Cell';
import { Foot, type TableFootProps } from './Foot';
import { Head, type TableHeadProps } from './Head';
import { Row } from './Row';
import { SortCell, type SortOrder, type TableSortCellProps } from './SortCell';
import { Table as BaseTable } from './Table';
import {
  type TableProps,
  type TableRowProps,
  type TableRowType,
  type TableSize,
} from './Table.types';
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
  TableSize,
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

export { TableWrapper };
export { Head as TableHead };
export { Body as TableBody };
export { Cell as TableCell };
export { SortCell as TableSortCell };
export { Row as TableRow };
export { Foot as TableFoot };
