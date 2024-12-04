import { type ComponentPropsWithRef, forwardRef } from 'react';

import styles from './DetailList.module.css';
import { cn } from '../../utils';

export type DetailListRowProps = ComponentPropsWithRef<'div'>;

export const DetailListRow = forwardRef<HTMLDivElement, DetailListRowProps>(
  ({ className, ...rest }, ref) => {
    return <div ref={ref} className={cn(className, styles.row)} {...rest} />;
  },
);

DetailListRow.displayName = 'DetailListRow';
