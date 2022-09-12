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

type StyledLabelProps = {
  typographyType: StaticTypographyType;
  color?: TextColor;
  withMargins?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

const StyledLabel = styled.label<StyledLabelProps>`
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

export type LabelProps = BaseComponentPropsWithChildren<
  HTMLLabelElement,
  StaticTypographyProps
>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const {
    id,
    className,
    htmlProps,
    children,
    typographyType = 'supportingStyleLabel01',
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

  return <StyledLabel {...labelProps}> {children} </StyledLabel>;
});
