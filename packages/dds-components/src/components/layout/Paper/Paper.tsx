import { type HTMLAttributes } from 'react';

import styles from './Paper.module.css';
import {
  type BaseComponentPropsWithChildren,
  type BorderColor,
  getBorderCn,
} from '../../../types';
import { cn } from '../../../utils';
import { Box } from '../../layout/Box/Box';
import { type ResponsiveProps } from '../common';
import { type CSSProps } from '../common/Responsive.types';

export type PaperElevation = 1 | 2 | 3 | 4;
export type PaperBorder = BorderColor;
export type PaperBorderRadius =
  | 'button'
  | 'input'
  | 'surface'
  | 'chip'
  | 'rounded'
  | 0;

type PickedAttributes = Pick<
  HTMLAttributes<HTMLDivElement>,
  'tabIndex' | 'role' | keyof CSSProps
>;

export type PaperProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**I hvor stor grad flaten skal framheves. */
    elevation?: PaperElevation;
    /**Farge på kantlinje. */
    border?: PaperBorder;
    /**Hvor runde hjørner skal være. */
    borderRadius?: PaperBorderRadius;
  } & ResponsiveProps &
    PickedAttributes,
  Omit<HTMLAttributes<HTMLDivElement>, keyof PickedAttributes>
>;

export const Paper = ({
  elevation,
  border,
  borderRadius,
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
        borderRadius && styles[`border-radius--${borderRadius}`],
      )}
      {...rest}
    />
  );
};
