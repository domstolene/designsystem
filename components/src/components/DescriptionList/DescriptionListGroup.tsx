import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { descriptionListGroupTokens as tokens } from './DescriptionListGroup.tokens';
import { Property } from 'csstype';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

type StyledGroupProps = Pick<DescriptionListGroupProps, 'margin'>;

const DListGroup = styled.div<StyledGroupProps>`
  ${tokens.base}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export type DescriptionListGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Custom margin. */
    margin?: Property.Margin<string>;
  }
>;

export const DescriptionListGroup = forwardRef<
  HTMLDivElement,
  DescriptionListGroupProps
>((props, ref) => {
  const { children, margin, id, className, htmlProps, ...rest } = props;

  const dListGroupProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    children,
    ref,
    margin
  };

  return <DListGroup {...dListGroupProps}>{children}</DListGroup>;
});
