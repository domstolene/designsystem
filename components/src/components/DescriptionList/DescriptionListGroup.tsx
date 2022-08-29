import { forwardRef } from 'react';
import styled from 'styled-components';
import { descriptionListTokens as tokens } from './DescriptionList.tokens';
import { Property } from 'csstype';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

type StyledGroupProps = Pick<DescriptionListGroupProps, 'margin'>;

const DListGroup = styled.div<StyledGroupProps>`
  margin: ${({ margin }) => (margin ? margin : tokens.group.base.margin)};
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
    margin,
  };

  return <DListGroup {...dListGroupProps}>{children}</DListGroup>;
});
