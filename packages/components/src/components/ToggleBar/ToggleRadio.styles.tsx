import styled, { css } from 'styled-components';

import { toggleBarTokens as tokens, typographyTypes } from './ToggleBar.tokens';
import { type ToggleBarSize } from './ToggleBar.types';
import {
  HiddenInput,
  focusVisible,
  focusVisibleTransitionValue,
} from '../helpers';
import { getFontStyling } from '../Typography';

const { content, label } = tokens;

interface ContentProps {
  $size: ToggleBarSize;
  $justIcon: boolean;
}

export const Content = styled.span<ContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  @media (prefers-reduced-motion: no-preference) {
    transition:
      border-color 0.2s,
      background-color 0.2s,
      box-shadow 0.2s,
      color 0.2s,
      ${focusVisibleTransitionValue};
  }
  background-color: ${content.base.backgroundColor};

  ${({ $size, $justIcon }) => css`
    ${$justIcon
      ? css`
          font-size: ${content.size[$size].justIcon.fontSize};
          padding: ${content.size[$size].justIcon.padding};
        `
      : css`
          gap: ${content.size[$size].withText.gap};
          padding: ${content.size[$size].withText.padding};
          ${getFontStyling(typographyTypes[$size])}
        `}
  `}
`;

interface LabelProps {
  size: ToggleBarSize;
}

export const Label = styled.label<LabelProps>`
  ${Content} {
    border-right: ${label.base.borderRight};
    border-top: ${label.base.borderTop};
    border-bottom: ${label.base.borderBottom};
  }
  &:first-child ${Content} {
    border-left: ${label.firstChild.borderLeft};
    border-top-left-radius: ${label.firstChild.borderTopLeftRadius};
    border-bottom-left-radius: ${label.firstChild.borderBottomLeftRadius};
  }
  &:last-child ${Content} {
    border-top-right-radius: ${label.lastChild.borderTopRightRadius};
    border-bottom-right-radius: ${label.lastChild.borderBottomRightRadius};
  }

  ${HiddenInput}:checked + ${Content} {
    color: ${content.active.color};
    border-color: ${content.active.borderColor};
    background-color: ${content.active.backgroundColor};
    box-shadow: ${content.active.boxShadow};
    position: relative;
    z-index: 0;
  }

  ${HiddenInput}:focus-visible + ${Content} {
    ${focusVisible}
    position: relative;
    z-index: 0;
  }

  &:hover {
    color: ${label.hover.color};
    border-color: ${label.hover.borderColor};
  }
`;
