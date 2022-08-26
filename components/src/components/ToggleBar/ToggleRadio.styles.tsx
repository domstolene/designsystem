import { ToggleBarSize } from './ToggleBar';
import { toggleBarTokens as tokens } from './ToggleBar.tokens';
import styled, { CSSObject, css } from 'styled-components';
import { hideInput } from '../../helpers/styling/hideInput';
import {
  focusVisible,
  focusVisibleTransitionValue,
} from '../../helpers/styling';

const { content, label } = tokens;

const getSizeStyling = (size: ToggleBarSize, justIcon: boolean) => {
  const tokens = justIcon
    ? content.size[size].justIcon
    : content.size[size].withText;
  return css`
    padding: ${tokens.padding};
    ${justIcon
      ? css`
          fontsize: ${content.size[size].justIcon.fontSize};
        `
      : css`
          gap: ${content.size[size].withText.gap};
          ${content.size[size].withText.font}
        `}
  `;
};

type ContentProps = {
  size: ToggleBarSize;
  justIcon: boolean;
};

export const Content = styled.span<ContentProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  width: fit-content;
  @media (prefers-reduced-motion: no-preference) {
    transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s,
      color 0.2s, ${focusVisibleTransitionValue};
  }
  background-color: ${content.base.backgroundColor};
  ${({ size, justIcon }) => getSizeStyling(size, justIcon)}
`;

export const Input = styled.input.attrs(({ type = 'radio' }) => ({
  type,
}))`
  ${hideInput as CSSObject}
`;

type LabelProps = {
  size: ToggleBarSize;
};

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

  ${Input}:checked + ${Content} {
    color: ${label.active.color};
    border-color: ${label.active.borderColor};
    background-color: ${label.active.backgroundColor};
    box-shadow: ${label.active.boxShadow};
    position: relative;
    z-index: 0;
  }

  ${Input}:focus-visible + ${Content} {
    ${focusVisible}
    position: relative;
    z-index: 0;
  }

  &:hover {
    color: ${label.hover.color};
    border-color: ${label.hover.borderColor};
  }
`;
