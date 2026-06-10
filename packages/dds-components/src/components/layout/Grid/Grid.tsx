import { type Property } from 'csstype';
import { type ElementType } from 'react';

import styles from './Grid.module.css';
import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { Box } from '../Box';
import {
  type ResponsiveGridProps,
  type ResponsiveProp,
} from '../common/Responsive.types';
import { getResponsiveCSSProperties } from '../common/utils';

export type GridProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<
    T,
    {
      /** CSS `grid-template-columns`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser.
         * @default {
        xs: 'repeat(var(--dds-grid-xs-count), minmax(0, 1fr))',
        sm: 'repeat(var(--dds-grid-sm-count), minmax(0, 1fr))',
        md: 'repeat(var(--dds-grid-md-count), minmax(0, 1fr))',
        lg: 'repeat(var(--dds-grid-lg-count), minmax(0, 1fr))',
        xl: 'repeat(var(--dds-grid-xl-count), minmax(0, 1fr))',
        }
        */
      gridTemplateColumns?: ResponsiveProp<Property.GridTemplateColumns>;
    } & ResponsiveGridProps
  >;

export const Grid = <T extends ElementType = 'div'>({
  id,
  className,
  htmlProps,
  display = 'grid',
  grid,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridTemplate,
  gridTemplateAreas,
  gridTemplateRows,
  gridTemplateColumns = {
    xs: 'repeat(var(--dds-grid-xs-count), minmax(0, 1fr))',
    sm: 'repeat(var(--dds-grid-sm-count), minmax(0, 1fr))',
    md: 'repeat(var(--dds-grid-md-count), minmax(0, 1fr))',
    lg: 'repeat(var(--dds-grid-lg-count), minmax(0, 1fr))',
    xl: 'repeat(var(--dds-grid-xl-count), minmax(0, 1fr))',
  },
  columnGap = {
    xs: 'var(--dds-grid-xs-gutter-size)',
    sm: 'var(--dds-grid-sm-gutter-size)',
    md: 'var(--dds-grid-md-gutter-size)',
    lg: 'var(--dds-grid-lg-gutter-size)',
    xl: 'var(--dds-grid-xl-gutter-size)',
  },
  rowGap = {
    xs: 'var(--dds-grid-xs-gutter-size)',
    sm: 'var(--dds-grid-sm-gutter-size)',
    md: 'var(--dds-grid-md-gutter-size)',
    lg: 'var(--dds-grid-lg-gutter-size)',
    xl: 'var(--dds-grid-xl-gutter-size)',
  },
  marginInline = { xs: 'x2', sm: 'x2', md: 'x4', lg: 'x6', xl: 'x10' },
  style,
  ...rest
}: GridProps<T>) => {
  const styleVariables = {
    ...getResponsiveCSSProperties(
      gridTemplateColumns,
      'r',
      'grid-template-columns',
    ),
    ...getResponsiveCSSProperties(grid, 'r', 'grid'),
    ...getResponsiveCSSProperties(gridAutoColumns, 'r', 'grid-auto-columns'),
    ...getResponsiveCSSProperties(gridAutoFlow, 'r', 'grid-auto-flow'),
    ...getResponsiveCSSProperties(gridAutoRows, 'r', 'grid-auto-rows'),
    ...getResponsiveCSSProperties(gridTemplate, 'r', 'grid-template'),
    ...getResponsiveCSSProperties(gridTemplateRows, 'r', 'grid-template-rows'),
    ...getResponsiveCSSProperties(
      gridTemplateAreas,
      'r',
      'grid-template-areas',
    ),
  };
  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          gridTemplateColumns && styles['dds-grid-template-columns'],
          grid && styles['dds-grid'],
          gridAutoColumns && styles['dds-grid-auto-columns'],
          gridAutoFlow && styles['dds-grid-auto-flow'],
          gridAutoRows && styles['dds-grid-auto-rows'],
          gridTemplate && styles['dds-grid-template'],
          gridTemplateRows && styles['dds-grid-template-rows'],
          gridTemplateAreas && styles['dds-grid-template-areas'],
        ),
        { ...style, ...styleVariables },
        htmlProps,
        rest,
      )}
      display={display}
      marginInline={marginInline}
      columnGap={columnGap}
      rowGap={rowGap}
    />
  );
};

Grid.displayName = 'Grid';
