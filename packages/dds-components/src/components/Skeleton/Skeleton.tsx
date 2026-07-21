import { type ComponentPropsWithRef } from 'react';

import styles from './Skeleton.module.css';
import { cn } from '../../utils';
import { Box, type PaperBorderRadius, type ResponsiveProps } from '../layout';

export type SkeletonAppearance = 'circle' | 'rectangle';

export type SkeletonProps = {
  /**Hvor runde hjørner skal være. Støtter dds tokens.
   * @default "surface"
   */
  borderRadius?: PaperBorderRadius;
} & Pick<ResponsiveProps, 'width' | 'height'> &
  ComponentPropsWithRef<'div'>;

export const Skeleton = ({
  width,
  height,
  borderRadius = 'surface',
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
