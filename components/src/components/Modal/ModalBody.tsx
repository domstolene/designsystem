import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

export type ModalBodyProps = {} & HTMLAttributes<HTMLDivElement>;

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, ...rest }, ref) => {
    const containerProps = {
      ref,
      ...rest
    };

    return <Container {...containerProps}>{children}</Container>;
  }
);
