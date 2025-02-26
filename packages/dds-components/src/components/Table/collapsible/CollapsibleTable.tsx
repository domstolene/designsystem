import { forwardRef } from 'react';

import { type CollapsibleTableProps } from './CollapsibleTable.types';
import { CollapsibleTableContext } from './Table.context';
import { Table } from '../normal';

export const CollapsibleTable = forwardRef<
  HTMLTableElement,
  CollapsibleTableProps
>((props, ref) => {
  const {
    isCollapsed,
    headerValues,
    definingColumnIndex = [0],
    ...rest
  } = props;

  return (
    <CollapsibleTableContext
      value={{
        isCollapsed,
        headerValues,
        definingColumnIndex,
      }}
    >
      <Table ref={ref} {...rest} />
    </CollapsibleTableContext>
  );
});

CollapsibleTable.displayName = 'CollapsibleTable';
