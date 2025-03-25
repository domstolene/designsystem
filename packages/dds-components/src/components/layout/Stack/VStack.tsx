import { type HTMLAttributes } from 'react';

import styles from './Stack.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { Box, type ResponsiveStackProps } from '../../layout';
import { type CSSProps } from '../common/Responsive.types';

export type VStackProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  ResponsiveStackProps & CSSProps,
  Omit<HTMLAttributes<HTMLDivElement>, keyof CSSProps>
>;

export const VStack = ({ id, className, htmlProps, ...rest }: VStackProps) => {
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
