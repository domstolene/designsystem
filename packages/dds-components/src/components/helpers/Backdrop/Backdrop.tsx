import { type ComponentProps, forwardRef } from 'react';

import styles from './Backdrop.module.css';
import { cn } from '../../../utils';

type BackdropProps = {
  isMounted?: boolean;
  zIndex: 'drawer' | 'modal';
} & Pick<ComponentProps<'div'>, 'children' | 'onClick'>;

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ isMounted, zIndex, ...props }, ref) => {
    const isMountedCn = isMounted ? 'visible' : 'hidden';
    return (
      <div
        ref={ref}
        className={cn(
          styles.backdrop,
          styles[zIndex],
          styles[`backdrop--${isMountedCn}`],
        )}
        {...props}
      />
    );
  },
);

Backdrop.displayName = 'Backdrop';
