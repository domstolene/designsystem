import { type ComponentPropsWithRef } from 'react';

import styles from './DetailList.module.css';
import { cn } from '../../utils';

export type DetailListDescProps = ComponentPropsWithRef<'dd'>;

export const DetailListDesc = ({ className, ...rest }: DetailListDescProps) => (
  <dd className={cn(className, styles.cell)} {...rest} />
);

DetailListDesc.displayName = 'DetailListDesc';
