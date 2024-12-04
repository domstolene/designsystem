import {
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  forwardRef,
} from 'react';

import styles from './Typography.module.css';
import {
  type AnchorTypographyType,
  type LabelTypographyType,
  type OtherTypographyType,
  type TypographyComponentProps,
} from './Typography.types';
import {
  getElementType,
  getTypographyCn,
  isCaption,
  isLegend,
} from './Typography.utils';
import { type BaseComponentProps, getBaseHTMLProps } from '../../../types';
import { cn } from '../../../utils';
import { getTextColor } from '../../../utils/color';
import { ElementAs } from '../../helpers/ElementAs/ElementAs';
import { focusable } from '../../helpers/styling/focus.module.css';
import { Icon } from '../../Icon';
import { OpenExternalIcon } from '../../Icon/icons';
import typographyStyles from '../typographyStyles.module.css';

type AnchorTypographyProps = BaseComponentProps<
  HTMLAnchorElement,
  TypographyComponentProps & {
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
  TypographyComponentProps,
  HTMLAttributes<HTMLLabelElement>
>;

type OtherTypographyProps = BaseComponentProps<
  HTMLElement,
  TypographyComponentProps,
  HTMLAttributes<HTMLElement>
>;

export type TypographyProps =
  | ({
      /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
      typographyType?: AnchorTypographyType;
    } & AnchorTypographyProps)
  | ({
      /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
      typographyType?: LabelTypographyType;
    } & LabelTypographyProps)
  | ({
      /**Styling basert på det typografiske utvalget definert i Figma. Returnerer default HTML tag for hver type. **OBS!** Ved bruk av `'a'` er det flere tilgjengelige props, se under.  */
      typographyType?: OtherTypographyType;
    } & OtherTypographyProps);

const isAnchorProps = (
  props: TypographyProps,
): props is AnchorTypographyProps => props.typographyType === 'a';

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => {
    const {
      typographyType = 'bodySans02',
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

    const as = propAs ? propAs : getElementType(typographyType as string);
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

    const typographyProps = {
      target: targetProp,
    };

    return (
      <ElementAs
        ref={ref}
        {...typographyProps}
        {...getBaseHTMLProps<HTMLElement>(
          id,
          cn(
            className,
            styles.container,
            externalLinkProp && typographyStyles['a--external'],
            typographyStyles[typographyCn],
            withMargins && typographyStyles[`${typographyCn}--margins`],
            isLegend(as) && typographyStyles.legend,
            isLegend(as) && withMargins && typographyStyles['legend--margins'],
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
          color: color && getTextColor(color),
        }}
        rel={relProp}
      >
        {children}
        {externalLinkProp && (
          <Icon icon={OpenExternalIcon} iconSize="inherit" />
        )}
      </ElementAs>
    );
  },
);

Typography.displayName = 'Typography';
