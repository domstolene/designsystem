import styles from './Table.module.css';
import { type TableProps } from './Table.types';
import { cn } from '../../../utils';
import { scrollbar } from '../../helpers/styling/utilStyles.module.css';
import tgStyles from '../../Typography/typographyStyles.module.css';

export const Table = ({
  size = 'medium',
  stickyHeader,
  withDividers,
  className,
  children,
  ...rest
}: TableProps) => {
  const tgSize = () => {
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
        stickyHeader && styles['table--sticky-header'],
        scrollbar,
        tgStyles[`body-short-${tgSize()}`],
      )}
    >
      {children}
    </table>
  );
};

Table.displayName = 'Table';
