import { type ElementType } from 'react';

import { ElementAs } from '../../polymorphic';
import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import utilStyles from '../helpers/styling/utilStyles.module.css';

export type VisuallyHiddenProps<T extends ElementType = 'span'> =
  PolymorphicBaseComponentProps<T>;

export const VisuallyHidden = <T extends ElementType = 'span'>({
  id,
  as: asProp,
  className,
  style,
  htmlProps,
  ...rest
}: VisuallyHiddenProps<T>) => {
  const as = asProp ?? 'span';
  return (
    <ElementAs
      as={as}
      {...getBaseHTMLProps(
        id,
        cn(className, utilStyles['visually-hidden']),
        style,
        htmlProps,
        rest,
      )}
    />
  );
};

VisuallyHidden.displayName = 'VisuallyHidden';
