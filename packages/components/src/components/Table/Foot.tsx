import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledFoot = styled.tfoot``;

export type TableFootProps = HTMLAttributes<HTMLTableSectionElement>;

export const Foot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledFoot ref={ref} {...rest}>
        {children}
      </StyledFoot>
    );
  },
);

Foot.displayName = 'Table.Foot';
