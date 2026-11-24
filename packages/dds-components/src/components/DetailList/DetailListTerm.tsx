import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../utils';
import styles from './DetailList.module.css';

export type DetailListTermProps = ComponentPropsWithRef<'dt'>;

export const DetailListTerm = ({ className, ...rest }: DetailListTermProps) => (
  <dt className={cn(className, styles.cell, styles.term)} {...rest} />
);

DetailListTerm.displayName = 'DetailListTerm';
