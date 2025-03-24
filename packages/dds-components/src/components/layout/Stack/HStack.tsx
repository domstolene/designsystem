import styles from './Stack.module.css';
import { type BaseComponentPropsWithChildren } from '../../../types';
import { getBaseHTMLProps } from '../../../types';
import { cn } from '../../../utils';
import { Box } from '../../layout';
import { type ResponsiveStackProps } from '../common';

export type HStackProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  ResponsiveStackProps
>;

export const HStack = ({ id, className, htmlProps, ...rest }: HStackProps) => {
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
