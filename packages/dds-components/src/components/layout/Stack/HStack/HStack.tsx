import { type ElementType } from 'react';

import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../../types';
import { cn } from '../../../../utils';
import { Box } from '../../../layout';
import { type ResponsiveStackProps } from '../../common';
import styles from '../Stack.module.css';

export type HStackProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<T, ResponsiveStackProps>;

export const HStack = <T extends ElementType = 'div'>({
  id,
  className,
  htmlProps,
  ...rest
}: HStackProps<T>) => {
  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(className, styles.stack, styles.horizontal),
        htmlProps,
        rest,
      )}
    />
  );
};

HStack.displayName = 'HStack';
