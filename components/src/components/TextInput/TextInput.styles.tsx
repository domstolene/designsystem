import styled, { css } from 'styled-components';
import { TextInputProps } from './TextInput.types';
import { inputTokens as tokens } from './TextInput.tokens';
import { Typography } from '../Typography';
import { inputFieldStylingBase } from '../../helpers/inputFieldStylingBase';
import scrollbarStyling from '../../helpers/scrollbarStyling';

type GeneralInputProps = Pick<
  TextInputProps,
  'readOnly' | 'errorMessage' | 'label' | 'disabled'
>;

const InputStyling = ({
  readOnly,
  errorMessage,
  label,
  disabled
}: GeneralInputProps) => {
  return css`
    ${inputFieldStylingBase}
    ${tokens.base}
    box-sizing: border-box;
    ${label
      ? css`
          ${tokens.withLabel.base}
        `
      : css`
          ${tokens.noLabel.base}
        `};

    &:hover:enabled ~ label {
      ${tokens.label.hover.base}
    }
    &:focus:enabled ~ label {
      ${tokens.label.focus.base}
    }

    ${disabled &&
    css`
      cursor: not-allowed;
      ${tokens.disabled.base}
    `}
    ${errorMessage &&
    css`
      ${tokens.error.base}
      &:hover:enabled {
        ${tokens.error.hover.base}
      }
      &:focus:enabled,
      &:active:enabled {
        ${tokens.error.focus.base}
      }
    `}
        ${readOnly &&
    css`
      cursor: default;
      ${tokens.readOnly.base}
    `}
  `;
};

export const Input = styled.input<GeneralInputProps>`
  ${({ label, disabled, readOnly, errorMessage }) =>
    InputStyling({ readOnly, errorMessage, label, disabled })}
`;

export const TextArea = styled.textarea<GeneralInputProps>`
  ${({ label, disabled, readOnly, errorMessage }) =>
    InputStyling({ readOnly, errorMessage, label, disabled })}
  resize: vertical;
  height: auto;
  ${scrollbarStyling}
  min-height: ${({ label }) =>
    label
      ? tokens.container.multiline.withLabel.height
      : tokens.container.multiline.noLabel.height};
  ${tokens.multiline.base}
  ${({ label }) =>
    label
      ? css`
          ${tokens.multiline.withLabel.base}
        `
      : css`
          ${tokens.multiline.noLabel.base}
        `}

   &:hover:enabled ~ label {
    background-color: ${({ errorMessage }) =>
      errorMessage
        ? tokens.error.hover.base.backgroundColor
        : tokens.general.input.hover.backgroundColor};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

type LabelProps = Pick<TextInputProps, 'multiline' | 'disabled' | 'readOnly'>;

export const Label = styled(Typography)<LabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  transition: color 0.2s, background-color 0.2s;
  ${tokens.label.base}
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
      background-color: ${tokens.disabled.base.backgroundColor};
    `}
    ${({ readOnly, multiline }) =>
    readOnly &&
    multiline &&
    css`
      background-color: ${tokens.readOnly.base.backgroundColor};
    `}
`;

type InputFieldWrapperProps = Pick<TextInputProps, 'width'>;

export const InputFieldWrapper = styled.div<InputFieldWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

type InputFieldContainerProps = Pick<TextInputProps, 'multiline' | 'label'>;

export const InputFieldContainer = styled.div<InputFieldContainerProps>`
  position: relative;
  width: 100%;
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
