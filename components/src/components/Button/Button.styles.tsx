import styled, { css } from 'styled-components';
import { typographyTokens } from '../Typography/Typography.tokens';
import { buttonTokens as tokens } from './Button.tokens';
import {
  ButtonAppearance,
  ButtonPurpose,
  ButtonSize,
  IconPosition
} from './Button.types';

type ButtonWrapperProps = {
  appearance: ButtonAppearance;
  purpose: ButtonPurpose;
  size: ButtonSize;
  fullWidth: boolean;
  hasIcon: boolean;
  hasLabel: boolean;
  isLoading: boolean;
  iconPosition?: IconPosition;
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${tokens.base}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  cursor: pointer;
  box-shadow: none;
  text-decoration: none;
  transition: background-color 0.2s, text-decoration-color 0.2s, box-shadow 0.2s,
    border-color 0.2s, color 0.2s;

  ${({ appearance, purpose }) =>
    css`
      ${tokens.appearance[appearance].base}
      ${tokens.appearance[appearance][purpose].base}

      &:hover {
        ${tokens.appearance[appearance][purpose].hover.base}
      }

      &:active {
        ${tokens.appearance[appearance][purpose].active.base}
      }
    `}

  ${({ hasIcon, hasLabel, appearance, purpose }) =>
    hasIcon &&
    !hasLabel &&
    appearance === 'borderless' &&
    css`
      &:hover {
        ${tokens.appearance[appearance][purpose].justIcon.hover.base}
      }
      &:active {
        ${tokens.appearance[appearance][purpose].justIcon.active.base}
      }
    `}

  ${({ size, hasLabel }) =>
    hasLabel
      ? css`
          ${tokens.sizes[size].text.base}
        `
      : css`
          ${tokens.sizes[size].justIcon.base}
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
    outline: ${tokens.focusOutline.width} solid ${tokens.focusOutline.color};
    outline-offset: 2px;
  }

  *::selection {
    ${typographyTokens.selection.base}
  }
`;

type StyledIconWrapperSpanProps = {
  iconPosition?: IconPosition;
  size: ButtonSize;
};

export const StyledIconWrapperSpan = styled.span<StyledIconWrapperSpanProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size, iconPosition }) =>
    iconPosition === 'left'
      ? css`
          margin-inline-end: ${tokens.sizes[size].iconWithTextMargin};
        `
      : iconPosition === 'right'
      ? css`
          margin-inline-start: ${tokens.sizes[size].iconWithTextMargin};
        `
      : css`
          ${tokens.sizes[size].justIconWrapper.base}
        `}
`;

export const Label = styled.span``;
