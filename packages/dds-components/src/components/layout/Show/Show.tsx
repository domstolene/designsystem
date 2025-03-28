import { type ElementType } from 'react';

import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { ElementAs } from '../../helpers';
import styles from '../common/display.module.css';
import { type PrimitiveDisplayShowProps } from '../common/Responsive.types';

export type ShowProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<T, PrimitiveDisplayShowProps>;

export const Show = <T extends ElementType = 'div'>({
  showBelow,
  showAbove,
  className,
  htmlProps,
  id,
  ...rest
}: ShowProps<T>) => (
  <ElementAs
    {...getBaseHTMLProps(
      id,
      cn(
        className,
        showBelow && styles[`${showBelow}-hide-above`],
        showAbove && styles[`${showAbove}-hide-below`],
      ),
      htmlProps,
      rest,
    )}
  />
);

Show.displayName = 'Show';
