import { type HTMLAttributes } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn, optAttr } from '../../../utils';
import {
  type BaseTypographyProps,
  Typography,
  type TypographyHeadingType,
} from '../Typography';
import styles from '../typographyStyles.module.css';

export type LegendProps = BaseComponentPropsWithChildren<
  HTMLLegendElement,
  BaseTypographyProps & {
    /**Typografistil basert på utvalget for HTML heading elementer.  */
    typographyType?: TypographyHeadingType;
    /**Setter standard spacing for `<Legend>` som er over et inputelement. */
    withMarginsOverInput?: boolean;
  },
  Omit<HTMLAttributes<HTMLLegendElement>, 'color'>
>;

export const Legend = ({
  id,
  className,
  style,
  htmlProps,
  typographyType = 'headingLarge',
  withMarginsOverInput,
  withMargins,
  ...rest
}: LegendProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          withMarginsOverInput && styles['legend--margins-over-input'],
        ),
        style,
        htmlProps,
        rest,
      )}
      as="legend"
      typographyType={typographyType}
      withMargins={optAttr(withMargins || withMarginsOverInput)}
    />
  );
};

Legend.displayName = 'Legend';
