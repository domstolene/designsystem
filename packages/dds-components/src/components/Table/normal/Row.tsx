import { useIsInTableHead } from './Head';
import styles from './Table.module.css';
import { type TableRowProps } from './Table.types';
import { cn } from '../../../utils';
import { focusable } from '../../helpers/styling/focus.module.css';
import typographyStyles from '../../Typography/typographyStyles.module.css';

export const Row = ({
  type: _type,
  mode = 'normal',
  hoverable,
  selected,
  className,
  ...rest
}: TableRowProps) => {
  const isInHeader = useIsInTableHead();
  const type = _type ?? (isInHeader ? 'head' : 'body');
  return (
    <tr
      className={cn(
        className,
        styles.row,
        type === 'body' && styles['row--body'],
        mode === 'sum' && styles['row--sum'],
        selected && styles['row--selected'],
        hoverable && styles['row--hoverable'],
        (type === 'head' || mode === 'sum') && typographyStyles.bold,
        focusable,
      )}
      {...rest}
    />
  );
};

Row.displayName = 'Table.Row';
