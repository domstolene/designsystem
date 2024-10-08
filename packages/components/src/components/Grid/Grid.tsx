import { type Properties } from 'csstype';
import { type HTMLAttributes } from 'react';

import styles from './Grid.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { type BreakpointBasedProps } from '../helpers';

type RowGapGrid = BreakpointBasedProps<'rowGap'>;
type MaxWidthGrid = BreakpointBasedProps<'maxWidth'>;
type ColumnGapGrid = BreakpointBasedProps<'columnGap'>;

type BaseGridProps = {
  /**Maksimal bredde. Gjøres per brekkepunkt.  */
  maxWidth?: MaxWidthGrid;
  /** CSS `row-gap`. Gjøres per brekkepunkt. */
  rowGap?: RowGapGrid;
  /** CSS `column-gap`. Gjøres per brekkepunkt. */
  columnGap?: ColumnGapGrid;
} & Pick<HTMLAttributes<HTMLElement>, 'style'>;

type GridDivProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**HTML tag som returneres. */
    as: 'div';
  } & BaseGridProps
>;
type GridFormProps = BaseComponentPropsWithChildren<
  HTMLFormElement,
  { as: 'form' } & BaseGridProps
>;

export type GridProps = GridDivProps | GridFormProps;

export const Grid = (props: GridProps) => {
  const {
    id,
    className,
    htmlProps,
    as,
    maxWidth,
    rowGap,
    columnGap,
    style,
    ...rest
  } = props;

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xs-max-width' as any]: maxWidth?.xs,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xs-row-gap' as any]: rowGap?.xs
      ? rowGap.xs
      : 'var(--dds-grid-xs-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xs-column-gap' as any]: columnGap?.xs
      ? columnGap.xs
      : 'var(--dds-grid-xs-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-sm-max-width' as any]: maxWidth?.sm,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-sm-row-gap' as any]: rowGap?.sm
      ? rowGap.sm
      : 'var(--dds-grid-sm-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-sm-column-gap' as any]: columnGap?.sm
      ? columnGap.sm
      : 'var(--dds-grid-sm-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-md-max-width' as any]: maxWidth?.md,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-md-row-gap' as any]: rowGap?.md
      ? rowGap.md
      : 'var(--dds-grid-md-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-md-column-gap' as any]: columnGap?.md
      ? columnGap.md
      : 'var(--dds-grid-md-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-lg-max-width' as any]: maxWidth?.lg,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-lg-row-gap' as any]: rowGap?.lg
      ? rowGap.lg
      : 'var(--dds-grid-lg-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-lg-column-gap' as any]: columnGap?.lg
      ? columnGap.lg
      : 'var(--dds-grid-lg-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xl-max-width' as any]: maxWidth?.xl,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xl-row-gap' as any]: rowGap?.xl
      ? rowGap.xl
      : 'var(--dds-grid-xl-gutter-size)',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xl-column-gap' as any]: columnGap?.xl
      ? columnGap.xl
      : 'var(--dds-grid-xl-gutter-size)',
  };

  return as === 'div' ? (
    <div
      {...getBaseHTMLProps(id, cn(className, styles.grid), htmlProps, rest)}
      style={{ ...style, ...htmlProps?.style, ...styleVariables }}
    />
  ) : (
    <form
      {...getBaseHTMLProps(id, cn(className, styles.grid), htmlProps, rest)}
      style={{ ...style, ...htmlProps?.style, ...styleVariables }}
    />
  );
};

Grid.displayName = 'Grid';
