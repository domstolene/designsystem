import { type ComponentProps } from 'react';

import styles from './Backdrop.module.css';
import { cn } from '../../../utils';

type BackdropProps = {
  isMounted?: boolean;
} & Pick<ComponentProps<'div'>, 'children'>;

export const Backdrop = ({ isMounted, ...props }: BackdropProps) => {
  const isMountedCn = isMounted ? 'visible' : 'hidden';
  return (
    <div
      className={cn(styles.backdrop, styles[`backdrop--${isMountedCn}`])}
      {...props}
    />
  );
};

Backdrop.displayName = 'Backdrop';
