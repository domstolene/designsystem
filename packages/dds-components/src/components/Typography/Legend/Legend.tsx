import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { type BaseTypographyProps, Typography } from '../Typography';

export type LegendProps = BaseComponentPropsWithChildren<
  HTMLLegendElement,
  BaseTypographyProps
>;

export const Legend = ({
  id,
  className,
  htmlProps,
  children,
  ...rest
}: LegendProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      as="legend"
      typographyType="headingLarge"
    >
      {children}
    </Typography>
  );
};

Legend.displayName = 'Legend';
