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

type StyledLegendProps = {
  typographyType: StaticTypographyType;
  color?: TextColor;
  withMargins?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

const StyledLegend = styled.legend<StyledLegendProps>`
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

export type LegendProps = BaseComponentPropsWithChildren<
  HTMLLegendElement,
  StaticTypographyProps
>;

export const Legend = forwardRef<HTMLLegendElement, LegendProps>(
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

    return <StyledLegend {...labelProps}> {children} </StyledLegend>;
  }
);
