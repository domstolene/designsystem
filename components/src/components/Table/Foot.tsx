import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledFoot = styled.tfoot``;

export type FootProps = HTMLAttributes<HTMLTableSectionElement>;

export const Foot = forwardRef<HTMLTableSectionElement, FootProps>(
  ({ children, ...rest }, ref) => {
    const footProps = {
      ...rest,
    };

    return (
      <StyledFoot ref={ref} {...footProps}>
        {children}
      </StyledFoot>
    );
  }
);
