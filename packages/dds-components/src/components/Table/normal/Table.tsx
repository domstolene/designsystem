import styles from './Table.module.css';
import { type TableProps, type TableSize } from './Table.types';
import { cn } from '../../../utils';
import { scrollbar } from '../../helpers/styling/utilStyles.module.css';
import tgStyles from '../../Typography/typographyStyles.module.css';

export const Table = ({
  size = 'medium',
  stickyHeader,
  withDividers,
  withStripes = true,
  className,
  children,
  ...rest
}: TableProps) => {
  const tgSize = (): TableSize => {
    switch (size) {
      case 'small':
        return 'small';
      case 'medium':
      case 'large':
        return 'medium';
    }
  };
  return (
    <table
      {...rest}
      className={cn(
        className,
        styles.table,
        styles[`table--${size}`],
        withDividers && styles['table--with-dividers'],
        withStripes && styles['table--striped'],
        stickyHeader && styles['table--sticky-header'],
        scrollbar,
        tgStyles[`body-long-${tgSize()}`],
      )}
    >
      {children}
    </table>
  );
};

Table.displayName = 'Table';
