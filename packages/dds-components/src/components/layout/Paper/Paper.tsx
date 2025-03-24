import { type ComponentProps } from 'react';

import styles from './Paper.module.css';
import {
  type BaseComponentPropsWithChildren,
  type BorderColor,
  getBorderCn,
} from '../../../types';
import { cn } from '../../../utils';
import { Box, type BoxProps } from '../../layout/Box/Box';

type Elevation = 1 | 2 | 3 | 4;
type Border = BorderColor;

export type PaperProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**I hvor stor grad flaten skal framheves. */
    elevation?: Elevation;
    /**Farge på kantlinje. */
    border?: Border;
  } & BoxProps &
    Pick<ComponentProps<'div'>, 'tabIndex' | 'role'>
>;

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
