import { type HTMLAttributes } from 'react';

import styles from './Paper.module.css';
import {
  type BaseComponentPropsWithChildren,
  type BorderColor,
  type BorderRadius,
  type Elevation,
  type PaperBackground,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { Box } from '../../layout/Box/Box';
import { type ResponsiveProps } from '../common';
import { type CSSProps } from '../common/Responsive.types';
import { getResponsiveCSSProperties } from '../common/utils';

export type PaperElevation = Elevation;
export type PaperBorder = BorderColor;
export type PaperBorderRadius = BorderRadius;

type PickedAttributes = Pick<
  HTMLAttributes<HTMLDivElement>,
  'tabIndex' | 'role' | keyof CSSProps
>;

export type PaperProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
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
    PickedAttributes,
  Omit<HTMLAttributes<HTMLDivElement>, keyof PickedAttributes>
>;

export const Paper = ({
  id,
  elevation,
  border,
  borderRadius = 'surface',
  background = 'surface-paper-default',
  className,
  htmlProps,
  style,
  ...rest
}: PaperProps) => {
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
        htmlProps,
        rest,
      )}
      style={{ ...style, ...styleVariables }}
    />
  );
};
