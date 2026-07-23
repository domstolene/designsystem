import { useRef } from 'react';
import { type ReactNode } from 'react';

import { CollapsibleTableContext } from './CollapsibleTable.context';
import { cn } from '../../..';
import { type Breakpoint } from '../../layout/common/Responsive.types';
import { Table } from '../normal';
import styles from '../normal/Table.module.css';
import { type TableProps } from '../normal/Table.types';

export type CollapsibleTableProps = {
  /**Brekkpunkt der tabellen kollapser. Tabellen viser kollapset layout under dette brekkpunktet. */
  collapseBelow: Breakpoint;
} & TableProps;

export const CollapsibleTable = ({
  collapseBelow,
  className,
  withStripes = true,
  ...rest
}: CollapsibleTableProps) => {
  const labelsStore = useRef<Map<string, ReactNode>>(new Map());

  return (
    <CollapsibleTableContext
      value={{
        collapseBelow,
        labelsStore: labelsStore.current,
      }}
    >
      <Table
        {...rest}
        withStripes={withStripes}
        className={cn(
          className,
          withStripes && styles['table--collapsible--striped'],
        )}
      />
    </CollapsibleTableContext>
  );
};

CollapsibleTable.displayName = 'CollapsibleTable';
