import { forwardRef } from 'react';

import styles from './Table.module.css';
import { type TableProps } from './Table.types';
import { cn } from '../../../utils';
import { scrollbar } from '../../helpers/styling/utilStyles.module.css';

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      size = 'medium',
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
          styles[`table--${size}`],
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
