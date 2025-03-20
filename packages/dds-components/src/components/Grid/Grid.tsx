import { type Properties } from 'csstype';
import { type HTMLAttributes } from 'react';

import styles from './Grid.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { type StaticAndBreakpointBasedProp } from '../layout/common/Responsive.types';
import { getStandardResponsiveCSSProperties } from '../layout/common/utils';

type RowGapGrid = StaticAndBreakpointBasedProp<'rowGap'>;
type MaxWidthGrid = StaticAndBreakpointBasedProp<'maxWidth'>;
type ColumnGapGrid = StaticAndBreakpointBasedProp<'columnGap'>;

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

  const maxWidths = getStandardResponsiveCSSProperties<'maxWidth'>(
    maxWidth,
    'grid',
    'max-width',
  );

  const columnGaps = getStandardResponsiveCSSProperties<'columnGap'>(
    columnGap,
    'grid',
    'column-gap',
    'grid',
    'gutter-size',
  );

  const rowGaps = getStandardResponsiveCSSProperties<'rowGap'>(
    rowGap,
    'grid',
    'row-gap',
    'grid',
    'gutter-size',
  );

  const styleVariables: Properties = {
    ...rowGaps,
    ...maxWidths,
    ...columnGaps,
  };

  return as === 'div' ? (
    <div
      {...getBaseHTMLProps(id, cn(className, styles.grid), htmlProps, rest)}
      style={{
        ...style,
        ...htmlProps?.style,
        ...styleVariables,
      }}
    />
  ) : (
    <form
      {...getBaseHTMLProps(id, cn(className, styles.grid), htmlProps, rest)}
      style={{ ...style, ...htmlProps?.style, ...styleVariables }}
    />
  );
};

Grid.displayName = 'Grid';
