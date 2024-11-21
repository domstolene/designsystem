import { type ComponentProps, forwardRef } from 'react';

import styles from './Backdrop.module.css';
import { cn } from '../../../utils';

type BackdropProps = {
  isMounted?: boolean;
} & Pick<ComponentProps<'div'>, 'children'>;

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ isMounted, ...props }, ref) => {
    const isMountedCn = isMounted ? 'visible' : 'hidden';
    return (
      <div
        ref={ref}
        className={cn(styles.backdrop, styles[`backdrop--${isMountedCn}`])}
        {...props}
      />
    );
  },
);

Backdrop.displayName = 'Backdrop';
