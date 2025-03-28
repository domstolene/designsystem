import { type Properties, type StandardProperties } from 'csstype';
import { type ElementType } from 'react';

import { Box } from '..';
import styles from './Grid.module.css';
import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import {
  type ResponsiveProp,
  type ResponsiveProps,
  type SpacingScale,
} from '../common/Responsive.types';
import { getResponsiveCSSProperties } from '../common/utils';

type RowGapGrid = ResponsiveProp<StandardProperties['rowGap'] | SpacingScale>;
type ColumnGapGrid = ResponsiveProp<
  StandardProperties['columnGap'] | SpacingScale
>;

export type GridProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<
    T,
    {
      /** CSS `row-gap`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
      rowGap?: RowGapGrid;
      /** CSS `column-gap`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
      columnGap?: ColumnGapGrid;
    } & Omit<ResponsiveProps, 'display'>
  >;

export const Grid = <T extends ElementType = 'div'>({
  id,
  className,
  htmlProps,
  rowGap,
  columnGap,
  marginInline = { xs: 'x2', sm: 'x2', md: 'x4', lg: 'x6', xl: 'x10' },
  style,
  ...rest
}: GridProps<T>) => {
  const styleVariables: Properties = {
    ...getResponsiveCSSProperties(columnGap, 'r', 'c-g'),
    ...getResponsiveCSSProperties(rowGap, 'r', 'r-g'),
  };

  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(className, styles.grid, styles['dds-c-g'], styles['dds-r-g']),
        htmlProps,
        rest,
      )}
      marginInline={marginInline}
      style={{ ...style, ...styleVariables }}
    />
  );
};

Grid.displayName = 'Grid';
