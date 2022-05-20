import styled, { css } from 'styled-components';
import { TextInputProps } from './TextInput.types';
import { textInputTokens as tokens } from './TextInput.tokens';
import {
  inputStyling,
  SingleLineLabel,
  InputContainer as GeneralInputContainer,
  StyledInputProps,
  inputTokens
} from '../../helpers/Input';
import scrollbarStyling from '../../helpers/scrollbarStyling';

export const TextArea = styled.textarea<StyledInputProps>`
  ${({ hasLabel, disabled, readOnly, hasErrorMessage }) =>
    inputStyling({ readOnly, hasLabel, disabled, hasErrorMessage })}
  resize: vertical;
  height: auto;
  ${scrollbarStyling}
  min-height: ${({ hasLabel }) =>
    hasLabel
      ? tokens.container.multiline.withLabel.height
      : tokens.container.multiline.noLabel.height};
  ${tokens.multiline.base}
  ${({ hasLabel }) =>
    hasLabel
      ? css`
          ${tokens.multiline.withLabel.base}
        `
      : css`
          ${tokens.multiline.noLabel.base}
        `}

   &:hover:enabled:read-write ~ label {
    background-color: ${({ hasErrorMessage }) =>
      hasErrorMessage
        ? inputTokens.error.hover.base.backgroundColor
        : inputTokens.general.input.hover.backgroundColor};
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

type LabelProps = Pick<TextInputProps, 'multiline' | 'disabled' | 'readOnly'>;

export const Label = styled(SingleLineLabel)<LabelProps>`
  ${({ multiline }) =>
    multiline &&
    css`
      margin: 1px;
      width: calc(100% - 20px);
      ${tokens.label.multiline.base}
    `}
  ${({ disabled, multiline }) =>
    disabled &&
    multiline &&
    css`
      background-color: ${inputTokens.disabled.base.backgroundColor};
    `}
    ${({ readOnly, multiline }) =>
    readOnly &&
    multiline &&
    css`
      background-color: ${inputTokens.readOnly.base.backgroundColor};
    `}
`;

type InputContainerProps = Pick<TextInputProps, 'multiline' | 'label'>;

export const InputContainer = styled(
  GeneralInputContainer
)<InputContainerProps>`
  ${({ multiline }) =>
    multiline &&
    css`
      display: inline-block;
    `}
  height: ${({ multiline, label }) => {
    if (multiline) {
      if (label) {
        return tokens.container.multiline.withLabel.height;
      }
      return tokens.container.multiline.noLabel.height;
    }
  }};
`;
