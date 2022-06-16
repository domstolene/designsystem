import styled, { css } from 'styled-components';
import { inputTokens as tokens } from './Input.tokens';
import { Typography } from '../../components/Typography';
import { typographyTokens } from '../../components/Typography/Typography.tokens';
import { StyledInputProps, StyledLabelProps } from '.';
import { Property } from 'csstype';

export const Input = styled.input`
  ${tokens.baseInput.base}
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  box-shadow: none;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-color 0.2s, background-color 0.2s;
  }
  &[type='text'],
  &[type='password'],
  &[type='number'],
  &[type='tel'],
  &[type='date'],
  &[type='url'],
  &[type='email'],
  &[type='search'],
  &[type='datetime-local'] {
    -webkit-appearance: none;
  }
  &::selection {
    ${typographyTokens.selection.base}
  }

  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${tokens.baseInput.focus.base}
  }

  &:hover:enabled:read-write {
    ${tokens.baseInput.hover.base}
  }
`;

export const StatefulInput = styled(Input)<StyledInputProps>`
  -webkit-appearance: textfield;
  ${({ hasLabel }) =>
    css`
      ${tokens[hasLabel].base}
    `};

  &:hover:enabled:read-write ~ label {
    ${tokens.label.hover.base}
  }
  &:focus:enabled:read-write ~ label {
    ${tokens.label.focus.base}
  }
  ${({ hasErrorMessage }) =>
    hasErrorMessage &&
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
  &:enabled:read-only {
    ${tokens.readOnly.base}
  }
  &:disabled {
    ${tokens.disabled.base}
  }
`;

export const Label = styled(Typography)<StyledLabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: color 0.2s, background-color 0.2s;
  }
  ${tokens.label.base}
  ${({ disabled }) =>
    disabled &&
    css`
      ${tokens.label.disabled.base}
    `}
`;

export const InputContainer = styled.div`
  position: relative;
`;

type OuterInputContainerProps = { width?: Property.Width<string> };

export const OuterInputContainer = styled.div<OuterInputContainerProps>`
  display: flex;
  flex-direction: column;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;
