import { cn } from '../../../utils';
import { Divider, type DividerProps } from '../../Divider';
import styles from '../OverflowMenu.module.css';

type OverflowMenuDividerProps = DividerProps;

export const OverflowMenuDivider = ({
  className,
  ...rest
}: OverflowMenuDividerProps) => {
  return (
    <Divider
      color="subtle"
      className={cn(className, styles.divider)}
      {...rest}
    />
  );
};

OverflowMenuDivider.displayName = 'OverflowMenuDivider';
