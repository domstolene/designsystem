import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledHead = styled.thead``;

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const Head = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledHead ref={ref} {...rest}>
        {children}
      </StyledHead>
    );
  },
);

Head.displayName = 'Table.Head';
