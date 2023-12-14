import { forwardRef } from 'react';
import { BaseTypographyProps, Typography } from '../Typography';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';

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
  },
);

Legend.displayName = 'Legend';
