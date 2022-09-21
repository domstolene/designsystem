import styled, { css } from 'styled-components';
import {
  focusVisible,
  focusVisibleTransitionValue,
} from '../../helpers/styling';
import { checkboxTokens as tokens } from './Checkbox.tokens';
import { CheckboxProps } from './Checkbox.types';

const { checkbox, checkmark, container } = tokens;

export const CustomCheckbox = styled.span`
  position: absolute;
  left: 0;
  box-sizing: border-box;
  border: ${checkbox.base.border};
  border-color: ${checkbox.base.borderColor};
  background-color: ${checkbox.base.backgroundColor};
  border-radius: ${checkbox.base.borderRadius};
  height: ${checkbox.base.height};
  width: ${checkbox.base.width};
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

type ContainerProps = Pick<
  CheckboxProps,
  'disabled' | 'readOnly' | 'error' | 'indeterminate'
> & { hasLabel?: boolean };

export const Container = styled.label<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  color: ${container.color};
  ${({ hasLabel }) =>
    hasLabel
      ? css`
          padding-left: ${container.withLabel.paddingLeft};
        `
      : css`
          padding: ${container.noLabel.padding};
        `}

  input ~ ${CustomCheckbox} {
    @media (prefers-reduced-motion: no-preference) {
      transition: box-shadow 0.2s, background-color 0.2s, border 0.2s;
    }
  }

  input:checked
    ~ ${CustomCheckbox}:after,
    input[data-indeterminate='true']
    ~ ${CustomCheckbox}:after {
    display: block;
  }

  &:hover input:enabled ~ ${CustomCheckbox} {
    background-color: ${checkbox.hover.backgroundColor};
    box-shadow: ${checkbox.hover.boxShadow};
    border-color: ${checkbox.hover.borderColor};
  }

  input:checked
    ~ ${CustomCheckbox},
    input[data-indeterminate='true']
    ~ ${CustomCheckbox} {
    border-color: ${checkbox.checked.base.borderColor};
    background-color: ${checkbox.checked.base.backgroundColor};
  }

  &:hover
    input:checked:enabled
    ~ ${CustomCheckbox},
    &:hover
    input:enabled[data-indeterminate='true']
    ~ ${CustomCheckbox} {
    background-color: ${checkbox.checked.hover.backgroundColor};
    box-shadow: ${checkbox.checked.hover.boxShadow};
    border-color: ${checkbox.checked.hover.borderColor};
  }
  &:focus-within {
    ${focusVisible}
    @media (prefers-reduced-motion: no-preference) {
      transition: ${focusVisibleTransitionValue};
    }
  }

  ${({ error }) =>
    error &&
    css`
      &:hover input:enabled ~ ${CustomCheckbox} {
        background-color: ${checkbox.hover.danger.backgroundColor};
        box-shadow: ${checkbox.hover.danger.boxShadow};
        border-color: ${checkbox.hover.danger.borderColor};
      }
      input
        ~ ${CustomCheckbox},
        input:checked:enabled
        ~ ${CustomCheckbox},
        &:hover
        input:checked:enabled
        ~ ${CustomCheckbox} {
        box-shadow: ${checkbox.danger.boxShadow};
        border-color: ${checkbox.danger.borderColor};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      color: ${container.disabled.color};
      input ~ ${CustomCheckbox} {
        ${checkbox.disabled}
      }
      input:checked
        ~ ${CustomCheckbox},
        input[data-indeterminate='true']
        ~ ${CustomCheckbox} {
        ${checkbox.checked.disabled}
      }
    `}

    ${CustomCheckbox}:after {
    border: solid ${checkmark.borderColor};
    ${({ indeterminate }) =>
      indeterminate
        ? css`
            border-width: 1px 0 0 0;
            left: 25%;
            top: 50%;
            width: 50%;
            height: 1px;
          `
        : css`
            border-width: 0 1px 1px 0;
            left: 35%;
            top: 10%;
            width: 30%;
            height: 65%;
            transform: rotate(45deg);
          `}
  }
`;
