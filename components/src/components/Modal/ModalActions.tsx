import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { modalTokens as tokens } from './Modal.tokens';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${tokens.actionsContainer.base}
`;

export type ModalActionsProps = HTMLAttributes<HTMLDivElement>;

export const ModalActions = forwardRef<HTMLDivElement, ModalActionsProps>(
  ({ children, ...rest }, ref) => {
    const containerProps = {
      ref,
      ...rest
    };

    return <Container {...containerProps}>{children}</Container>;
  }
);
