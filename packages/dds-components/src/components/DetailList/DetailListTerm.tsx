import { type ComponentPropsWithRef, forwardRef } from 'react';

import styles from './DetailList.module.css';
import { cn } from '../../utils';

export type DetailListTermProps = ComponentPropsWithRef<'dt'>;

export const DetailListTerm = forwardRef<HTMLElement, DetailListTermProps>(
  ({ className, ...rest }, ref) => {
    return (
      <dt
        ref={ref}
        className={cn(className, styles.cell, styles.term)}
        {...rest}
      />
    );
  },
);

DetailListTerm.displayName = 'DetailListTerm';
