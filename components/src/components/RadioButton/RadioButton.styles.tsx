import { RadioButtonProps } from './RadioButton.types';
import styled, { css } from 'styled-components';
import { radioButtonTokens as tokens } from './RadioButton.tokens';
import { focusVisibleTransitionValue } from '../../helpers/styling';
import { selectionControlTokens } from '../../helpers/SelectionControl/SelectionControl.tokens';
import { CustomSelectionControl } from '../../helpers/SelectionControl/SelectionControl.styles';

type ContainerProps = Pick<RadioButtonProps, 'error' | 'disabled' | 'readOnly'>;

export const Container = styled.label<ContainerProps>`
  position: relative;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  display: flex;
  align-items: center;
  ${tokens.container.base}

  input:checked ~ ${CustomSelectionControl}:after {
    display: block;
  }

  input ~ ${CustomSelectionControl} {
    transition: box-shadow 0.2s, background-color 0.2s, border 0.2s;
  }

  input:checked ~ ${CustomSelectionControl} {
    ${tokens.radioButton.checked.base}
  }

  &:hover input:enabled ~ ${CustomSelectionControl} {
    ${tokens.radioButton.hover.base}
  }
  &:hover input:checked:enabled ~ ${CustomSelectionControl} {
    ${tokens.radioButton.checked.hover.base}
  }

  &:focus-within {
    ${tokens.container.focus.base}
    transition: ${focusVisibleTransitionValue};
  }

  ${({ error }) =>
    error &&
    css`
      input ~ ${CustomSelectionControl} {
        ${tokens.radioButton.danger.base}
      }
      &:hover input:enabled ~ ${CustomSelectionControl} {
        ${tokens.radioButton.danger.hover.base}
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      input ~ ${CustomSelectionControl} {
        ${tokens.radioButton.disabled.base}
      }
      input:checked ~ ${CustomSelectionControl} {
        ${tokens.radioButton.checked.disabled.base}
      }
    `}

    ${({ readOnly }) =>
    readOnly &&
    css`
      cursor: default;
      input ~ ${CustomSelectionControl} {
        ${tokens.radioButton.readOnly.base}
      }
      input:checked ~ ${CustomSelectionControl} {
        ${tokens.radioButton.checked.readOnly.base}
      }
    `}

    ${CustomSelectionControl}:after {
    border-radius: 50%;
    background-color: ${selectionControlTokens.checkmark.radio.backgroundColor};
    width: ${selectionControlTokens.checkmark.radio.width};
    height: ${selectionControlTokens.checkmark.radio.height};
    left: ${selectionControlTokens.checkmark.radio.left};
    top: ${selectionControlTokens.checkmark.radio.top};
  }
`;
