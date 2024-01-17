import { type Property } from 'csstype';
import styled, { css } from 'styled-components';

import { inlineEditTokens } from './InlineEdit.tokens';
import { StatefulInput, type StyledInputProps } from '../helpers';
import { scrollbarStyling } from '../ScrollableContainer';

const { inlineEdit, iconWrapper } = inlineEditTokens;

export const defaultWidth: Property.Width = '140px';

type StyledInlineInputProps = {
  isEditing?: boolean;
  hideIcon?: boolean;
} & StyledInputProps;

export const StyledInlineInput = styled(StatefulInput).withConfig({
  shouldForwardProp: prop => prop !== 'isEditing' && prop !== 'hideIcon',
})<StyledInlineInputProps>`
  border-color: transparent;
  background-color: ${inlineEdit.backgroundColor};
  padding: ${inlineEdit.padding};
  ${inlineEdit.font};
  ${({ isEditing, hideIcon }) =>
    !isEditing &&
    !hideIcon &&
    css`
      padding-left: ${inlineEdit.withIcon.paddingLeft};
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

export const StyledInlineTextArea = styled(StyledInlineInput).attrs({
  as: 'textarea',
})<StyledInlineInputProps>`
  resize: vertical;
  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox}
`;

export const IconWrapper = styled.span`
  position: absolute;
  left: ${iconWrapper.left};
  top: ${iconWrapper.top};
  z-index: 1;
  &:hover {
    cursor: text;
  }
`;
