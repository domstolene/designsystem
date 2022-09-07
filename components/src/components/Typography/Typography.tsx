import {
  forwardRef,
  ElementType,
  HTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { typographyTokens as tokens } from './Typography.tokens';
import { Icon } from '../Icon';
import {
  OtherTypographyType,
  AnchorTypographyType,
  LabelTypographyType,
  InlineElement,
  TypographyComponentProps,
} from './Typography.types';
import {
  focusVisibleLink,
  focusVisibleLinkTransitionValue,
  selection,
} from '../../helpers/styling';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { OpenExternalIcon } from '../../icons/tsx';
import { getTextColor, isHeading } from './Typography.utils';

const getElementType = (element: string): ElementType => {
  switch (element) {
    case 'a':
      return 'a';
    case 'headingSans01':
      return 'h6';
    case 'headingSans02':
      return 'h5';
    case 'headingSans03':
      return 'h4';
    case 'headingSans04':
      return 'h3';
    case 'headingSans05':
      return 'h2';
    case 'headingSans06':
    case 'headingSans07':
    case 'headingSans08':
      return 'h1';
    case 'supportingStyleLabel01':
      return 'label';
    case 'bodySans01':
    case 'bodySans02':
    case 'bodySans03':
    case 'bodySans04':
    case 'bodySerif01':
    case 'bodySerif02':
    case 'bodySerif03':
    case 'bodySerif04':
    case 'leadSans01':
    case 'leadSans02':
    case 'leadSans03':
    case 'leadSans04':
    case 'leadSans05':
    case 'supportingStyleInputText01':
    case 'supportingStyleInputText02':
    case 'supportingStyleInputText03':
    case 'supportingStyleHelperText01':
    case 'supportingStylePlaceholderText01':
    case 'supportingStyleTiny01':
    case 'supportingStyleTiny02':
    default:
      return 'p';
  }
};

export const inlineElements: ElementType[] = [
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'big',
  'br',
  'button',
  'canvas',
  'cite',
  'code',
  'data',
  'datalist',
  'del',
  'dfn',
  'em',
  'embed',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'meter',
  'noscript',
  'object',
  'output',
  'picture',
  'progress',
  'q',
  'ruby',
  's',
  'samp',
  'script',
  'select',
  'slot',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'template',
  'textarea',
  'time',
  'u',
  'var',
  'video',
  'wbr',
];

const isInlineElement = (as: ElementType): as is InlineElement =>
  inlineElements.indexOf(as) !== -1;

type StyledTypographyProps = { as: ElementType } & Pick<
  TypographyProps,
  | 'typographyType'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'withMargins'
  | 'interactionProps'
  | 'color'
>;

const StyledTypography = styled.p<StyledTypographyProps>`
  &::selection,
  *::selection {
    ${selection}
  }

  ${({ typographyType }) =>
    typographyType &&
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

  ${({ withMargins, typographyType, as }) =>
    withMargins && typographyType && isInlineElement(as)
      ? css`
          margin-top: ${tokens.typographyType[typographyType].margins
            .marginTop};
          margin-bottom: ${tokens.typographyType[typographyType].margins
            .marginBottom};
          display: block;
        `
      : withMargins && typographyType && isHeading(typographyType)
      ? css`
          margin-top: ${tokens.typographyType[typographyType].margins
            .marginTop};
          margin-bottom: ${tokens.typographyType[typographyType].margins
            .marginBottom};
          padding-top: ${tokens.typographyType[typographyType].margins
            .paddingTop};
        `
      : withMargins && typographyType
      ? css`
          margin-top: ${tokens.typographyType[typographyType].margins
            .marginTop};
          margin-bottom: ${tokens.typographyType[typographyType].margins
            .marginBottom};
        `
      : css`
          margin: 0;
        `}

  ${({ color }) =>
    color &&
    css`
      color: ${getTextColor(color)};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${tokens.style.bold.fontWeight};
    `}
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}
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
