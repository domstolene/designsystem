import { type CollapsibleTableProps } from './CollapsibleTable.types';
import { CollapsibleTableContext } from './Table.context';
import { Table } from '../normal';

export const CollapsibleTable = ({
  isCollapsed,
  headerValues,
  definingColumnIndex = [0],
  ...rest
}: CollapsibleTableProps) => {
  return (
    <CollapsibleTableContext
      value={{
        isCollapsed,
        headerValues,
        definingColumnIndex,
      }}
    >
      <Table {...rest} />
    </CollapsibleTableContext>
  );
};

CollapsibleTable.displayName = 'CollapsibleTable';
