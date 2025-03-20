import { type ElementType } from 'react';

import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../../types';
import { Box } from '../../Box';
import { type ResponsiveStackProps } from '../../common';

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
      display="flex"
      flexDirection="column"
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
    />
  );
};

VStack.displayName = 'VStack';
