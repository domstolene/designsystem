import { type ComponentPropsWithRef } from 'react';

import styles from './Skeleton.module.css';
import { type BorderRadius } from '../..';
import { cn } from '../../utils';
import { Paper, type ResponsiveProps } from '../layout';

export type SkeletonProps = {
  /**Hvor runde hjørner skal være. Støtter dds tokens.
   * @default "surface"
   */
  borderRadius?: BorderRadius;
} & Pick<ResponsiveProps, 'width' | 'height'> &
  ComponentPropsWithRef<'div'>;

export const Skeleton = ({
  borderRadius = 'surface',
  className,
  ...rest
}: SkeletonProps) => {
  return (
    <Paper
      className={cn(className, styles.container)}
      borderRadius={borderRadius}
      background="surface-skeleton"
      {...rest}
    />
  );
};

Skeleton.displayName = 'Skeleton';
