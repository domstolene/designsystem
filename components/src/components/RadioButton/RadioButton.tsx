import React, { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import { RadioButtonGroup, useRadioButtonGroup } from './RadioButtonGroupContext';
import { radioButtonTokens as tokens } from './radioButtonTokens';

const CustomRadioButton = styled.span`
    position: absolute;
    border-radius: 50%;
    vertical-align: middle;
    ${tokens.radioButton.base}
    left: ${tokens.radioButton.spaceLeft};
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

const Input = styled.input.attrs(({ type = 'radio' }) => ({
  type,
}))`
    clip: rect(0 0 0 0);
    position: absolute;
    height: 0;
    width: 0;
    margin: 0;
    `;

const Container = styled.label<{error?: boolean, disabled?: boolean, readOnly?: boolean}>`
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

    &:hover input:enabled ~ ${CustomRadioButton}{
        ${tokens.radioButton.hover.base}
    }
    &:hover input:checked:enabled ~ ${CustomRadioButton} {
        ${tokens.radioButton.checked.hover.base}
    }

    &:focus-within {
        outline: ${tokens.container.focusOutline.width} solid ${tokens.container.focusOutline.color};
    }

    ${({error}) => error && css`
        input ~ ${CustomRadioButton} {
            ${tokens.radioButton.danger.base}
        }
        &:hover input:enabled ~ ${CustomRadioButton} {
            ${tokens.radioButton.danger.hover.base}
        }
    `}

    ${({disabled}) => disabled && css`
        cursor: not-allowed;
        input ~ ${CustomRadioButton} {
            ${tokens.radioButton.disabled.base}
        }
        input:checked ~ ${CustomRadioButton} {
            ${tokens.radioButton.checked.disabled.base}
        }
    `}

    ${({readOnly}) => readOnly && css`
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

export type RadioButtonProps = {
    label?: string;
    disabled?: boolean;
    error?: boolean;
    className?: string;
    style?: React.CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

let nextUniqueId = 0;

const isValueEqualToGroupValueOrFalsy = (value: any, group: Nullable<RadioButtonGroup>) => {
  if (typeof value !== 'undefined' && value !== null && group ) {
    if (typeof value === 'number') {
        return value === Number(group?.value);
    }
    return value === group?.value;
  }
  return value;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
    ({id, name, label, disabled, readOnly, error, style, checked, value, className, children, required, onChange, ...rest}, ref) => {

        const [uniqueId] = useState<string>(id ?? `radioButton-${nextUniqueId++}`);

        const radioButtonGroup = useRadioButtonGroup();

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(event);
            radioButtonGroup?.onChange(event);
        };

        const inputProps = {
            id: uniqueId,
            name: name ?? radioButtonGroup?.name,
            disabled: disabled || readOnly || radioButtonGroup?.disabled || radioButtonGroup?.readOnly,
            required: required || radioButtonGroup?.required,
            checked: typeof checked !== 'undefined' ? checked : isValueEqualToGroupValueOrFalsy(value, radioButtonGroup),
            onChange: handleChange,
            value: value,
            ...rest
        }

        const containerProps = {
            error: error || radioButtonGroup?.error,
            disabled: disabled || radioButtonGroup?.disabled,
            readOnly: readOnly || radioButtonGroup?.readOnly,
            style,
            className
        }

        return (
            <Container
                {...containerProps}
                htmlFor={uniqueId}
            >
                <Input
                    ref={ref}
                    {...inputProps}
                />
                <CustomRadioButton />
                <span>{children ?? label}</span>
            </Container>
        );
    });