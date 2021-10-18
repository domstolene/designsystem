import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledHead = styled.thead``;

export type HeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const Head = forwardRef<HTMLTableSectionElement, HeadProps>(
  ({ children, ...rest }, ref) => {
    const headProps = {
      ...rest
    };

    return (
      <StyledHead ref={ref} {...headProps}>
        {children}
      </StyledHead>
    );
  }
);
