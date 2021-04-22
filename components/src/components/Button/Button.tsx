import React, { ButtonHTMLAttributes, ElementType, forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`

`;

const ButtonContent = styled.span`

`;

export type ButtonProps = {
    size: 'small' | 'medium' | 'large';
    label?: string;
    disabled?: boolean;
    purpose: 'primary' | 'secondary' | 'danger';
    iconPosition?: 'left' | 'right';
    form: 'filled' | 'ghost' | 'rounded' | 'borderless';
    href?: string;
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({label, disabled, purpose = 'primary', size = 'medium', iconPosition, form = 'filled', href, loading, className, style, ...rest}, ref) => {

        const as: ElementType = href ? 'a' : 'button';

        const wrapperProps = {
            href,
            label,
            as,
            rel: href ? 'noreferrer noopener' : '',
            ref,
            ...rest
        };

        const contentProps = {
            iconPosition,
            form,
            purpose,
            label,
            size,
            tabIndex: -1,
            className,
            style,
            ...rest
        }
        return (
            <ButtonWrapper {...wrapperProps}>
                <ButtonContent {...contentProps}>{label}</ButtonContent>
            </ButtonWrapper>
        );
    }
)