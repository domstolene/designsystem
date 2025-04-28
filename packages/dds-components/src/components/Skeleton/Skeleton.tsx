import { type Property } from 'csstype';
import { type ComponentPropsWithRef } from 'react';

import styles from './Skeleton.module.css';
import { cn } from '../../utils';
import { Box, type ResponsiveProps } from '../layout';

export type SkeletonAppearance = 'circle' | 'rectangle';

export type SkeletonProps = {
  /**CSS border radius.
   * @default "var(--dds-border-radius-surface)"
   */
  borderRadius?: Property.BorderRadius;
} & Pick<ResponsiveProps, 'width' | 'height'> &
  ComponentPropsWithRef<'div'>;

export const Skeleton = ({
  width,
  height,
  borderRadius = 'var(--dds-border-radius-surface)',
  className,
  style,
  ref,
  ...rest
}: SkeletonProps) => {
  return (
    <Box
      width={width}
      height={height}
      ref={ref}
      className={cn(className, styles.container)}
      style={{ ...style, borderRadius }}
      {...rest}
    ></Box>
  );
};

Skeleton.displayName = 'Skeleton';
