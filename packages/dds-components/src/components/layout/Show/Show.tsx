import { cn } from '../../../utils';
import { ElementAs } from '../../helpers';
import styles from '../common/display.module.css';
import {
  type CommonResponsiveProps,
  type PolymorphicProp,
  type PrimitiveDisplayShowProps,
} from '../common/Responsive.types';

export type ShowProps = PolymorphicProp &
  PrimitiveDisplayShowProps &
  CommonResponsiveProps;

export const Show = ({
  breakpointBelow,
  breakpointAbove,
  className,
  as = 'div',
  ...rest
}: ShowProps) => (
  <ElementAs
    {...rest}
    as={as}
    className={cn(
      className,
      breakpointBelow && styles[`${breakpointBelow}-hide-above`],
      breakpointAbove && styles[`${breakpointAbove}-hide-below`],
    )}
  />
);

Show.displayName = 'Show';
