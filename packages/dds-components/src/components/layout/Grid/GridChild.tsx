import {
  type Properties,
  type Property,
  type StandardProperties,
} from 'csstype';
import { type ElementType } from 'react';

import { Box } from '../Box';
import styles from './Grid.module.css';
import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import {
  type ResponsiveProp,
  type ResponsiveProps,
} from '../common/Responsive.types';
import { getResponsiveCSSProperties } from '../common/utils';

type RelativeColumnsOccupied = 'all' | 'firstHalf' | 'secondHalf';

export type ColumnsOccupied = ResponsiveProp<
  StandardProperties['gridColumn'] | RelativeColumnsOccupied
>;

export type GridChildProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<
    T,
    {
      /**Hvilke kolonner innholdet skal okkupere. Støtter standardverdier for CSS `grid-column` og relative verider `'all'`, `'firstHalf'` eller `'secondHalf'`, per brekkpunkt eller samme for alle skjermstørrelser. */
      columnsOccupied?: ColumnsOccupied;
      /**CSS `justify-self`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
      justifySelf?: ResponsiveProp<Property.JustifySelf>;
      /**CSS `grid-row`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
      gridRow?: ResponsiveProp<Property.GridRow>;
    } & Omit<ResponsiveProps, 'display'>
  >;

export const GridChild = <T extends ElementType = 'div'>({
  id,
  className,
  htmlProps,
  style,
  gridRow,
  justifySelf,
  columnsOccupied,
  ...rest
}: GridChildProps<T>) => {
  const styleVariables: Properties = {
    ...getResponsiveCSSProperties(gridRow, 'r', 'grid-row'),
    ...getResponsiveCSSProperties(justifySelf, 'r', 'j-self'),
    ...getResponsiveCSSProperties(columnsOccupied, 'r', 'grid-column'),
  };

  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles['child-col-count'],
          gridRow && styles['dds-grid-row'],
          justifySelf && styles['dds-j-self'],
          columnsOccupied && styles['dds-grid-column'],
          columnsOccupied === 'firstHalf' && styles['child--first-half'],
          columnsOccupied === 'secondHalf' && styles['child--second-half'],
        ),
        htmlProps,
        rest,
      )}
      style={{ ...style, ...styleVariables }}
    />
  );
};

GridChild.displayName = 'GridChild';
