import { Body, type TableBodyProps } from './Body';
import {
  Cell,
  type TableCellLayout,
  type TableCellProps,
  type TableCellType,
} from './Cell';
import { FilterCell } from './FilterCell';
import { Foot, type TableFootProps } from './Foot';
import { Head, type TableHeadProps } from './Head';
import { Row, type TableRowProps, type TableRowType } from './Row';
import { SortCell, type SortOrder, type TableSortCellProps } from './SortCell';
import { Table as BaseTable, type TableProps, type TableSize } from './Table';
import { TableWrapper } from './TableWrapper';

type TableCompoundProps = typeof BaseTable & {
  Wrapper: typeof TableWrapper;
  Head: typeof Head;
  Body: typeof Body;
  Foot: typeof Foot;
  Row: typeof Row;
  Cell: typeof Cell;
  SortCell: typeof SortCell;
  FilterCell: typeof FilterCell;
};

const Table = BaseTable as TableCompoundProps;

Table.Wrapper = TableWrapper;
Table.Head = Head;
Table.Body = Body;
Table.Cell = Cell;
Table.SortCell = SortCell;
Table.FilterCell = FilterCell;
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
export { FilterCell as TableFilterCell };
export { Row as TableRow };
export { Foot as TableFoot };
