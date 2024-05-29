import { ddsTokens } from '@norges-domstoler/dds-design-tokens';
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

type BaseGridProps = {
  /**Maksimal bredde. Gjøres per brekkepunkt.  */
  maxWidth?: MaxWidthGrid;
  /** CSS `row-gap`. Gjøres per brekkepunkt. */
  rowGap?: RowGapGrid;
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
  const { id, className, htmlProps, as, maxWidth, rowGap, style, ...rest } =
    props;

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xs-max-width' as any]: maxWidth?.xs,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xs-row-gap' as any]: rowGap?.xs
      ? rowGap.xs
      : ddsTokens.DdsGridXs0599GutterSize,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-sm-max-width' as any]: maxWidth?.sm,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-sm-row-gap' as any]: rowGap?.sm
      ? rowGap.sm
      : ddsTokens.DdsGridMd9601279GutterSize,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-md-max-width' as any]: maxWidth?.md,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-md-row-gap' as any]: rowGap?.md
      ? rowGap.md
      : ddsTokens.DdsGridMd9601279GutterSize,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-lg-max-width' as any]: maxWidth?.lg,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-lg-row-gap' as any]: rowGap?.lg
      ? rowGap.lg
      : ddsTokens.DdsGridLg12801919GutterSize,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xl-max-width' as any]: maxWidth?.xl,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-grid-xl-row-gap' as any]: rowGap?.xl
      ? rowGap.xl
      : ddsTokens.DdsGridXl1920GutterSize,
  };

  return as === 'div' ? (
    <div
      {...getBaseHTMLProps(id, cn(className, styles.grid), htmlProps, rest)}
      style={{ ...htmlProps?.style, ...styleVariables }}
    />
  ) : (
    <form
      {...getBaseHTMLProps(id, cn(className, styles.grid), htmlProps, rest)}
      style={{ ...style, ...htmlProps?.style, ...styleVariables }}
    />
  );
};

Grid.displayName = 'Grid';
