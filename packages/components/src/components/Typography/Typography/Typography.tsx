import {
  type AnchorHTMLAttributes,
  type ElementType,
  type HTMLAttributes,
  forwardRef,
} from 'react';
import styled, { type CSSObject, css } from 'styled-components';

import {
  getAdditionalFontStyle,
  getAnchorStyling,
  getMarginStyling,
} from './Typography.styles';
import {
  type AnchorTypographyType,
  type LabelTypographyType,
  type OtherTypographyType,
  type TypographyComponentProps,
  type TypographyInteractionStyling,
  type TypographyType,
} from './Typography.types';
import { getElementType } from './Typography.utils';
import { type BaseComponentProps, getBaseHTMLProps } from '../../../types';
import { type TextColor, getTextColor } from '../../../utils/color';
import { selection } from '../../helpers/styling/selection';
import { typographyTokens as tokens } from '../Typography.tokens';

interface StyledTypographyProps {
  as: ElementType;
  typographyType: TypographyType;
  withMargins?: boolean;
  color: TextColor;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  interactionProps?: TypographyInteractionStyling;
  externalLink?: boolean;
}

const StyledTypography = styled.p.withConfig({
  shouldForwardProp: prop => {
    const styleOnlyProps: Array<keyof StyledTypographyProps> = [
      'externalLink',
      'typographyType',
      'withMargins',
      'interactionProps',
      'bold',
      'italic',
      'underline',
      'color',
      'as',
    ];
    return !styleOnlyProps.some(styleProp => styleProp === prop);
  },
})<StyledTypographyProps>`
  user-select: text;
  &::selection,
  *::selection {
    ${selection}
  }

  ${({ typographyType, externalLink, interactionProps }) =>
    typographyType === 'a'
      ? css`
          ${getAnchorStyling(externalLink, interactionProps)}
        `
      : css`
          color: ${tokens.typographyType[typographyType].base.color};
          ${tokens.typographyType[typographyType].base.font};
        `}

  ${({ interactionProps }) =>
    interactionProps?.hover &&
    css`
      &:hover {
        ${interactionProps.hover as CSSObject}
      }
    `}
      ${({ interactionProps }) =>
    interactionProps?.active &&
    css`
      &:active {
        ${interactionProps.active as CSSObject}
      }
    `}

  color: ${({ color }) => getTextColor(color)};

  ${({ typographyType, as, withMargins }) =>
    getMarginStyling(typographyType, as, withMargins)}

  ${({ bold, italic, underline }) =>
    getAdditionalFontStyle(bold, italic, underline)};
`;

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
      style,
      id,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const { style: htmlPropsStyle, ...restHtmlProps } = htmlProps;

    const as = propAs ? propAs : getElementType(typographyType as string);

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
      ...getBaseHTMLProps<HTMLElement>(id, className, restHtmlProps, rest),
      typographyType,
      as,
      style: { ...htmlPropsStyle, ...style },
      rel: relProp,
      target: targetProp,
      externalLink: externalLinkProp,
    };

    return (
      <StyledTypography ref={ref} {...typographyProps}>
        {children}
      </StyledTypography>
    );
  },
);

Typography.displayName = 'Typography';
