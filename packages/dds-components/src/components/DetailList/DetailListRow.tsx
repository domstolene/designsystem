import { type ComponentPropsWithRef } from 'react';

import styles from './DetailList.module.css';
import { cn } from '../../utils';

export type DetailListRowProps = ComponentPropsWithRef<'div'>;

export const DetailListRow = ({ className, ...rest }: DetailListRowProps) => (
  <div className={cn(className, styles.row)} {...rest} />
);

DetailListRow.displayName = 'DetailListRow';
