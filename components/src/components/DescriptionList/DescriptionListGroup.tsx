import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { descriptionListGroupTokens as tokens } from './DescriptionListGroup.tokens';
import * as CSS from 'csstype';

type StyledGroupProps = Pick<DescriptionListGroupProps, 'margin'>;

const DListGroup = styled.div<StyledGroupProps>`
  ${tokens.base}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export type DescriptionListGroupProps = {
  /**Custom margin. */
  margin?: CSS.Property.Margin<string>;
} & HTMLAttributes<HTMLDivElement>;

export const DescriptionListGroup = forwardRef<
  HTMLDivElement,
  DescriptionListGroupProps
>(({ children, ...rest }, ref) => {
  const dListGroupProps = {
    children,
    ref,
    ...rest
  };

  return <DListGroup {...dListGroupProps}>{children}</DListGroup>;
});
