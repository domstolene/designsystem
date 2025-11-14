import { type HTMLAttributes } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import {
  type BaseTypographyProps,
  Typography,
  type TypographyHeadingType,
} from '../Typography';

export type LegendProps = BaseComponentPropsWithChildren<
  HTMLLegendElement,
  BaseTypographyProps & {
    /**Typografistil basert på utvalget for HTML heading elementer.  */
    typographyType?: TypographyHeadingType;
  },
  Omit<HTMLAttributes<HTMLLegendElement>, 'color'>
>;

export const Legend = ({
  id,
  className,
  htmlProps,
  typographyType = 'headingLarge',
  ...rest
}: LegendProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      as="legend"
      typographyType={typographyType}
    />
  );
};

Legend.displayName = 'Legend';
