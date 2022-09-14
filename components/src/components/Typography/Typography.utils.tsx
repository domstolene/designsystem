import { ElementType } from 'react';
import { css, CSSObject } from 'styled-components';
import {
  TypographyType,
  TypographyHeadingType,
  InlineElement,
  TypographyInteractionStyling,
  StaticTypographyType,
} from './Typography/Typography.types';
import { typographyTokens as tokens } from './Typography.tokens';
import {
  focusVisibleLink,
  focusVisibleLinkTransitionValue,
} from '../../helpers/styling';

export const getElementType = (element: string): ElementType => {
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

export const isHeading = (
  type: TypographyType
): type is TypographyHeadingType => {
  return true;
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

export const isInlineElement = (as: ElementType): as is InlineElement =>
  inlineElements.indexOf(as) !== -1;

export const getAdditionalFontStyle = (
  bold?: boolean,
  italic?: boolean,
  underline?: boolean
) => {
  return css`
    ${bold &&
    css`
      font-weight: ${tokens.style.bold.fontWeight};
    `}
    ${italic &&
    css`
      font-style: italic;
    `}
  ${underline &&
    css`
      text-decoration: underline;
    `}
  `;
};

export const getMarginStyling = (
  typographyType: TypographyType,
  element: ElementType,
  withMargins?: boolean
) =>
  withMargins
    ? css`
        ${isInlineElement(element) &&
        element !== 'a' &&
        css`
          display: block;
        `}
        margin-top: ${tokens.typographyType[typographyType].margins.marginTop};
        margin-bottom: ${tokens.typographyType[typographyType].margins
          .marginBottom};
        ${isHeading(typographyType) &&
        css`
          padding-top: ${tokens.typographyType[typographyType].margins
            .paddingTop};
        `}
      `
    : css`
        margin: 0;
      `;

export const getAnchorStyling = (
  external?: boolean,
  interactionStyling?: TypographyInteractionStyling,
  typographyType?: StaticTypographyType,
  withMargins?: boolean
) => css`
  ${typographyType
    ? css`
        ${tokens.typographyType[typographyType].base.font};
        color: ${tokens.typographyType[typographyType].base.color};
        ${getMarginStyling(typographyType, 'a', withMargins)}
      `
    : css`
        font: inherit;
        color: ${tokens.typographyType.a.base.color};
        ${getMarginStyling('a', 'a', withMargins)}
      `}
  width: fit-content;
  text-decoration: underline;
  @media (prefers-reduced-motion: no-preference) {
    transition: ${focusVisibleLinkTransitionValue};
  }
  ${external
    ? css`
        display: inline-flex;
        align-items: center;
        gap: ${tokens.typographyType.a.base.gap};
      `
    : ''}
  &:hover {
    color: ${tokens.typographyType.a.hover.color};
    ${interactionStyling &&
    interactionStyling.hover &&
    css`
      ${interactionStyling.hover as CSSObject}
    `}
  }
  ${interactionStyling &&
  interactionStyling.active &&
  css`
    &:active {
      ${interactionStyling.active as CSSObject}
    }
  `}
  &:focus-visible, &.focus-visible, &:focus-visible::selection, &.focus-visible::selection {
    ${focusVisibleLink}
  }
`;
