import styled, { css } from 'styled-components';
import { inputTokens as tokens } from './Input.tokens';
import { StyledInputProps } from '.';
import { Property } from 'csstype';
import {
  dangerInputfield,
  focusDangerInputfield,
  focusInputfield,
  hoverDangerInputfield,
  hoverInputfield,
  selection,
} from '../styling';

const { input, container } = tokens;

export const Input = styled.input`
  position: relative;
  color: ${input.base.color};
  border-radius: ${input.base.borderRadius};
  border: ${input.base.border};
  border-color: ${input.base.borderColor};
  background-color: ${input.base.backgroundColor};
  padding: ${input.base.padding};
  width: 100%;
  margin: 0;
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
    ${selection}
  }

  &:hover:enabled:read-write {
    ${hoverInputfield}
  }
  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${focusInputfield}
  }
`;

export const StatefulInput = styled(Input)<StyledInputProps>`
  -webkit-appearance: textfield;
  ${({ componentSize }) =>
    componentSize &&
    css`
      padding: ${input.sizes[componentSize].padding};
      ${input.sizes[componentSize].font}
    `}

  ${({ hasErrorMessage }) =>
    hasErrorMessage &&
    css`
      ${dangerInputfield}
      &:hover:enabled:read-write {
        ${hoverDangerInputfield}
      }
      &:focus:enabled:read-write,
      &:active:enabled:read-write {
        ${focusDangerInputfield}
      }
    `}
  &:enabled:read-only {
    border: none;
    outline: none;
    cursor: default;
    background-color: ${input.readOnly.backgroundColor};
    padding-left: 0;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${input.disabled.color};
    background-color: ${input.disabled.backgroundColor};
  }
`;

type OuterInputContainerProps = { width?: Property.Width };

export const OuterInputContainer = styled.div<OuterInputContainerProps>`
  position: relative;
  gap: ${container.gap};
  width: ${({ width }) => width};
`;

/**Brukes som container til input og ikon for posisjonering. */

export const InputContainer = styled.div`
  position: relative;
`;
