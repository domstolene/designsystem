import { forwardRef, HTMLAttributes, ElementType, AnchorHTMLAttributes } from "react";
import styled, { css } from 'styled-components';
import { typographyTokens as tokens, textColors } from './typographyTokens';
import InlineIconWrapper from '../../helpers/InlineIconWrapper';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';

type TypographyType = 'a' | 'p';

const getElementType = (element: string): ElementType => {
    switch (element) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
        case 'a':
            return element
        default:
            return 'p'
    }
}

const getColor = (color: TextColor): string => {
    return typeof textColors[color] === 'undefined' ? color : textColors[color];
}

const getElementStyling = (type: TypographyType) => {
    return css`
        ${tokens[type].base}
    `;
}

type StyledTypographyProps = {
    type?: TypographyType,
    color?: TextColor
}

const StyledTypography = styled.p<StyledTypographyProps>`
    ${({type}) => type && getElementStyling(type)}
    ${({color}) => color && css` color: ${getColor(color)};`}
    ${({type}) => type === 'a' && css`
        display: inline-flex;
        align-items: center;

        &:hover {
            ${tokens[type].hover}
        }
        &:focus-visible {
            ${tokens[type].focus}
        }
        .DDSLink-icon-wrapper {
            ${tokens[type].icon}
        }
    `}
`;

type TextColor = 'primary' | 'danger' | 'warning' | 'success';

export type TypographyProps = {
    type?: TypographyType,
    as?: ElementType,
    externalLink?: boolean,
    color?: TextColor,
    bold?: boolean,
} & (HTMLAttributes<HTMLElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export const Typography = forwardRef<HTMLElement, TypographyProps>(
    ({ type = 'p', as: propAs, externalLink, bold, children, ...rest }, ref) => {

        const as = propAs ? propAs : getElementType(type as string);

        const typographyProps = {
            type,
            bold,
            as,
            rel: as === 'a' ? 'noopener noreferer' : undefined,
            target: (as === 'a' && externalLink) ? '_blank' : undefined
        }

        return (
            <StyledTypography
                ref={ref}
                {...typographyProps}
                {...rest}
            >
                {children} {as === 'a' && externalLink ? <InlineIconWrapper className='DDSLink-icon-wrapper' Icon={LaunchOutlinedIcon} /> : '' }
            </StyledTypography>
        );
    }
);

