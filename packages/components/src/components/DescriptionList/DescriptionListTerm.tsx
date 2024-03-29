import { type HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

const DListTerm = styled.dt``;

export type DescriptionListTermProps = HTMLAttributes<HTMLElement>;

export const DescriptionListTerm = forwardRef<
  HTMLElement,
  DescriptionListTermProps
>(({ children, ...rest }, ref) => {
  const dListTermProps = {
    ref,
    ...rest,
  };

  return <DListTerm {...dListTermProps}>{children}</DListTerm>;
});

DescriptionListTerm.displayName = 'DescriptionListTerm';
