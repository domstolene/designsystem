import { type Property } from 'csstype';
import { type ElementType } from 'react';

import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { Box } from '../Box';
import styles from './Grid.module.css';
import {
  type ResponsiveProp,
  type ResponsiveProps,
} from '../common/Responsive.types';
import { getResponsiveCSSProperties } from '../common/utils';

export type GridProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<
    T,
    Omit<
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
      } & ResponsiveProps,
      'display'
    >
  >;

export const Grid = <T extends ElementType = 'div'>({
  id,
  className,
  htmlProps,
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
  };
  return (
    <Box
      display="grid"
      {...getBaseHTMLProps(
        id,
        cn(className, styles['dds-grid-template-columns']),
        htmlProps,
        rest,
      )}
      marginInline={marginInline}
      columnGap={columnGap}
      rowGap={rowGap}
      style={{ ...style, ...styleVariables }}
    />
  );
};

Grid.displayName = 'Grid';
