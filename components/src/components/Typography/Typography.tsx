import {
  forwardRef,
  HTMLAttributes,
  ElementType,
  AnchorHTMLAttributes
} from 'react';
import styled, { css } from 'styled-components';
import { typographyTokens as tokens, textColors } from './typographyTokens';
import { IconWrapper } from '../../helpers/IconWrapper';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';

export type TypographyType =
  | 'a'
  | 'headingSans01'
  | 'headingSans02'
  | 'headingSans03'
  | 'headingSans04'
  | 'headingSans05'
  | 'headingSans06'
  | 'headingSans07'
  | 'headingSans08'
  | 'bodySans01'
  | 'bodySans02'
  | 'bodySans03'
  | 'bodySans04'
  | 'bodySerif01'
  | 'bodySerif02'
  | 'bodySerif03'
  | 'bodySerif04'
  | 'leadSans01'
  | 'leadSans02'
  | 'leadSans03'
  | 'leadSans04'
  | 'leadSans05'
  | 'supportingStyleLabel01'
  | 'supportingStyleInputText01'
  | 'supportingStyleInputText02'
  | 'supportingStyleInputText03'
  | 'supportingStyleHelperText01'
  | 'supportingStylePlaceholderText01'
  | 'supportingStyleTiny01';

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
      return 'h1';
    case 'headingSans07':
      return 'h1';
    case 'headingSans08':
      return 'h1';
    case 'bodySans01':
      return 'p';
    case 'bodySans02':
      return 'p';
    case 'bodySans03':
      return 'p';
    case 'bodySans04':
      return 'p';
    case 'bodySerif01':
      return 'p';
    case 'bodySerif02':
      return 'p';
    case 'bodySerif03':
      return 'p';
    case 'bodySerif04':
      return 'p';
    case 'leadSans01':
      return 'p';
    case 'leadSans02':
      return 'p';
    case 'leadSans03':
      return 'p';
    case 'leadSans04':
      return 'p';
    case 'leadSans05':
      return 'p';
    case 'supportingStyleLabel01':
      return 'label';
    case 'supportingStyleInputText01':
      return 'p';
    case 'supportingStyleInputText02':
      return 'p';
    case 'supportingStyleInputText03':
      return 'p';
    case 'supportingStyleHelperText01':
      return 'p';
    case 'supportingStylePlaceholderText01':
      return 'p';
    case 'supportingStyleTiny01':
      return 'p';
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
    &::selection {
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
  | 'success';

export type TypographyProps = {
  typographyType?: TypographyType;
  as?: ElementType;
  externalLink?: boolean;
  color?: TextColor | string;
  bold?: boolean;
  italic?: boolean;
  withMargins?: boolean;
  target?: string;
} & (HTMLAttributes<HTMLElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      typographyType = 'bodySans02',
      as: propAs,
      externalLink,
      target,
      bold,
      children,
      ...rest
    },
    ref
  ) => {
    const as = propAs ? propAs : getElementType(typographyType as string);

    const typographyProps = {
      typographyType,
      bold,
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
