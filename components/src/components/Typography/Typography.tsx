import { forwardRef, HTMLAttributes, ElementType, AnchorHTMLAttributes } from "react";
import styled, { css } from 'styled-components';
import { typographyTokens as tokens, textColors } from './typographyTokens';
import InlineIconWrapper from '../../helpers/InlineIconWrapper';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';

export type TypographyType = 'a' | 'p';

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
    typographyType?: TypographyType,
    color?: TextColor
}

const StyledTypography = styled.p<StyledTypographyProps>`
    ${({typographyType}) => typographyType && getElementStyling(typographyType)}
    ${({color}) => color && css` color: ${getColor(color)};`}
    ${({typographyType}) => typographyType === 'a' && css`
        display: inline-flex;
        align-items: center;

        &:hover {
            ${tokens[typographyType].hover}
        }
        &:focus-visible {
            ${tokens[typographyType].focus}
        }
        .DDSLink-icon-wrapper {
            ${tokens[typographyType].icon}
        }
    `}
`;

type TextColor = 'primary' | 'danger' | 'warning' | 'success';

export type TypographyProps = {
    typographyType?: TypographyType,
    as?: ElementType,
    externalLink?: boolean,
    color?: TextColor,
    bold?: boolean,
} & (HTMLAttributes<HTMLElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export const Typography = forwardRef<HTMLElement, TypographyProps>(
    ({ typographyType = 'p', as: propAs, externalLink, bold, children, ...rest }, ref) => {

        const as = propAs ? propAs : getElementType(typographyType as string);

        const typographyProps = {
            typographyType,
            bold,
            as,
            rel: as === 'a' ? 'noopener noreferer' : undefined,
            target: (as === 'a' && externalLink) ? '_blank' : undefined,
            ...rest
        }

        return (
            <StyledTypography
                ref={ref}
                {...typographyProps}
            >
                {children} {as === 'a' && externalLink ? <InlineIconWrapper className='DDSLink-icon-wrapper' Icon={LaunchOutlinedIcon} /> : '' }
            </StyledTypography>
        );
    }
);

