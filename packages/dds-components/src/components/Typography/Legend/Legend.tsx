import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn, optAttr } from '../../../utils';
import {
  type CommonBlockTypographyProps,
  Typography,
  type TypographyHeadingType,
} from '../Typography';
import styles from '../typographyStyles.module.css';

export type LegendProps = BaseComponentPropsWithChildren<
  HTMLLegendElement,
  CommonBlockTypographyProps & {
    /**Typografistil basert på utvalget for HTML heading elementer.  */
    typographyType?: TypographyHeadingType;
    /**Setter standard spacing for `<Legend>` som er over et inputelement. */
    withMarginsOverInput?: boolean;
  }
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
