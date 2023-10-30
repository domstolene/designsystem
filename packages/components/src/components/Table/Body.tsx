import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledBody = styled.tbody``;

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const Body = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...rest }, ref) => {
    const bodyProps = {
      ...rest,
    };

    return (
      <StyledBody ref={ref} {...bodyProps}>
        {children}
      </StyledBody>
    );
  },
);

Body.displayName = 'Table.Body';
