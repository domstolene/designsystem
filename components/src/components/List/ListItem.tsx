import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { listItemTokens as tokens } from './ListItem.tokens';

const StyledListItem = styled.li`
  ${tokens.base}
`;

export type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledListItem ref={ref} {...rest}>
        {children}
      </StyledListItem>
    );
  }
);
