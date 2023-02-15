import { forwardRef } from 'react';
import styled from 'styled-components';
import { descriptionListTokens as tokens } from './DescriptionList.tokens';
import { Property } from 'csstype';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

type StyledGroupProps = Pick<DescriptionListGroupProps, 'margin' | 'minWidth' | 'maxWidth'>;

const DListGroup = styled.div<StyledGroupProps>`
  margin: ${({ margin }) => (margin ? margin : tokens.group.base.margin)};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth}`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`}
`;

export type DescriptionListGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Custom margin. */
    margin?: Property.Margin<string>;
    /**Custom min-width. */
    minWidth?: Property.MinWidth<string>;
    /**Custom max-width. */
    maxWidth?: Property.MaxWidth<string>;
  }
>;

export const DescriptionListGroup = forwardRef<
  HTMLDivElement,
  DescriptionListGroupProps
>((props, ref) => {
  const { children, margin, minWidth, maxWidth, id, className, htmlProps, ...rest } =
    props;

  const dListGroupProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    children,
    ref,
    margin,
    minWidth,
    maxWidth
  };

  return <DListGroup {...dListGroupProps}>{children}</DListGroup>;
});
