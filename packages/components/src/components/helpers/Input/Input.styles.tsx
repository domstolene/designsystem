import { type Property } from 'csstype';
import styled, { css } from 'styled-components';

import { inputTypographyTypes, inputTokens as tokens } from './Input.tokens';
import { getFontStyling } from '../../Typography/Typography/Typography.utils';
import {
  dangerInputfield,
  focusDangerInputfield,
  focusInputfield,
  hoverDangerInputfield,
  hoverInputfield,
  selection,
} from '../styling';

import { type StyledInputProps } from '.';

const { input } = tokens;

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
    transition:
      box-shadow 0.2s,
      border-color 0.2s,
      background-color 0.2s;
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

  &:not(input):not(textarea):not(.disabled):not(.read-only):not(.active):hover,
  &:hover:enabled:read-write {
    ${hoverInputfield}
  }
  &:not(.disabled):not(.read-only):not(:read-only):focus-within,
  &.active,
  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${focusInputfield}
  }
`;

export const StatefulInput = styled(Input).withConfig({
  shouldForwardProp: prop => {
    const stylingProps: Array<keyof StyledInputProps> = [
      'componentSize',
      'hasErrorMessage',
      'prefixLength',
      'suffixLength',
    ];
    return !stylingProps.some(styleProp => styleProp === prop);
  },
})<StyledInputProps>`
  -webkit-appearance: textfield;

  padding-left: ${({ prefixLength, readOnly }) =>
    prefixLength &&
    (readOnly
      ? `${prefixLength}px !important`
      : `calc(${input.affix.gap}px + ${prefixLength}px) !important`)};
  padding-right: ${({ suffixLength, readOnly }) =>
    suffixLength &&
    (readOnly
      ? `${suffixLength}px !important`
      : `calc(${input.affix.gap}px + ${suffixLength}px) !important`)};
  ${({ componentSize }) =>
    componentSize &&
    css`
      padding: ${input.sizes[componentSize].padding};
      ${getFontStyling(inputTypographyTypes[componentSize])}
    `}

  ${({ hasErrorMessage }) =>
    hasErrorMessage &&
    css`
      ${dangerInputfield}
      &:not(.disabled):hover,
      &:hover:enabled:read-write {
        ${hoverDangerInputfield}
      }
      &:not(.disabled):focus-within,
      &:focus-within:enabled:read-write,
      &:active:enabled:read-write {
        ${focusDangerInputfield}
      }
    `}
  &:not(.disabled).read-only,
  &:enabled:read-only {
    border: none;
    outline: none;
    cursor: default;
    background-color: ${input.readOnly.backgroundColor};
    padding-left: 0;
  }
  &.disabled,
  &:disabled {
    cursor: not-allowed;
    color: ${input.disabled.color};
    background-color: ${input.disabled.backgroundColor};
  }
`;

interface OuterInputContainerProps {
  $width?: Property.Width;
}

export const OuterInputContainer = styled.div<OuterInputContainerProps>`
  position: relative;
  width: ${({ $width }) => $width};
`;

/**Brukes som container til input og ikon for posisjonering. */

export const InputContainer = styled.div`
  position: relative;
`;

export const InputAffixContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
