import styled, { css, CSSObject } from 'styled-components';
import { hideInput } from '../../helpers/styling';
import { checkboxTokens as tokens } from './Checkbox.tokens';
import { CheckboxProps } from './Checkbox.types';

export const CustomCheckbox = styled.span`
  position: absolute;
  ${tokens.checkbox.base}
  left: ${tokens.checkbox.spaceLeft};
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const Input = styled.input.attrs(({ type = 'checkbox' }) => ({
  type
}))`
  ${hideInput as CSSObject}
`;

type ContainerProps = Pick<
  CheckboxProps,
  'disabled' | 'readOnly' | 'error' | 'indeterminate' | 'label'
>;

export const Container = styled.label<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  ${tokens.container.base}
  ${({ label }) =>
    label
      ? css`
          ${tokens.container.withLabel.base}
        `
      : css`
          ${tokens.container.noLabel.base}
        `}

    input ~ ${CustomCheckbox} {
    transition: box-shadow 0.2s, background-color 0.2s, border 0.2s;
  }

  input:checked ~ ${CustomCheckbox}:after {
    display: block;
  }

  input:checked ~ ${CustomCheckbox} {
    ${tokens.checkbox.checked.base}
  }

  &:hover input:enabled ~ ${CustomCheckbox} {
    ${tokens.checkbox.hover.base}
  }
  &:hover input:checked:enabled ~ ${CustomCheckbox} {
    ${tokens.checkbox.checked.hover.base}
  }
  &:focus-within {
    ${tokens.container.focus.base}
  }

  ${({ error }) =>
    error &&
    css`
      input ~ ${CustomCheckbox} {
        ${tokens.checkbox.danger.base}
      }
      &:hover input:enabled ~ ${CustomCheckbox} {
        ${tokens.checkbox.danger.hover.base}
      }
    `}

  ${({ indeterminate }) =>
    indeterminate &&
    css`
      input:enabled ~ ${CustomCheckbox} {
        ${tokens.checkbox.indeterminate.base}
      }
      input ~ ${CustomCheckbox}:after {
        display: block;
      }
      &:hover input:enabled ~ ${CustomCheckbox} {
        ${tokens.checkbox.indeterminate.hover.base}
      }
    `}

    ${({ disabled, indeterminate }) =>
    disabled &&
    css`
      cursor: not-allowed;
      input ~ ${CustomCheckbox} {
        ${tokens.checkbox.disabled.base}
      }
      input:checked ~ ${CustomCheckbox} {
        ${tokens.checkbox.checked.disabled.base}
      }
      ${indeterminate &&
      css`
        input ~ ${CustomCheckbox} {
          ${tokens.checkbox.indeterminate.disabled.base}
        }
      `}
    `}

    ${({ readOnly, indeterminate }) =>
    readOnly &&
    css`
      cursor: default;
      input ~ ${CustomCheckbox} {
        ${tokens.checkbox.readOnly.base}
      }
      input:checked ~ ${CustomCheckbox} {
        ${tokens.checkbox.checked.readOnly.base}
      }
      ${indeterminate &&
      css`
        input ~ ${CustomCheckbox} {
          ${tokens.checkbox.indeterminate.readOnly.base}
        }
      `}
    `}

    ${CustomCheckbox}:after {
    border: solid ${tokens.checkmark.color};
    ${({ indeterminate }) =>
      indeterminate
        ? css`
            left: 25%;
            top: 50%;
            width: 50%;
            height: 1px;
            ${tokens.checkmark.indeterminate.base}
          `
        : css`
            ${tokens.checkmark.base}
          `}
  }
`;
