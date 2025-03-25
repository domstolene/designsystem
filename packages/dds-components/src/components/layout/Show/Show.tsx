import { type HTMLAttributes } from 'react';

import { type BaseComponentPropsWithChildren } from '../../../types';
import { cn } from '../../../utils';
import { ElementAs } from '../../helpers';
import styles from '../common/display.module.css';
import {
  type CSSProps,
  type PolymorphicProp,
  type PrimitiveDisplayShowProps,
} from '../common/Responsive.types';

export type ShowProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  PolymorphicProp & PrimitiveDisplayShowProps & CSSProps,
  Omit<HTMLAttributes<HTMLDivElement>, keyof CSSProps>
>;

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
