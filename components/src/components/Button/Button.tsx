import React, { ButtonHTMLAttributes, ElementType, forwardRef } from 'react';
import { buttonTokens as tokens } from './buttonTokens';
import styled, { css } from 'styled-components';
import InlineIconWrapper from '../../helpers/InlineIconWrapper';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import Spinner from '../../helpers/Spinner';

const buttonContentStyle = (purpose: ButtonPurpose, appearance: Appearance, label?: string, Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>) => {

    return css`
        color: ${tokens.colors[appearance][purpose].text};
        border: ${tokens.borderWidth} solid;
        border-color: ${tokens.colors[appearance][purpose].border};
        background-color: ${tokens.colors[appearance][purpose].default};
        box-shadow: ${tokens.boxShadow[appearance]};
        border-radius: ${tokens.borderRadius[appearance]};
        ${appearance === 'borderless' && css`
            text-decoration: underline;
            text-decoration-color: transparent;
        `
        }
        ${appearance !== 'borderless' ? css`
            &:hover {
                background-color: ${tokens.colors[appearance][purpose].hover};
                border-color: ${tokens.colors[appearance][purpose].hover_border};
                ${appearance === 'ghost' && css`
                    color: ${tokens.colors[appearance][purpose].hover_text};
                    box-shadow: 0 0 0 1px ${tokens.colors[appearance][purpose].hover_border};
                `
                }
            }
            &:active {
                background-color: ${tokens.colors[appearance][purpose].active};
                border-color: ${tokens.colors[appearance][purpose].active_border};
                ${appearance === 'ghost' && css`
                    color: ${tokens.colors[appearance][purpose].active_text};
                    box-shadow: 0 0 0 1px ${tokens.colors[appearance][purpose].active_border};
                `
                }
            }
        `
        : css`
            &:hover {
                color: ${tokens.colors.borderless[purpose].hover};
                text-decoration-color: ${tokens.colors.borderless[purpose].hover};
                ${(!label && Icon) && css`
                    border-color: ${tokens.colors.borderless[purpose].justIcon.hover_border};
                    box-shadow: 0 0 0 1px ${tokens.colors.borderless[purpose].justIcon.hover_border};
                `}
            }
            &:active {
                color: ${tokens.colors.borderless[purpose].active};
                text-decoration-color: ${tokens.colors.borderless[purpose].active};
                ${(!label && Icon) && css`
                    border-color: ${tokens.colors.borderless[purpose].justIcon.active_border};
                    box-shadow: 0 0 0 1px ${tokens.colors.borderless[purpose].justIcon.active_border};
                `}
            }
        `
        }
    `;
}

type ButtonContentProps = {
    purpose: ButtonPurpose;
    appearance: Appearance;
    size: Size;
    label?: string;
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    iconPosition?: IconPosition
}

const ButtonContent = styled.span<ButtonContentProps>`
    display: flex;
    align-items: center;
    position: relative;
    transition: background-color 0.2s, text-decoration-color 0.2s, box-shadow 0.2s, border-color 0.2s, color 0.2s;
    ${({label, purpose, appearance, Icon}) => buttonContentStyle(purpose, appearance, label, Icon)}

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
    width: fit-content;

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

export type ButtonPurpose = 'primary' | 'secondary' | 'danger';
type Size = 'small' | 'medium' | 'large';
type Appearance = 'filled' | 'ghost' | 'rounded' | 'borderless';
type IconPosition = 'left' | 'right';

export type ButtonProps = {
    size?: Size;
    label?: string;
    disabled?: boolean;
    purpose?: ButtonPurpose;
    iconPosition?: IconPosition;
    appearance?: Appearance;
    href?: string;
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({label, disabled, purpose = 'primary', size = 'medium', iconPosition, appearance = 'filled', href, loading, className, style, Icon, ...rest}, ref) => {

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
            appearance,
            purpose,
            label,
            size,
            Icon,
            tabIndex: -1,
            className,
            style
        }

    const iconElement = (className = '') =>  Icon && <InlineIconWrapper Icon={Icon} className={className}  />;

        return (
            <ButtonWrapper {...wrapperProps}>
                <ButtonContent {...contentProps}>
                    {/* { loading && <Spinner inline width={1} unit='em' /> } */}
                    { loading ? <Spinner inline width={1} unit='em' /> :
                    (!label && Icon)  ?
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