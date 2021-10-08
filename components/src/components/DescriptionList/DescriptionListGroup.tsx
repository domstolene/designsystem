import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { descriptionListGroupTokens as tokens } from './DescriptionListGroup.tokens';

const DListGroup = styled.div`
  ${tokens.base}
`;

export type DescriptionListGroupProps = {} & HTMLAttributes<HTMLDivElement>;

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
