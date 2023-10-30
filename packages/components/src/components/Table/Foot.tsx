import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledFoot = styled.tfoot``;

export type TableFootProps = HTMLAttributes<HTMLTableSectionElement>;

export const Foot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  ({ children, ...rest }, ref) => {
    const footProps = {
      ...rest,
    };

    return (
      <StyledFoot ref={ref} {...footProps}>
        {children}
      </StyledFoot>
    );
  },
);

Foot.displayName = 'Table.Foot';
