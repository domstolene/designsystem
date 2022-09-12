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

type StyledCaptionProps = {
  typographyType: StaticTypographyType;
  color?: TextColor;
  withMargins?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

const StyledCaption = styled.caption<StyledCaptionProps>`
  ${({ typographyType, withMargins }) =>
    css`
      color: ${tokens.typographyType[typographyType].base.color};
      ${tokens.typographyType[typographyType].base.font};
      ${getMarginStyling(typographyType, 'label', withMargins)}
    `}
  color: ${({ color }) => color && getTextColor(color)};
  ${({ bold, italic, underline }) =>
    getAdditionalFontStyle(bold, italic, underline)};
`;

export type CaptionProps = BaseComponentPropsWithChildren<
  HTMLTableCaptionElement,
  StaticTypographyProps
>;

export const Caption = forwardRef<HTMLTableCaptionElement, CaptionProps>(
  (props, ref) => {
    const {
      id,
      className,
      htmlProps,
      children,
      typographyType = 'headingSans03',
      color,
      ...rest
    } = props;

    const labelProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      typographyType,
      color,
      ref,
      ...rest,
    };

    return <StyledCaption {...labelProps}> {children} </StyledCaption>;
  }
);
