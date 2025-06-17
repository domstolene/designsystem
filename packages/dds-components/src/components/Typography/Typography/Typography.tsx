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
  getTypographyCn,
  isCaption,
  isLegend,
} from './Typography.utils';
import { ElementAs } from '../../../polymorphic';
import { type BaseComponentProps, getBaseHTMLProps } from '../../../types';
import { cn } from '../../../utils';
import { getTextColor, isTextColor } from '../../../utils/color';
import { focusable } from '../../helpers/styling/focus.module.css';
import { Icon } from '../../Icon';
import { OpenExternalIcon } from '../../Icon/icons';
import typographyStyles from '../typographyStyles.module.css';

type AnchorTypographyProps = BaseComponentProps<
  HTMLAnchorElement,
  {
    /**nativ `href`-prop ved `typographyType='a'`.  */
    href?: string | undefined;

    /** Spesifiserer om lenka er ekstern ved `typographyType='a'` eller `as='a'`.*/
    externalLink?: boolean;

    /**nativ `target`-prop ved `typographyType='a'`.  */
    target?: string;
  },
  AnchorHTMLAttributes<HTMLAnchorElement>
>;

type LabelTypographyProps = BaseComponentProps<
  HTMLLabelElement,
  HTMLAttributes<HTMLLabelElement>
>;

type OtherTypographyProps = BaseComponentProps<
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
    typographyType = 'bodyMedium',
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

  const { style: htmlPropsStyle, ...restHtmlProps } = htmlProps;

  const as = propAs ? propAs : getElementType(typographyType);
  const typographyCn = getTypographyCn(typographyType);

  let relProp;
  let targetProp;
  let externalLinkProp;
  if (isAnchorProps(props)) {
    const { externalLink, target } = props;
    relProp = as === 'a' ? 'noopener noreferer' : undefined;
    targetProp = as !== 'a' ? undefined : externalLink ? '_blank' : target;
    externalLinkProp = as === 'a' && externalLink ? externalLink : undefined;
  }

  return (
    <ElementAs
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          getColorCn(color),
          styles.container,
          externalLinkProp && typographyStyles['a--external'],
          typographyStyles[typographyCn],
          withMargins && typographyStyles[`${typographyCn}--margins`],
          isLegend(as) && typographyStyles.legend,
          isCaption(as) &&
            withMargins &&
            typographyStyles['caption--withMargins'],
          bold && typographyStyles.bold,
          underline && typographyStyles.underline,
          italic && typographyStyles.italic,
          as === 'a' && focusable,
        ),
        restHtmlProps,
        rest,
      )}
      as={as}
      style={{
        ...htmlPropsStyle,
        ...style,
        color: color && !isTextColor(color) ? getTextColor(color) : undefined,
      }}
      rel={relProp}
      target={targetProp}
    >
      {children}
      {externalLinkProp && <Icon icon={OpenExternalIcon} iconSize="inherit" />}
    </ElementAs>
  );
};

Typography.displayName = 'Typography';
