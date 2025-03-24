import styles from './Stack.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { Box, type ResponsiveStackProps } from '../../layout';

export type VStackProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  ResponsiveStackProps
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
