import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Li = styled.li`
  box-sizing: border-box;
`;

export type InternalHeaderListItemProps = {} & HTMLAttributes<HTMLLIElement>;

export const InternalHeaderListItem = forwardRef<
  HTMLLIElement,
  InternalHeaderListItemProps
>(({ children, ...rest }, ref) => {
  const props = {
    ref,
    ...rest
  };

  return <Li {...props}>{children}</Li>;
});
