import { type HTMLAttributes } from 'react';

import {
  type BaseComponentPropsWithChildren,
  type PolymorphicProp,
} from '../../../types';
import { cn } from '../../../utils';
import { ElementAs } from '../../helpers';
import styles from '../common/display.module.css';
import {
  type CSSProps,
  type PrimitiveDisplayShowProps,
} from '../common/Responsive.types';

export type ShowProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  PolymorphicProp & PrimitiveDisplayShowProps & CSSProps,
  Omit<HTMLAttributes<HTMLDivElement>, keyof CSSProps>
>;

export const Show = ({
  showBelow,
  showAbove,
  className,
  as = 'div',
  ...rest
}: ShowProps) => (
  <ElementAs
    {...rest}
    as={as}
    className={cn(
      className,
      showBelow && styles[`${showBelow}-hide-above`],
      showAbove && styles[`${showAbove}-hide-below`],
    )}
  />
);

Show.displayName = 'Show';
