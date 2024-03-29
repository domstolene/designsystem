import { type ElementType } from 'react';
import { type CSSObject, css } from 'styled-components';

import {
  type StaticTypographyType,
  type TypographyInteractionStyling,
  type TypographyType,
} from './Typography.types';
import { isHeading, isInlineElement, isLegend } from './Typography.utils';
import { focusVisible, focusVisibleTransitionValue } from '../../helpers';
import { typographyTokens as tokens } from '../Typography.tokens';

export const getAdditionalFontStyle = (
  bold?: boolean,
  italic?: boolean,
  underline?: boolean,
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
  withMargins?: boolean,
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
        /**Margin i legend følger spacing mellom inputfelt i en gruppe, ikke den typografiske */
        ${isLegend(element) &&
        css`
          margin-bottom: ${tokens.element.legend.margins.marginBottom};
        `}
      `
    : css`
        margin: 0;
      `;

export const getAnchorStyling = (
  external?: boolean,
  interactionStyling?: TypographyInteractionStyling,
  typographyType?: StaticTypographyType,
  withMargins?: boolean,
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
    transition: ${focusVisibleTransitionValue};
  }
  ${external &&
  css`
    & > svg {
      display: inline;
      margin: 0.1em 0.1em -0.1em;
      transform: translateY(0.05em);
      vertical-align: baseline;
    }
  `}
  &:hover {
    color: ${tokens.typographyType.a.hover.color};
    ${interactionStyling?.hover &&
    css`
      ${interactionStyling.hover as CSSObject}
    `}
  }
  ${interactionStyling?.active &&
  css`
    &:active {
      ${interactionStyling.active as CSSObject}
    }
  `}
  &:focus-visible, &.focus-visible, &:focus-visible::selection, &.focus-visible::selection {
    ${focusVisible}
  }
`;
