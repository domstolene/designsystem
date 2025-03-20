import { cn } from '../../../utils';
import { ElementAs } from '../../helpers';
import styles from '../common/display.module.css';
import {
  type CommonResponsiveProps,
  type PolymorphicProp,
  type ResponsiveDisplayHideProps,
} from '../common/Responsive.types';

export type HideProps = PolymorphicProp &
  ResponsiveDisplayHideProps &
  CommonResponsiveProps;

export const Hide = ({
  breakpointBelow,
  breakpointAbove,
  className,
  as = 'div',
  ...rest
}: HideProps) => (
  <ElementAs
    {...rest}
    as={as}
    className={cn(
      className,
      breakpointBelow && styles[`${breakpointBelow}-hide-below`],
      breakpointAbove && styles[`${breakpointAbove}-hide-above`],
    )}
  />
);

Hide.displayName = 'Hide';
