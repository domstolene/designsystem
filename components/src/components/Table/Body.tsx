import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledBody = styled.tbody``;

export type BodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const Body = forwardRef<HTMLTableSectionElement, BodyProps>(
  ({ children, ...rest }, ref) => {
    const bodyProps = {
      ...rest
    };

    return (
      <StyledBody ref={ref} {...bodyProps}>
        {children}
      </StyledBody>
    );
  }
);
