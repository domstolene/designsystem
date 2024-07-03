import { forwardRef } from 'react';

import { cn } from '../../../utils';
import { Divider, type DividerProps } from '../../Divider';
import styles from '../OverflowMenu.module.css';

type OverflowMenuDividerProps = DividerProps;

export const OverflowMenuDivider = forwardRef<
  HTMLHRElement,
  OverflowMenuDividerProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <Divider
      ref={ref}
      color="subtle"
      className={cn(className, styles.divider)}
      {...rest}
    />
  );
});

OverflowMenuDivider.displayName = 'OverflowMenuDivider';
