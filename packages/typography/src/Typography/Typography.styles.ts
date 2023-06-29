import { ElementType } from 'react';
import { css, CSSObject } from 'styled-components';
import OpenExternalIcon from './openExternal.svg';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { border, colors } = ddsBaseTokens;

import { typographyTokens as tokens } from '../Typography.tokens';
import {
  StaticTypographyType,
  TypographyInteractionStyling,
  TypographyType,
} from './Typography.types';
import { isHeading, isInlineElement } from './Typography.utils';

export const focusVisibleLink = {
  outline: 'none',
  backgroundColor: border.BordersDdsBorderFocusBaseStroke,
  color: colors.DdsColorNeutralsWhite,
  textDecoration: 'none',
};

export const focusVisibleLinkOnDark = {
  outline: 'none',
  backgroundColor: border.BordersDdsBorderFocusOndarkStroke,
  color: colors.DdsColorNeutralsGray9,
  textDecoration: 'none',
};

export const focusVisibleLinkTransitionValue =
  'background-color 0.2s, text-decoration 0.2s, color 0.2s';

export const getFontStyling = (
  type: StaticTypographyType,
  withColor?: boolean
) => {
  return {
    color: withColor ? tokens.typographyType[type].base.color : undefined,
    ...tokens.typographyType[type].base.font,
  };
};

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
        ${getMarginStyling(typographyType, 'a', withMargins)}
      `
    : css`
        font: inherit;
        ${getMarginStyling('a', 'a', withMargins)}
      `}
  color: ${tokens.typographyType.a.base.color};
  width: fit-content;
  text-decoration: underline;
  @media (prefers-reduced-motion: no-preference) {
    transition: ${focusVisibleLinkTransitionValue};
  }
  ${external &&
  css`
    padding-right: calc(1em + ${tokens.typographyType.a.icon.marginLeft});
    position: relative;
    ::after {
      // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
      mask: ${`url("${OpenExternalIcon}")`} no-repeat center/contain;
      background: 0 0;
      background-color: currentColor;
      width: 1em;
      height: 1em;
      content: '';
      position: absolute;
      margin-top: ${tokens.typographyType.a.icon.marginTop};
      margin-left: ${tokens.typographyType.a.icon.marginLeft};
    }
  `}
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
