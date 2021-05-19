import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
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

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
    ({id, name, label, disabled, readOnly, error, style, className, children, ...rest}, ref) => {

        const [uniqueId] = useState<string>(id ?? `radioButton-${nextUniqueId++}`);

        const radioGroup = useRadioButtonGroup();

        const inputProps = {
            id: uniqueId,
            name,
            disabled: disabled || readOnly,
            ...rest
        }

        const containerProps = {
            error,
            disabled,
            readOnly,
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