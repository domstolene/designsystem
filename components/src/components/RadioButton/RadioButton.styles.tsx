import { RadioButtonProps } from './RadioButton.types';
import styled, { css } from 'styled-components';
import { radioButtonTokens as tokens } from './RadioButton.tokens';

export const CustomRadioButton = styled.span`
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  vertical-align: middle;
  ${tokens.radioButton.base}
  left: ${tokens.radioButton.spaceLeft};
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const Input = styled.input.attrs(({ type = 'radio' }) => ({
  type
}))`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;
`;

type ContainerProps = Pick<RadioButtonProps, 'error' | 'disabled' | 'readOnly'>;

export const Container = styled.label<ContainerProps>`
  position: relative;
  display: block;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  display: flex;
  align-items: center;
  ${tokens.container.base}

  input:checked ~ ${CustomRadioButton}:after {
    display: block;
  }

  input ~ ${CustomRadioButton} {
    transition: box-shadow 0.2s, background-color 0.2s, border 0.2s;
  }

  input:checked ~ ${CustomRadioButton} {
    ${tokens.radioButton.checked.base}
  }

  &:hover input:enabled ~ ${CustomRadioButton} {
    ${tokens.radioButton.hover.base}
  }
  &:hover input:checked:enabled ~ ${CustomRadioButton} {
    ${tokens.radioButton.checked.hover.base}
  }

  &:focus-within {
    outline: ${tokens.container.focusOutline.width} solid
      ${tokens.container.focusOutline.color};
  }

  ${({ error }) =>
    error &&
    css`
      input ~ ${CustomRadioButton} {
        ${tokens.radioButton.danger.base}
      }
      &:hover input:enabled ~ ${CustomRadioButton} {
        ${tokens.radioButton.danger.hover.base}
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      input ~ ${CustomRadioButton} {
        ${tokens.radioButton.disabled.base}
      }
      input:checked ~ ${CustomRadioButton} {
        ${tokens.radioButton.checked.disabled.base}
      }
    `}

    ${({ readOnly }) =>
    readOnly &&
    css`
      cursor: default;
      input ~ ${CustomRadioButton} {
        ${tokens.radioButton.readOnly.base}
      }
      input:checked ~ ${CustomRadioButton} {
        ${tokens.radioButton.checked.readOnly.base}
      }
    `}

    ${CustomRadioButton}:after {
    border-radius: 50%;
    ${tokens.checkmark.base}
  }
`;
