import { type AnchorHTMLAttributes, type HTMLAttributes } from 'react';

import styles from './Typography.module.css';
import {
  type OtherTypographyType,
  type TypographyAnchorType,
  type TypographyComponentProps,
  type TypographyLabelType,
} from './Typography.types';
import {
  getColorCn,
  getElementType,
  isCaption,
  isLegend,
} from './Typography.utils';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { getTextColor, isTextColor } from '../../../utils/color';
import { focusable } from '../../helpers/styling/focus.module.css';
import { Box } from '../../layout';
import typographyStyles from '../typographyStyles.module.css';

type AnchorTypographyProps = BaseComponentPropsWithChildren<
  HTMLAnchorElement,
  {
    /**nativ `href`-prop ved `typographyType='a'`.  */
    href?: string | undefined;

    /**nativ `target`-prop ved `typographyType='a'`.  */
    target?: string;
  },
  AnchorHTMLAttributes<HTMLAnchorElement>
>;

type LabelTypographyProps = BaseComponentPropsWithChildren<
  HTMLLabelElement,
  HTMLAttributes<HTMLLabelElement>
>;

type OtherTypographyProps = BaseComponentPropsWithChildren<
  HTMLElement,
  HTMLAttributes<HTMLElement>
>;

export type TypographyProps =
  | ({
      /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
      typographyType?: TypographyAnchorType;
    } & TypographyComponentProps &
      Omit<AnchorTypographyProps, 'color'>)
  | ({
      /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
      typographyType?: TypographyLabelType;
    } & TypographyComponentProps &
      Omit<LabelTypographyProps, 'color'>)
  | ({
      /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
      typographyType?: OtherTypographyType;
    } & TypographyComponentProps &
      Omit<OtherTypographyProps, 'color'>);

const isAnchorProps = (
  props: TypographyProps,
): props is AnchorTypographyProps => props.typographyType === 'a';

export const Typography = (props: TypographyProps) => {
  const {
    typographyType = 'body-long-medium',
    as: propAs,
    children,
    bold,
    underline,
    italic,
    style,
    id,
    withMargins,
    color,
    className,
    htmlProps = {},
    ...rest
  } = props;

  const as = propAs ? propAs : getElementType(typographyType);

  let relProp;
  if (isAnchorProps(props)) {
    relProp = as === 'a' ? 'noopener noreferer' : undefined;
  }

  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          getColorCn(color),
          styles.container,
          typographyStyles[typographyType],
          withMargins && typographyStyles[`${typographyType}--margins`],
          isLegend(as) && typographyStyles.legend,
          isCaption(as) && typographyStyles.caption,
          isCaption(as) &&
            withMargins &&
            typographyStyles['caption--withMargins'],
          bold && typographyStyles.bold,
          underline && typographyStyles.underline,
          italic && typographyStyles.italic,
          as === 'a' && focusable,
        ),
        {
          ...style,
          color: color && !isTextColor(color) ? getTextColor(color) : undefined,
        },
        htmlProps,
        rest,
      )}
      as={as}
      rel={relProp}
    >
      {children}
    </Box>
  );
};

Typography.displayName = 'Typography';
