import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import { checkboxTokens as tokens } from './checkboxTokens';

const CustomCheckbox = styled.span`
  position: absolute;
  ${tokens.checkbox.base}
  left: ${tokens.checkbox.spaceLeft};
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const Input = styled.input.attrs(({ type = 'checkbox' }) => ({
  type
}))`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;
`;

type ContainerProps = {
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  indeterminate?: boolean;
  label?: string;
};

const Container = styled.label<ContainerProps>`
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
    outline: ${tokens.container.focusOutline.width} solid
      ${tokens.container.focusOutline.color};
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

export type CheckboxProps = {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  indeterminate?: boolean;
  className?: string;
  style?: React.CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

let nextUniqueId = 0;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      error,
      disabled,
      readOnly,
      indeterminate,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(id ?? `checkbox-${nextUniqueId++}`);

    const containerProps = {
      error,
      disabled,
      indeterminate,
      readOnly,
      htmlFor: uniqueId,
      label,
      className,
      style
    };

    const inputProps = {
      id: uniqueId,
      name,
      indeterminate,
      disabled: disabled || readOnly,
      ...rest
    };

    return (
      <Container {...containerProps}>
        <Input
          ref={ref}
          {...inputProps}
          data-indeterminate={indeterminate}
          aria-readonly={readOnly ? true : false}
        />
        <CustomCheckbox />
        {label ? <span>{label}</span> : ''}
      </Container>
    );
  }
);
