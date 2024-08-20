import { type Properties, type Property } from 'csstype';
import { type HTMLAttributes } from 'react';

import styles from './Grid.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { type BreakpointBasedProps } from '../helpers';

export const isRelativeGridColumn = (
  type: ColumnsOccupied | undefined,
): type is RelativeColumnsOccupied => {
  return type === 'all' || type === 'firstHalf' || type === 'secondHalf';
};

export const isGridColumn = (
  type: ColumnsOccupied | undefined,
): type is GridColumnPerScreenSize => {
  if (type === undefined) return false;
  return (
    (type as GridColumnPerScreenSize).xs !== undefined ||
    (type as GridColumnPerScreenSize).sm !== undefined ||
    (type as GridColumnPerScreenSize).md !== undefined ||
    (type as GridColumnPerScreenSize).lg !== undefined ||
    (type as GridColumnPerScreenSize).xl !== undefined
  );
};

type RelativeColumnsOccupied = 'all' | 'firstHalf' | 'secondHalf';
type GridColumnPerScreenSize = BreakpointBasedProps<'gridColumn'>;

type RelativeColumnsOccupiedHyphen = 'all' | 'first-half' | 'second-half';

export type ColumnsOccupied = RelativeColumnsOccupied | GridColumnPerScreenSize;
export type GridChildProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**hvilke kolonner innholdet skal okkupere. Tar inn enten en string med relativ definisjon eller et objekt med egentilpassede `grid-column` CSS verdi definert for hver brekkepunkt. */
    columnsOccupied?: ColumnsOccupied;
    /**Plassering av innholdet på x-aksen. */
    justifySelf?: Property.JustifySelf;
    /**Hvilke rader innholdet skal okkupere. */
    gridRow?: Property.GridRow;
  }
> &
  Pick<HTMLAttributes<HTMLElement>, 'style'>;

export const GridChild = (props: GridChildProps) => {
  const {
    id,
    className,
    htmlProps,
    style,
    gridRow,
    justifySelf,
    columnsOccupied,
    ...rest
  } = props;

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-child-grid-row' as any]: gridRow,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-child-justify-self' as any]: justifySelf,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-child-xs-grid-column-custom' as any]: isGridColumn(
      columnsOccupied,
    )
      ? columnsOccupied?.xs
      : undefined,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-child-sm-grid-column-custom' as any]: isGridColumn(
      columnsOccupied,
    )
      ? columnsOccupied?.sm
      : undefined,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-child-md-grid-column-custom' as any]: isGridColumn(
      columnsOccupied,
    )
      ? columnsOccupied?.md
      : undefined,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-child-lg-grid-column-custom' as any]: isGridColumn(
      columnsOccupied,
    )
      ? columnsOccupied?.lg
      : undefined,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-child-xl-grid-column-custom' as any]: isGridColumn(
      columnsOccupied,
    )
      ? columnsOccupied?.xl
      : undefined,
  };

  const columnsCn: Record<
    RelativeColumnsOccupied,
    RelativeColumnsOccupiedHyphen
  > = {
    all: 'all',
    firstHalf: 'first-half',
    secondHalf: 'second-half',
  };

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles['grid-child'],
          isRelativeGridColumn(columnsOccupied) &&
            styles[`grid-child--${columnsCn[columnsOccupied]}`],
          isGridColumn(columnsOccupied) && styles['grid-child--custom'],
        ),
        htmlProps,
        rest,
      )}
      style={{ ...htmlProps?.style, ...style, ...styleVariables }}
    />
  );
};

GridChild.displayName = 'GridChild';
