import styled, { css } from 'styled-components';
import { TextInputProps } from './TextInput.types';
import { textInputTokens as tokens } from './TextInput.tokens';
import {
  inputStyling,
  SingleLineLabel,
  StyledInputProps,
  inputTokens
} from '../../helpers';
import { scrollbarStyling } from '../../helpers/styling';

export const TextArea = styled.textarea<StyledInputProps>`
  ${({ hasLabel, disabled, readOnly, hasErrorMessage }) =>
    inputStyling({ readOnly, hasLabel, disabled, hasErrorMessage })}
  resize: vertical;
  height: auto;
  ${scrollbarStyling}
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
