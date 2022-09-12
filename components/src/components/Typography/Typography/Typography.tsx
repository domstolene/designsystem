import {
  forwardRef,
  ElementType,
  HTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { typographyTokens as tokens } from '../Typography.tokens';
import { Icon } from '../../Icon';
import {
  OtherTypographyType,
  AnchorTypographyType,
  LabelTypographyType,
  TypographyComponentProps,
  TypographyType,
  TypographyInteractionStyling,
} from './Typography.types';
import {
  focusVisibleLink,
  focusVisibleLinkTransitionValue,
  selection,
} from '../../../helpers/styling';
import { BaseComponentProps, getBaseHTMLProps } from '../../../types';
import { OpenExternalIcon } from '../../../icons/tsx';
import {
  getElementType,
  getAdditionalFontStyle,
  getMarginStyling,
} from '../Typography.utils';
import { getTextColor, TextColor } from '../../../utils';

type StyledTypographyProps = {
  as: ElementType;
  typographyType: TypographyType;
  withMargins?: boolean;
  color: TextColor;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  interactionProps?: TypographyInteractionStyling;
};

const StyledTypography = styled.p<StyledTypographyProps>`
  &::selection,
  *::selection {
    ${selection}
  }

  ${({ typographyType }) =>
    typographyType !== 'a' &&
    css`
      color: ${tokens.typographyType[typographyType].base.color};
      ${tokens.typographyType[typographyType].base.font};
    `}

  ${({ typographyType, interactionProps }) =>
    typographyType === 'a' &&
    css`
      display: inline-flex;
      align-items: center;
      font: inherit;
      text-decoration: underline;
      width: fit-content;
      color: ${tokens.typographyType[typographyType].base.color};
      gap: ${tokens.typographyType[typographyType].base.gap};
      @media (prefers-reduced-motion: no-preference) {
        transition: ${focusVisibleLinkTransitionValue};
      }

      &:hover {
        color: ${tokens.typographyType[typographyType].hover.color};
      }
      ${interactionProps &&
      interactionProps.active &&
      css`
        &:active {
          ${interactionProps.active as CSSObject}
        }
      `}
      &:focus-visible, &.focus-visible {
        ${focusVisibleLink}
      }
      &:focus-visible::selection &.focus-visible::selection {
        ${focusVisibleLink}
      }
    `}
    ${({ interactionProps }) =>
    interactionProps &&
    interactionProps.hover &&
    css`
      &:hover {
        ${interactionProps.hover as CSSObject}
      }
    `}
      ${({ interactionProps }) =>
    interactionProps &&
    interactionProps.active &&
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
  props: TypographyProps
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
    let renderIcon = false;
    if (isAnchorProps(props)) {
      const { externalLink, target } = props;

      renderIcon = (as === 'a' && externalLink) ?? false;
      relProp = as === 'a' ? 'noopener noreferer' : undefined;
      targetProp = as !== 'a' ? undefined : externalLink ? '_blank' : target;
    }

    const typographyProps = {
      ...getBaseHTMLProps<HTMLElement>(id, className, restHtmlProps, rest),
      typographyType,
      as,
      style: { ...htmlPropsStyle, ...style },
      rel: relProp,
      target: targetProp,
    };

    return (
      <StyledTypography ref={ref} {...typographyProps}>
        {children}
        {renderIcon && <Icon icon={OpenExternalIcon} iconSize="inherit" />}
      </StyledTypography>
    );
  }
);
