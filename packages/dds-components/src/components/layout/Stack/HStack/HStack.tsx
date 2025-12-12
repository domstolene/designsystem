import { type ElementType } from 'react';

import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../../types';
import { Box } from '../../Box';
import { type ResponsiveStackProps } from '../../common';

export type HStackProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<T, ResponsiveStackProps>;

export const HStack = <T extends ElementType = 'div'>({
  id,
  className,
  style,
  htmlProps,
  ...rest
}: HStackProps<T>) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
    />
  );
};

HStack.displayName = 'HStack';
