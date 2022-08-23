import {
  forwardRef,
  ElementType,
  PropsWithChildren,
  HTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import styled, { css, CSSObject } from 'styled-components';
import {
  typographyTokens as tokens,
  textColors,
  textColorsArray,
} from './Typography.tokens';
import { Icon } from '../Icon';
import {
  TypographyType,
  TextColor,
  OtherTypographyType,
  AnchorTypographyType,
  LabelTypographyType,
  InlineElement,
} from './Typography.types';
import { focusVisibleLinkTransitionValue } from '../../helpers/styling';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { OpenExternalIcon } from '../../icons/tsx';

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

export function isTextColor(color: string): color is TextColor {
  return textColorsArray.indexOf(color) !== -1;
}

export const getTextColor = (color: TextColor | string): string => {
  if (isTextColor(color)) return textColors[color];
  return color;
};

const getElementStyling = (type: TypographyType) => {
  return css`
    ${tokens.typographyType[type].base}
    &::selection, *::selection {
      ${tokens.selection.base}
    }
  `;
};

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

const LinkIcon = styled(Icon)`
  ${tokens.typographyType.a.icon}
`;

const StyledTypography = styled.p<StyledTypographyProps>`
  ${({ typographyType }) => typographyType && getElementStyling(typographyType)}
  ${({ typographyType, interactionProps }) =>
    typographyType === 'a' &&
    css`
      display: inline-flex;
      align-items: center;
      @media (prefers-reduced-motion: no-preference) {
        transition: ${focusVisibleLinkTransitionValue};
      }

      &:hover {
        ${tokens.typographyType[typographyType].hover.base}
      }
      ${interactionProps &&
      interactionProps.active &&
      css`
        &:active {
          ${interactionProps.active}
        }
      `}
      &:focus-visible, &.focus-visible {
        ${tokens.typographyType[typographyType].focus.base}
      }
      &:focus-visible::selection &.focus-visible::selection {
        ${tokens.typographyType[typographyType].focus.base}
      }
    `}
    ${({ interactionProps }) =>
    interactionProps &&
    interactionProps.hover &&
    css`
      &:hover {
        ${interactionProps.hover}
      }
    `}
      ${({ interactionProps }) =>
    interactionProps &&
    interactionProps.active &&
    css`
      &:active {
        ${interactionProps.active}
      }
    `}

  ${({ withMargins, typographyType, as }) =>
    withMargins && typographyType && isInlineElement(as)
      ? css`
          ${tokens.typographyType[typographyType].margins.base}
          display: block;
        `
      : withMargins && typographyType
      ? css`
          ${tokens.typographyType[typographyType].margins.base}
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
      ${tokens.style.bold.base}
    `}
  ${({ italic }) =>
    italic &&
    css`
      ${tokens.style.italic.base}
    `}
  ${({ underline }) =>
    underline &&
    css`
      ${tokens.style.underline.base}
    `}
`;

export type TypographyInteractionProps = {
  hover?: CSSObject;
  active?: CSSObject;
};

type BaseTypographyProps = PropsWithChildren<{
  /**HTML tag som skal brukes istedenfor default definert via `typographyType`.  */
  as?: ElementType;
  /**Spesifiserer om tekstelementet skal ha spacing definert i Elsa. Brukes hovedsakelig i artikler og lignende. **OBS!** har forskjellig virkning på ulike typografityper. `body` og `lead`-typer får margin på bunnen, `heading`-typer får margin på bunnen og padding på toppen mens `supportingStyles` får margin topp og bunn. */
  withMargins?: boolean;
  /**Tekstfarge fra utvalget eller custom. **OBS!** Bruk farger fra `@dds-design-tokens`. */
  color?: TextColor | string;
  /**Setter `bold` styling. */
  bold?: boolean;
  /**Setter `italic` styling. */
  italic?: boolean;
  /**Setter en linje under. */
  underline?: boolean;
  /**Støtte for å enkelt kunne endre på hover- og active-styling. Bruk `@dds-design-tokens` til farger osv. */
  interactionProps?: TypographyInteractionProps;
}> &
  Pick<HTMLAttributes<HTMLElement>, 'style'>;

type AnchorTypographyProps = BaseComponentProps<
  HTMLAnchorElement,
  BaseTypographyProps & {
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
  BaseTypographyProps,
  HTMLAttributes<HTMLLabelElement>
>;

type OtherTypographyProps = BaseComponentProps<
  HTMLElement,
  BaseTypographyProps,
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
        {renderIcon && <LinkIcon icon={OpenExternalIcon} iconSize="inherit" />}
      </StyledTypography>
    );
  }
);
