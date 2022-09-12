import { ElementType, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { getTextColor, TextColor } from '../../../utils';
import {
  StaticTypographyProps,
  StaticTypographyType,
  TypographyHeadingType,
} from '../Typography/Typography.types';
import { typographyTokens as tokens } from '../Typography.tokens';
import { getMarginStyling, getAdditionalFontStyle } from '../Typography.utils';

const getHeadingElement = (level: HeadingLevel): ElementType => `h${level}`;

const getDefaultTypographyType = (h: ElementType): TypographyHeadingType => {
  switch (h) {
    case 'h1':
      return 'headingSans06';
    case 'h2':
      return 'headingSans05';
    case 'h3':
      return 'headingSans04';
    case 'h4':
      return 'headingSans03';
    case 'h5':
      return 'headingSans02';
    case 'h6':
      return 'headingSans01';
    default:
      return 'headingSans06';
  }
};

type StyledHeadingProps = {
  typographyType: StaticTypographyType;
  as: ElementType;
  color?: TextColor;
  withMargins?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

const StyledHeading = styled.p<StyledHeadingProps>`
  ${({ typographyType, withMargins, as }) =>
    css`
      color: ${tokens.typographyType[typographyType].base.color};
      ${tokens.typographyType[typographyType].base.font};
      ${getMarginStyling(typographyType, as, withMargins)}
    `}
  color: ${({ color }) => color && getTextColor(color)};
  ${({ bold, italic, underline }) =>
    getAdditionalFontStyle(bold, italic, underline)};
`;

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = BaseComponentPropsWithChildren<
  HTMLHeadingElement,
  {
    /**Nivå på overskriften. Komponenten returnerer HTML heading element med dette nivået med default styling. */
    level: HeadingLevel;
  } & StaticTypographyProps
>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      id,
      className,
      htmlProps,
      children,
      typographyType,
      level,
      color,
      ...rest
    } = props;

    const headingElement = getHeadingElement(level);

    const pagagraphProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      typographyType: typographyType
        ? typographyType
        : getDefaultTypographyType(headingElement),
      color,
      as: headingElement,
      ref,
    };

    return <StyledHeading {...pagagraphProps}>{children}</StyledHeading>;
  }
);
