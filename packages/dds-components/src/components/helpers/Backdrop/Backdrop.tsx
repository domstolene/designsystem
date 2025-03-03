import { type ComponentPropsWithRef } from 'react';

import styles from './Backdrop.module.css';
import { cn } from '../../../utils';

type BackdropProps = {
  isMounted?: boolean;
  zIndex: 'drawer' | 'modal';
} & Pick<ComponentPropsWithRef<'div'>, 'children' | 'onClick' | 'ref'>;

export const Backdrop = ({ isMounted, zIndex, ...props }: BackdropProps) => {
  const isMountedCn = isMounted ? 'visible' : 'hidden';
  return (
    <div
      className={cn(
        styles.backdrop,
        styles[zIndex],
        styles[`backdrop--${isMountedCn}`],
      )}
      {...props}
    />
  );
};

Backdrop.displayName = 'Backdrop';
