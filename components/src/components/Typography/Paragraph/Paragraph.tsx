import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { getTextColor, TextColor } from '../../../utils';
import {
  StaticTypographyProps,
  StaticTypographyType,
} from '../Typography/Typography.types';
import { typographyTokens as tokens } from '../Typography.tokens';
import { getMarginStyling, getAdditionalFontStyle } from '../Typography.utils';

type StyledParagraphProps = {
  typographyType: StaticTypographyType;
  color?: TextColor;
  withMargins?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

const StyledParagraph = styled.p<StyledParagraphProps>`
  ${({ typographyType, withMargins }) =>
    css`
      color: ${tokens.typographyType[typographyType].base.color};
      ${tokens.typographyType[typographyType].base.font};
      ${getMarginStyling(typographyType, 'p', withMargins)}
    `}
  color: ${({ color }) => color && getTextColor(color)};
  ${({ bold, italic, underline }) =>
    getAdditionalFontStyle(bold, italic, underline)};
`;

export type ParagraphProps = BaseComponentPropsWithChildren<
  HTMLParagraphElement,
  StaticTypographyProps
>;

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    const {
      id,
      className,
      htmlProps,
      children,
      typographyType = 'bodySans02',
      color,
      ...rest
    } = props;

    const pagagraphProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      typographyType,
      color,
      ref,
    };

    return <StyledParagraph {...pagagraphProps}> {children} </StyledParagraph>;
  }
);
