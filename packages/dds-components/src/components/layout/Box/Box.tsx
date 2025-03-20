import { type StandardProperties } from 'csstype';

import { cn } from '../../../utils';
import styles from '../common/layout.module.css';
import {
  type CommonResponsiveProps,
  type PolymorphicResponsiveProps,
  type SpacingScale,
} from '../common/Responsive.types';
import { getResponsiveCSSProperties } from '../common/utils';
import { Hide } from '../Hide';

export type BoxProps = PolymorphicResponsiveProps & CommonResponsiveProps;

export const Box = ({
  as = 'div',
  className,
  style,
  padding,
  ...rest
}: BoxProps) => {
  const paddings = getResponsiveCSSProperties<
    StandardProperties['padding'] | SpacingScale
  >(padding, 'r', 'p');

  return (
    <Hide
      {...rest}
      style={{ ...style, ...paddings }}
      className={cn(className, styles['dds-p'])}
      as={as}
    />
  );
};

Box.displayName = 'Box';
