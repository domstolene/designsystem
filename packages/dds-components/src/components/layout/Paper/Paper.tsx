import { type ComponentProps, type ElementType } from 'react';

import styles from './Paper.module.css';
import {
  type BorderColor,
  type BorderRadius,
  type Elevation,
  type PaperBackground,
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { Box } from '../../layout/Box/Box';
import { type ResponsiveProps } from '../common';
import { getResponsiveCSSProperties } from '../common/utils';

export type PaperElevation = Elevation;
export type PaperBorder = BorderColor;
export type PaperBorderRadius = BorderRadius;

type PickedAttributes<T extends ElementType = 'div'> = Pick<
  ComponentProps<T>,
  'tabIndex' | 'role'
>;

export type PaperProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<
    T,
    {
      /**I hvor stor grad flaten skal framheves. Støtter dds tokens. */
      elevation?: PaperElevation;
      /**Farge på kantlinje. Støtter dds tokens. */
      border?: PaperBorder;
      /**Hvor runde hjørner skal være. Støtter dds tokens. */
      borderRadius?: PaperBorderRadius;
      /**Bakgrunn. Støtter dds tokens. */
      background?: PaperBackground;
    } & ResponsiveProps &
      PickedAttributes
  >;

export const Paper = <T extends ElementType = 'div'>({
  id,
  elevation,
  border,
  borderRadius = 'surface',
  background = 'surface-paper-default',
  className,
  htmlProps,
  style,
  ...rest
}: PaperProps<T>) => {
  const styleVariables = {
    ...getResponsiveCSSProperties(background, 'paper-background'),
    ...getResponsiveCSSProperties(border, 'paper-border'),
  };

  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.container,
          elevation && styles[`shadow--${elevation}`],
          borderRadius && styles[`border-radius--${borderRadius}`],
          styles.background,
          border && styles.border,
        ),
        { ...style, ...styleVariables },
        htmlProps,
        rest,
      )}
    />
  );
};
