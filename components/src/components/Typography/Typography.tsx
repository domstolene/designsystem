import {
  forwardRef,
  HTMLAttributes,
  ElementType,
  AnchorHTMLAttributes,
  LabelHTMLAttributes
} from 'react';
import styled, { css } from 'styled-components';
import { typographyTokens as tokens, textColors } from './Typography.tokens';
import { IconWrapper } from '../../helpers/IconWrapper';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { TypographyType } from './Typography.types';

const getElementType = (element: string): ElementType => {
  switch (element) {
    case 'a':
      return element;
    case 'headingSans01':
      return 'h6';
    case 'headingSans02':
      return 'h5';
    case 'headingSans03':
      return 'h4';
    case 'headingSans04':
      return 'h3';
    case 'headingSans05':
      return 'h2';
    case 'headingSans06':
    case 'headingSans07':
    case 'headingSans08':
      return 'h1';
    case 'supportingStyleLabel01':
      return 'label';
    case 'bodySans01':
    case 'bodySans02':
    case 'bodySans03':
    case 'bodySans04':
    case 'bodySerif01':
    case 'bodySerif02':
    case 'bodySerif03':
    case 'bodySerif04':
    case 'leadSans01':
    case 'leadSans02':
    case 'leadSans03':
    case 'leadSans04':
    case 'leadSans05':
    case 'supportingStyleInputText01':
    case 'supportingStyleInputText02':
    case 'supportingStyleInputText03':
    case 'supportingStyleHelperText01':
    case 'supportingStylePlaceholderText01':
    case 'supportingStyleTiny01':
    default:
      return 'p';
  }
};

const getColor = (color: TextColor): string => {
  return typeof textColors[color] === 'undefined' ? color : textColors[color];
};

const getElementStyling = (type: TypographyType) => {
  return css`
    ${tokens.typographyType[type].base}
    &::selection, *::selection {
      ${tokens.selection.base}
    }
  `;
};

type StyledTypographyProps = {
  typographyType?: TypographyType;
  color?: TextColor;
  bold?: boolean;
  italic?: boolean;
  withMargins?: boolean;
};

const LinkIconWrapper = styled(IconWrapper)`
  ${tokens.typographyType.a.icon}
`;

const StyledTypography = styled.p<StyledTypographyProps>`
  ${({ typographyType }) => typographyType && getElementStyling(typographyType)}
  ${({ typographyType }) =>
    typographyType === 'a' &&
    css`
      display: inline-flex;
      align-items: center;

      &:hover {
        ${tokens.typographyType[typographyType].hover.base}
      }
      &:focus-visible {
        ${tokens.typographyType[typographyType].focus.base}
      }
      &:focus-visible::selection {
        ${tokens.typographyType[typographyType].focus.base}
      }
    `}

    ${({ withMargins, typographyType }) =>
    withMargins && typographyType
      ? css`
          ${tokens.typographyType[typographyType].margins.base}
        `
      : css`
          margin: 0;
        `}

    ${({ color }) =>
    color &&
    css`
      color: ${getColor(color)};
    `}
          ${({ bold }) =>
    bold &&
    css`
      ${tokens.style.bold.base}
    `}
          ${({ italic }) =>
    italic &&
    css`
      ${tokens.style.italic.base}
    `}
`;

export type TextColor =
  | 'interactive'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'onLight'
  | 'onDark'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'gray7'
  | 'gray8'
  | 'gray9';

export type TypographyProps = {
  typographyType?: TypographyType;
  as?: ElementType;
  externalLink?: boolean;
  color?: TextColor | string;
  bold?: boolean;
  italic?: boolean;
  withMargins?: boolean;
  target?: string;
} & (
  | HTMLAttributes<HTMLElement>
  | LabelHTMLAttributes<HTMLLabelElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      typographyType = 'bodySans02',
      as: propAs,
      externalLink,
      target,
      children,
      ...rest
    },
    ref
  ) => {
    const as = propAs ? propAs : getElementType(typographyType as string);

    const typographyProps = {
      typographyType,
      as,
      rel: as === 'a' ? 'noopener noreferer' : undefined,
      target: as !== 'a' ? undefined : externalLink ? '_blank' : target,
      ...rest
    };

    return (
      <StyledTypography ref={ref} {...typographyProps}>
        {children}{' '}
        {as === 'a' && externalLink ? (
          <LinkIconWrapper Icon={LaunchOutlinedIcon} iconSize="inline" />
        ) : (
          ''
        )}
      </StyledTypography>
    );
  }
);
