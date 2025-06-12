import { type ElementType } from 'react';

import { ElementAs } from '../../../polymorphic';
import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import styles from '../common/display.module.css';
import { type PrimitiveDisplayProps } from '../common/Responsive.types';

export type ShowHideProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<T, PrimitiveDisplayProps>;

export const ShowHide = <T extends ElementType = 'div'>({
  hideBelow,
  showBelow,
  className,
  htmlProps,
  id,
  ...rest
}: ShowHideProps<T>) => (
  <ElementAs
    {...getBaseHTMLProps(
      id,
      cn(
        className,
        hideBelow && styles[`${hideBelow}-hide-below`],
        showBelow && showBelow !== 'xl' && styles[`${showBelow}-hide-above`],
      ),
      htmlProps,
      rest,
    )}
  />
);

ShowHide.displayName = 'ShowHide';
