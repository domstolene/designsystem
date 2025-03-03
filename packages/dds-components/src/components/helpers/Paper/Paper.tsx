import { type ComponentPropsWithRef } from 'react';

import styles from './Paper.module.css';
import { type BorderColor, getBorderCn } from '../../../types';
import { cn } from '../../../utils';

type Elevation = 1 | 2 | 3 | 4;
type Border = BorderColor;

export type PaperProps = {
  elevation?: Elevation;
  border?: Border;
} & ComponentPropsWithRef<'div'>;

export const Paper = ({
  elevation,
  border = 'default',
  className,
  ...rest
}: PaperProps) => {
  const borderCn = getBorderCn(border);
  return (
    <div
      className={cn(
        className,
        styles.container,
        elevation && styles[`shadow--${elevation}`],
        borderCn && styles[`border--${borderCn}`],
      )}
      {...rest}
    />
  );
};
