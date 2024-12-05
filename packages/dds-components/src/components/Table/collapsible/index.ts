import { CollapsibleRow } from './CollapsibleRow';
import { CollapsibleTable as BaseCollapsibleTable } from './CollapsibleTable';
import { type CollapsibleTableProps } from './CollapsibleTable.types';

type CollapsibleTableCompoundProps = typeof BaseCollapsibleTable & {
  Row: typeof CollapsibleRow;
};

const CollapsibleTable = BaseCollapsibleTable as CollapsibleTableCompoundProps;

CollapsibleTable.Row = CollapsibleRow;

export { CollapsibleTable, type CollapsibleTableProps };
export { CollapsibleRow as CollapsibleTableRow };
