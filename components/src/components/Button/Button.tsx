import React, { ButtonHTMLAttributes, ElementType, forwardRef } from 'react';
import { buttonTokens as tokens } from './buttonTokens';
import styled, { css } from 'styled-components';
import InlineIconWrapper from '../../helpers/InlineIconWrapper';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

const buttonContentStyle = (purpose: Purpose, form: Form) => {

    return css`
        color: ${tokens.colors[form][purpose].text};
        border: ${tokens.borderWidth} solid;
        border-color: ${tokens.colors[form][purpose].border};
        background-color: ${tokens.colors[form][purpose].default};
        box-shadow: ${tokens.boxShadow[form]};
        border-radius: ${tokens.borderRadius[form]};
        ${form === 'borderless' && css`
            text-decoration: underline;
            text-decoration-color: transparent;
        `
        }
        ${form !== 'borderless' ? css`
            &:hover {
                background-color: ${tokens.colors[form][purpose].hover};
                border-color: ${tokens.colors[form][purpose].hover_border};
                ${form === 'ghost' && css`
                    color: ${tokens.colors[form][purpose].hover_text};
                    box-shadow: 0 0 0 1px ${tokens.colors[form][purpose].hover_border};
                `
                }
            }
            &:active {
                background-color: ${tokens.colors[form][purpose].active};
                border-color: ${tokens.colors[form][purpose].active_border};
                ${form === 'ghost' && css`
                    color: ${tokens.colors[form][purpose].active_text};
                    box-shadow: 0 0 0 1px ${tokens.colors[form][purpose].active_border};
                `
                }
            }
        `
        : css`
            &:hover {
                color: ${tokens.colors.borderless[purpose].hover};
                text-decoration-color: ${tokens.colors.borderless[purpose].hover};
            }
            &:active {
                color: ${tokens.colors.borderless[purpose].active};
                text-decoration-color: ${tokens.colors.borderless[purpose].active};
            }
        `
        }
    `;
}

const ButtonContent = styled.span<{label?: string, size: Size, purpose: Purpose, form: Form, iconPosition?: IconPosition}>`
    display: flex;
    align-items: center;
    position: relative;
    transition: background-color 0.2s, text-decoration-color 0.2s, box-shadow 0.2s;
    ${({purpose, form}) => buttonContentStyle(purpose, form)}

    ${({size, label}) => {
        if(size) {
            return (!label) ? css`
                ${tokens.font.icon[size]}
                padding: ${tokens.sizes.padding.icon[size]};
            `
            : css`
                ${tokens.font.text[size]}
                padding: ${tokens.sizes.padding.text[size]}px;
            `
        }
    }
    }
    &:focus {
        outline: none;
    }
    .dds-icon-positioned {
        ${
            ({label, size, iconPosition}) => !label ?
            ''
            : iconPosition === "left" ? css`
                margin-inline-end: ${tokens.sizes.icon_margin[size]};
            `
            : iconPosition === "right" ? css`
                margin-inline-start: ${tokens.sizes.icon_margin[size]};
            `
            :''
        }
    }
`;

const ButtonWrapper = styled.button`
    display: inline-block;
    border: none;
    cursor: pointer;
    box-shadow: none;
    padding: 0;
    background-color: transparent;

    &:focus > ${ButtonContent} {
        outline: ${tokens.focusOutline.width} solid ${tokens.focusOutline.color};
        outline-offset: 2px;
    }
    &:focus {
        outline: none;
    }
`;

const IconWrapper = styled.span<{size: Size}>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${({size}) => size && css`
    height: ${tokens.sizes.icon[size]};
    width: ${tokens.sizes.icon[size]};
    `}
`;

type Size = 'small' | 'medium' | 'large';
type Purpose = 'primary' | 'secondary' | 'danger';
type Form = 'filled' | 'ghost' | 'rounded' | 'borderless';
type IconPosition = 'left' | 'right';

export type ButtonProps = {
    size: Size;
    label?: string;
    disabled?: boolean;
    purpose: Purpose;
    iconPosition?: IconPosition;
    form: Form;
    href?: string;
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({label, disabled, purpose, size, iconPosition, form, href, loading, className, style, Icon, ...rest}, ref) => {

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
            style
        }

const iconElement = (className = '') =>  Icon && <InlineIconWrapper Icon={Icon} className={className}  />;

        return (
            <ButtonWrapper {...wrapperProps}>
                <ButtonContent {...contentProps}>
                    {(!label && Icon)  ?
                    <IconWrapper size={size}>
                        {iconElement()}
                    </IconWrapper>
                    : label ?
                    <>
                        {iconPosition === 'left' && iconElement('dds-icon-positioned')}
                        <span>
                            {label}
                        </span>
                        {iconPosition === 'right' && iconElement('dds-icon-positioned')}
                    </>
                : ''
                }
                </ButtonContent>
            </ButtonWrapper>
        );
    }
)

Button.defaultProps = {
    size: 'medium',
    purpose: 'primary',
    form: 'filled'
}