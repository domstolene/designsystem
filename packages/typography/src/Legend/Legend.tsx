import { forwardRef } from 'react';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { BaseTypographyProps, Typography } from '../Typography';

export type LegendProps = BaseComponentPropsWithChildren<
  HTMLLegendElement,
  BaseTypographyProps
>;

export const Legend = forwardRef<HTMLLegendElement, LegendProps>(
  (props, ref) => {
    const { id, className, htmlProps, children, ...rest } = props;

    return (
      <Typography
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={ref}
        as="legend"
        typographyType="headingSans03"
      >
        {children}
      </Typography>
    );
  }
);

Legend.displayName = 'Legend';
