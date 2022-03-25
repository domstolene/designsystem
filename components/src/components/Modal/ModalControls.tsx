import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { modalTokens as tokens } from './Modal.tokens';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, fit-content(100%));
  ${tokens.controlsContainer.base}
`;

export type ModalControlsProps = {} & HTMLAttributes<HTMLDivElement>;

export const ModalControls = forwardRef<HTMLDivElement, ModalControlsProps>(
  ({ children, ...rest }, ref) => {
    const containerProps = {
      ref,
      ...rest
    };

    return <Container {...containerProps}>{children}</Container>;
  }
);
