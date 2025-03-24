import { type ComponentPropsWithoutRef } from 'react';

import styles from './Paper.module.css';
import { type BorderColor, getBorderCn } from '../../../types';
import { cn } from '../../../utils';
import { Box, type BoxProps } from '../../layout/Box/Box';

type Elevation = 1 | 2 | 3 | 4;
type Border = BorderColor;

export type PaperProps = {
  /**I hvor stor grad flaten skal framheves. */
  elevation?: Elevation;
  /**Farge på kantlinje. */
  border?: Border;
} & BoxProps &
  ComponentPropsWithoutRef<'div'>;

export const Paper = ({
  elevation,
  border,
  className,
  ...rest
}: PaperProps) => {
  const borderCn = border ? getBorderCn(border) : undefined;
  return (
    <Box
      className={cn(
        className,
        styles.container,
        elevation && styles[`shadow--${elevation}`],
        borderCn && styles[`border--${borderCn}`],
      )}
      {...rest}
    />
  );
};
