import styled, { css } from 'styled-components';
import { CustomSelectionControl } from '../../helpers/SelectionControl/SelectionControl.styles';
import {
  focusVisible,
  focusVisibleTransitionValue,
} from '../../helpers/styling';
import { checkboxTokens as tokens } from './Checkbox.tokens';
import { CheckboxProps } from './Checkbox.types';

const { checkbox, checkmark, container } = tokens;

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
  ${({ hasLabel }) => (hasLabel ? css`` : css``)}

  input ~ ${CustomSelectionControl} {
    @media (prefers-reduced-motion: no-preference) {
      transition: box-shadow 0.2s, background-color 0.2s, border 0.2s;
    }
  }

  input:checked
    ~ ${CustomSelectionControl}:after,
    input[data-indeterminate='true']
    ~ ${CustomSelectionControl}:after {
    display: block;
  }

  &:hover input:enabled ~ ${CustomSelectionControl} {
    background-color: ${checkbox.hover.backgroundColor};
    box-shadow: ${checkbox.hover.boxShadow};
    border-color: ${checkbox.hover.borderColor};
  }

  input:checked
    ~ ${CustomSelectionControl},
    input[data-indeterminate='true']
    ~ ${CustomSelectionControl} {
    border-color: ${checkbox.checked.base.borderColor};
    background-color: ${checkbox.checked.base.backgroundColor};
  }

  &:hover
    input:checked:enabled
    ~ ${CustomSelectionControl},
    &:hover
    input:enabled[data-indeterminate='true']
    ~ ${CustomSelectionControl} {
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
      &:hover input:enabled ~ ${CustomSelectionControl} {
        background-color: ${checkbox.hover.danger.backgroundColor};
        box-shadow: ${checkbox.hover.danger.boxShadow};
        border-color: ${checkbox.hover.danger.borderColor};
      }
      input
        ~ ${CustomSelectionControl},
        input:checked:enabled
        ~ ${CustomSelectionControl},
        &:hover
        input:checked:enabled
        ~ ${CustomSelectionControl} {
        box-shadow: ${checkbox.danger.boxShadow};
        border-color: ${checkbox.danger.borderColor};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      color: ${container.disabled.color};
      input ~ ${CustomSelectionControl} {
        ${checkbox.disabled}
      }
      input:checked
        ~ ${CustomSelectionControl},
        input[data-indeterminate='true']
        ~ ${CustomSelectionControl} {
        ${checkbox.checked.disabled}
      }
    `}

    ${CustomSelectionControl}:after {
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
