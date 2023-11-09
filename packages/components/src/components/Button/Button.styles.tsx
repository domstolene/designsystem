import styled, { css } from 'styled-components';
import { normalizeButton, selection } from '@norges-domstoler/dds-core';
import { getFontStyling } from '@norges-domstoler/dds-typography';
import { buttonTokens as tokens, typographyTypes } from './Button.tokens';
import {
  ButtonAppearance,
  ButtonPurpose,
  ButtonSize,
  IconPosition,
} from './Button.types';
import {
  focusVisibleTransitionValue,
  focusVisible,
} from '@norges-domstoler/dds-form';

const {
  button: { base, sizes, appearances },
} = tokens;

const getAppearanceAndPurposeStyling = (
  appearance: ButtonAppearance,
  purpose: ButtonPurpose,
) => {
  switch (appearance) {
    case 'filled':
    case 'rounded':
      return css`
        background-color: ${appearances[appearance].purpose[purpose].base
          .backgroundColor};
        border-color: ${appearances[appearance].purpose[purpose].base
          .borderColor};
        &:hover {
          background-color: ${appearances[appearance].purpose[purpose].hover
            .backgroundColor};
          border-color: ${appearances[appearance].purpose[purpose].hover
            .borderColor};
        }
        &:active {
          background-color: ${appearances[appearance].purpose[purpose].active
            .backgroundColor};
          border-color: ${appearances[appearance].purpose[purpose].active
            .borderColor};
        }
      `;
    case 'ghost':
      return css`
        background-color: ${appearances.ghost.base.backgroundColor};
        border-color: ${appearances.ghost.purpose[purpose].base.borderColor};
        &:hover {
          color: ${appearances.ghost.purpose[purpose].hover.color};
          border-color: ${appearances.ghost.purpose[purpose].hover.borderColor};
          box-shadow: ${appearances.ghost.purpose[purpose].hover.boxShadow};
        }
        &:active {
          color: ${appearances.ghost.purpose[purpose].active.color};
          border-color: ${appearances.ghost.purpose[purpose].active
            .borderColor};
          box-shadow: ${appearances.ghost.purpose[purpose].active.boxShadow};
        }
      `;
    case 'borderless':
      return css`
        background-color: ${appearances.borderless.base.backgroundColor};
        border-color: ${appearances.borderless.base.borderColor};
        text-decoration: ${appearances.borderless.base.textDecoration};
        text-decoration-color: ${appearances.borderless.base
          .textDecorationColor};
        &:hover {
          color: ${appearances.borderless.purpose[purpose].hover.color};
          text-decoration-color: ${appearances.borderless.purpose[purpose].hover
            .textDecorationColor};
        }
        &:active {
          color: ${appearances.borderless.purpose[purpose].active.color};
          text-decoration-color: ${appearances.borderless.purpose[purpose]
            .active.textDecorationColor};
        }
      `;
  }
};

interface ButtonWrapperProps {
  appearance: ButtonAppearance;
  purpose: ButtonPurpose;
  size: ButtonSize;
  fullWidth: boolean;
  hasIcon: boolean;
  hasLabel: boolean;
  isLoading: boolean;
  iconPosition?: IconPosition;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${normalizeButton}
  border: ${base.border};
  user-select: text;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
  box-shadow: none;
  text-decoration: none;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      background-color 0.2s,
      text-decoration-color 0.2s,
      box-shadow 0.2s,
      border-color 0.2s,
      color 0.2s,
      ${focusVisibleTransitionValue};
  }

  ${({ appearance, purpose }) => css`
    border-radius: ${appearances[appearance].base.borderRadius};
    box-shadow: ${appearances[appearance].base.boxShadow};
    color: ${appearances[appearance].purpose[purpose].base.color};
    ${getAppearanceAndPurposeStyling(appearance, purpose)}
  `}

  ${({ hasIcon, hasLabel, appearance, purpose }) =>
    hasIcon &&
    !hasLabel &&
    appearance === 'borderless' &&
    css`
      &:hover {
        border-color: ${appearances[appearance].purpose[purpose].icon.hover.borderColor};
        box-shadow: ${appearances[appearance].purpose[purpose].icon.hover.boxShadow};
      }
      &:active {
        border-color:: ${appearances[appearance].purpose[purpose].icon.active.borderColor};
        box-shadow: ${appearances[appearance].purpose[purpose].icon.active.boxShadow};
      }
    `}
    ${({ hasIcon, hasLabel, size }) =>
    hasIcon &&
    hasLabel &&
    css`
      gap: ${sizes[size].textAndIcon.gap};
    `}

  ${({ size, hasLabel }) =>
    hasLabel
      ? css`
          ${getFontStyling(typographyTypes[size])}
          padding: ${sizes[size].text.padding};
        `
      : css`
          font-size: ${sizes[size].justIcon.icon.fontSize};
          padding: ${sizes[size].justIcon.icon.padding};
        `}

  ${({ fullWidth, hasIcon, hasLabel, isLoading, iconPosition }) =>
    fullWidth &&
    (!hasIcon || !hasLabel || isLoading
      ? css`
          justify-content: center;
        `
      : hasIcon && hasLabel && iconPosition === 'left'
      ? css`
          justify-content: left;
        `
      : css`
          justify-content: space-between;
        `)}

  &:focus-visible, &.focus-visible {
    ${focusVisible}
  }

  *::selection {
    ${selection}
  }
`;

interface StyledIconWrapperSpanProps {
  iconPosition?: IconPosition;
  size: ButtonSize;
  absolutePosition?: boolean;
  isHidden?: boolean;
  justIcon?: boolean;
}

export const StyledIconWrapperSpan = styled.span<StyledIconWrapperSpanProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ absolutePosition }) =>
    absolutePosition &&
    css`
      position: absolute;
    `}
  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
    `}
  ${({ justIcon, size }) =>
    justIcon &&
    css`
      height: ${sizes[size].justIcon.wrapper.height};
      width: ${sizes[size].justIcon.wrapper.width};
    `}
`;

interface LabelProps {
  isHidden?: boolean;
}

export const Label = styled.span<LabelProps>`
  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
    `}
`;
