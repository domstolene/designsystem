import { type ComponentPropsWithRef, forwardRef } from 'react';

import styles from './DetailList.module.css';
import { cn } from '../../utils';

export type DetailListDescProps = ComponentPropsWithRef<'dd'>;

export const DetailListDesc = forwardRef<HTMLElement, DetailListDescProps>(
  ({ className, ...rest }, ref) => {
    return <dd ref={ref} className={cn(className, styles.cell)} {...rest} />;
  },
);

DetailListDesc.displayName = 'DetailListDesc';
