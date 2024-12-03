import { forwardRef } from 'react';

import styles from './Table.module.css';
import { type TableDensity, type TableProps } from './Table.types';
import { cn } from '../../../utils';
import { scrollbar } from '../../helpers/styling/utilStyles.module.css';

function getDensityCn(value: TableDensity) {
  switch (value) {
    case 'normal':
    case 'compact':
      return value;
    case 'extraCompact':
      return 'extra-compact';
  }
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      density = 'normal',
      stickyHeader,
      withDividers,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <table
        ref={ref}
        {...rest}
        className={cn(
          className,
          styles.table,
          styles[`table--${getDensityCn(density)}`],
          withDividers && styles['table--with-dividers'],
          stickyHeader && styles['table--sticky-header'],
          scrollbar,
        )}
      >
        {children}
      </table>
    );
  },
);

Table.displayName = 'Table';
