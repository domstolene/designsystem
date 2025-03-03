import { type ComponentPropsWithRef } from 'react';

import styles from './DetailList.module.css';
import { cn } from '../../utils';

export type DetailListTermProps = ComponentPropsWithRef<'dt'>;

export const DetailListTerm = ({ className, ...rest }: DetailListTermProps) => (
  <dt className={cn(className, styles.cell, styles.term)} {...rest} />
);

DetailListTerm.displayName = 'DetailListTerm';
