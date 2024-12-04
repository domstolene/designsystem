import { type ComponentProps, forwardRef } from 'react';

import styles from './Paper.module.css';
import { cn } from '../../../utils';

type Elevation = 1 | 2 | 3 | 4;
type Border = 'default' | 'subtle' | 'onInverse';

export type PaperProps = {
  elevation?: Elevation;
  border?: Border;
} & ComponentProps<'div'>;

export const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  const { elevation, border, className, ...rest } = props;

  const borderCn =
    border === 'default' || border === 'subtle' ? border : 'on-inverse';
  return (
    <div
      ref={ref}
      className={cn(
        className,
        styles.container,
        elevation && styles[`shadow--${elevation}`],
        border && styles[`border--${borderCn}`],
      )}
      {...rest}
    />
  );
});
