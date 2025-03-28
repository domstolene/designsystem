import { type ElementType } from 'react';

import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { ElementAs } from '../../helpers';
import styles from '../common/display.module.css';
import { type PrimitiveDisplayHideProps } from '../common/Responsive.types';

export type HideProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<T, PrimitiveDisplayHideProps>;

export const Hide = <T extends ElementType = 'div'>({
  hideBelow,
  hideAbove,
  className,
  htmlProps,
  id,
  ...rest
}: HideProps<T>) => (
  <ElementAs
    {...getBaseHTMLProps(
      id,
      cn(
        className,
        hideBelow && styles[`${hideBelow}-hide-below`],
        hideAbove && styles[`${hideAbove}-hide-above`],
      ),
      htmlProps,
      rest,
    )}
  />
);

Hide.displayName = 'Hide';
