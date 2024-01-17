import { createContext, forwardRef, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';

const StyledHead = styled.thead``;

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const Head = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledHead ref={ref} {...rest}>
        <HeadContext.Provider value={true}>{children}</HeadContext.Provider>
      </StyledHead>
    );
  },
);

Head.displayName = 'Table.Head';

const HeadContext = createContext(false);

export function useIsInTableHead(): boolean {
  const isInTableHead = useContext(HeadContext);
  return isInTableHead;
}
