import styled, { css } from 'styled-components';
import { focusVisible, focusVisibleTransitionValue } from '../styling';
import { selectionControlTokens } from './SelectionControl.tokens';

const { selectionControl, container, checkmark } = selectionControlTokens;

type SelectionControlType = 'radio' | 'checkbox';

type CustomSelectionControlProps = {
  controlType?: SelectionControlType;
};

export const CustomSelectionControl = styled.span<CustomSelectionControlProps>`
  position: absolute;
  left: 0;
  box-sizing: border-box;
  border: ${selectionControl.base.border};
  border-color: ${selectionControl.base.borderColor};
  background-color: ${selectionControl.base.backgroundColor};
  border-radius: ${selectionControl.base.borderRadius};
  height: ${selectionControl.base.height};
  width: ${selectionControl.base.width};
  ${({ controlType }) =>
    controlType === 'radio' &&
    css`
      border-radius: 50%;
    `}
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const indeterminateSelectors = {
  checked: `
        input[data-indeterminate='true']
        ~ ${CustomSelectionControl}
    `,
  checkedAfter: `
        input[data-indeterminate='true']
        ~ ${CustomSelectionControl}:after
    `,
  disabled: `
      input[data-indeterminate='true']:disabled ~ ${CustomSelectionControl};
    `,
  hoverChecked: `
        &:hover
        input:enabled[data-indeterminate='true']
        ~ ${CustomSelectionControl}
    `,
};

const selectorCombinator = (key: string, type: SelectionControlType) =>
  type === 'checkbox' ? `, ${key}` : '';

type ContainerProps = {
  hasLabel?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  indeterminate?: boolean;
  controlType: SelectionControlType;
};

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

  input ~ ${CustomSelectionControl} {
    @media (prefers-reduced-motion: no-preference) {
      transition: box-shadow 0.2s, background-color 0.2s, border 0.2s;
    }
  }

  &:focus-within {
    ${focusVisible}
    @media (prefers-reduced-motion: no-preference) {
      transition: ${focusVisibleTransitionValue};
    }
  }

  &:hover input:enabled ~ ${CustomSelectionControl} {
    background-color: ${selectionControl.hover.backgroundColor};
    box-shadow: ${selectionControl.hover.boxShadow};
    border-color: ${selectionControl.hover.borderColor};
  }

  ${({ error }) =>
    error &&
    css`
      &:hover input:enabled ~ ${CustomSelectionControl} {
        background-color: ${selectionControl.hover.danger.backgroundColor};
        box-shadow: ${selectionControl.hover.danger.boxShadow};
        border-color: ${selectionControl.hover.danger.borderColor};
      }
      input
        ~ ${CustomSelectionControl},
        input:checked:enabled
        ~ ${CustomSelectionControl},
        &:hover
        input:checked:enabled
        ~ ${CustomSelectionControl} {
        box-shadow: ${selectionControl.danger.boxShadow};
        border-color: ${selectionControl.danger.borderColor};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      color: ${container.disabled.color};
      input ~ ${CustomSelectionControl} {
        ${selectionControl.disabled}
      }
    `}

  ${({ controlType }) => css`
    input:checked
      ~ ${CustomSelectionControl}:after${selectorCombinator(
        indeterminateSelectors.checkedAfter,
        controlType
      )} {
      display: block;
    }

    input:checked
      ~ ${CustomSelectionControl}${selectorCombinator(
        indeterminateSelectors.checked,
        controlType
      )} {
      border-color: ${selectionControl.checked.base.borderColor};
      background-color: ${selectionControl.checked.base.backgroundColor};
    }

    &:hover
      input:checked:enabled
      ~ ${CustomSelectionControl}${selectorCombinator(
        indeterminateSelectors.hoverChecked,
        controlType
      )} {
      background-color: ${selectionControl.checked.hover.backgroundColor};
      box-shadow: ${selectionControl.checked.hover.boxShadow};
      border-color: ${selectionControl.checked.hover.borderColor};
    }

    input:checked:disabled
      ~ ${CustomSelectionControl}${selectorCombinator(
        indeterminateSelectors.hoverChecked,
        controlType
      )} {
      ${selectionControl.checked.disabled}
    }

    ${controlType === 'checkbox'
      ? css`
          ${CustomSelectionControl}:after {
            border: solid ${checkmark.checkbox.borderColor};

            border-width: 0 1px 1px 0;
            left: 35%;
            top: 10%;
            width: 30%;
            height: 65%;
            transform: rotate(45deg);
          }
          input[data-indeterminate='true'] ~ ${CustomSelectionControl}:after {
            border-width: 1px 0 0 0;
            left: 25%;
            top: 50%;
            width: 50%;
            height: 1px;
            transform: none;
          }
        `
      : css`
          ${CustomSelectionControl}:after {
            border-radius: 50%;
            background-color: ${checkmark.radio.backgroundColor};
            width: ${checkmark.radio.width};
            height: ${checkmark.radio.height};
            left: ${checkmark.radio.left};
            top: ${checkmark.radio.top};
          }
        `}
  `}
`;
