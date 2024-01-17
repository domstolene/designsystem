import { type HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

import { listTokens as tokens } from './List.tokens';

const StyledListItem = styled.li`
  line-height: ${tokens.listItem.lineHeight};
`;

export type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledListItem ref={ref} {...rest}>
        {children}
      </StyledListItem>
    );
  },
);

ListItem.displayName = 'ListItem';
