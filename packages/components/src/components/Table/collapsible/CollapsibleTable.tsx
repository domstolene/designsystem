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
    <CollapsibleTableContext.Provider
      value={{
        isCollapsed,
        headerValues,
        definingColumnIndex,
      }}
    >
      <Table ref={ref} {...rest} />
    </CollapsibleTableContext.Provider>
  );
});

CollapsibleTable.displayName = 'CollapsibleTable';
