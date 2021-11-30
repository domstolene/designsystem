import styled, { css } from 'styled-components';
import { inputTokens as tokens } from './Input.tokens';
import { Typography } from '../../components/Typography';
import { inputFieldStylingBase } from './inputFieldStylingBase';
import { InputProps, StyledInputProps, StyledLabelProps } from './Input.types';

export const inputStyling = ({
  readOnly,
  errorMessage,
  label,
  disabled
}: StyledInputProps) => {
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

    &:hover:enabled:read-write ~ label {
      ${tokens.label.hover.base}
    }
    &:focus:enabled:read-write ~ label {
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
      &:hover:enabled:read-write {
        ${tokens.error.hover.base}
      }
      &:focus:enabled:read-write,
      &:active:enabled:read-write {
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

export const Input = styled.input<StyledInputProps>`
  ${({ label, disabled, readOnly, errorMessage }) =>
    inputStyling({ readOnly, errorMessage, label, disabled })}
`;

export const SingleLineLabel = styled(Typography)<StyledLabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  transition: color 0.2s, background-color 0.2s;
  ${tokens.label.base}
  ${({ disabled }) =>
    disabled &&
    css`
      ${tokens.label.disabled.base}
    `}
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

type OuterInputContainerProps = Pick<InputProps, 'width'>;

export const OuterInputContainer = styled.div<OuterInputContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;
