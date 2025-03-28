import { type ElementType } from 'react';

import { Box, type ResponsiveStackProps } from '../..';
import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../../types';
import { cn } from '../../../../utils';
import styles from '../Stack.module.css';

export type VStackProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<T, ResponsiveStackProps>;

export const VStack = <T extends ElementType = 'div'>({
  id,
  className,
  htmlProps,
  ...rest
}: VStackProps<T>) => {
  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(className, styles.stack, styles.vertical),
        htmlProps,
        rest,
      )}
    />
  );
};

VStack.displayName = 'VStack';
