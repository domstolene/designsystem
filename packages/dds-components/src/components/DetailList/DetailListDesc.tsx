import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../utils';
import { Box, type ResponsiveProps } from '../layout';
import styles from './DetailList.module.css';

export type DetailListDescProps = ComponentPropsWithRef<'dd'> &
  Pick<ResponsiveProps, 'textAlign'>;

export const DetailListDesc = ({ className, ...rest }: DetailListDescProps) => (
  <Box as="dd" className={cn(className, styles.cell)} {...rest} />
);

DetailListDesc.displayName = 'DetailListDesc';
