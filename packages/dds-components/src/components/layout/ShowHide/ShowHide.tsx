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
  style,
  htmlProps,
  id,
  as: C,
  ...rest
}: ShowHideProps<T>) => {
  const as = C ?? 'div';
  return (
    <ElementAs
      as={as}
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          hideBelow && styles[`${hideBelow}-hide-below`],
          showBelow && showBelow !== 'xl' && styles[`${showBelow}-hide-above`],
        ),
        style,
        htmlProps,
        rest,
      )}
    />
  );
};

ShowHide.displayName = 'ShowHide';
