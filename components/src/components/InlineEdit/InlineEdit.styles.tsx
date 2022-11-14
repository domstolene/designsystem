import styled, { css } from 'styled-components';
import { inlineEditTokens } from './InlineEdit.tokens';
const { inlineEdit, iconWrapper } = inlineEditTokens;
import { Property } from 'csstype';

export const defaultWidth: Property.Width = '140px';

export const getInlineEditInputStyling = (isEditing?: boolean) => {
  return css`
    border-color: transparent;
    background-color: ${inlineEdit.backgroundColor};
    padding: ${inlineEdit.padding};
    ${inlineEdit.font};
    ${!isEditing &&
    css`
      padding-left: ${inlineEdit.paddingLeft};
    `}

    &:hover:enabled:read-write:not(:focus) {
      background-color: ${inlineEdit.hover.backgroundColor};
      border-color: transparent;
      box-shadow: none;
    }
    &:focus {
      background-color: ${inlineEdit.focus.backgroundColor};
    }
  `;
};

export const IconWrapper = styled.span`
  position: absolute;
  left: ${iconWrapper.left};
  top: ${iconWrapper.top};
  z-index: 1;
  &:hover {
    cursor: text;
  }
`;
