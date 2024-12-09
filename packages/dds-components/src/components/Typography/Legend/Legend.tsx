import { forwardRef } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { type BaseTypographyProps, Typography } from '../Typography';

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
        typographyType="headingLarge"
      >
        {children}
      </Typography>
    );
  },
);

Legend.displayName = 'Legend';
