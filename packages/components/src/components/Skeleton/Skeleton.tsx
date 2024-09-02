import { type Property } from 'csstype';
import { type ComponentPropsWithRef, forwardRef } from 'react';

import styles from './Skeleton.module.css';
import { cn } from '../../utils';

export type SkeletonAppearance = 'circle' | 'rectangle';

export type SkeletonProps = {
  /** Bredde. */
  width?: Property.Width;
  /** Høyde. */
  height?: Property.Height;
  /**CSS border radius.
   * @default "var(--dds-border-radius-surface)"
   */
  borderRadius: Property.BorderRadius;
} & ComponentPropsWithRef<'div'>;

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const {
      width,
      height,
      borderRadius = 'var(--dds-border-radius-surface)',
      className,
      style,
      ...rest
    } = props;

    return (
      <div
        ref={ref}
        className={cn(className, styles.container)}
        style={{ ...style, width, height, borderRadius }}
        {...rest}
      ></div>
    );
  },
);

Skeleton.displayName = 'Skeleton';
