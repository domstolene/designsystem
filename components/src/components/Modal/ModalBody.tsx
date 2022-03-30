import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { modalTokens as tokens } from './Modal.tokens';
import scrollbarStyling from '../../helpers/scrollbarStyling';

type ContainerProps = {
  scrollable?: boolean;
};

const Container = styled.div<ContainerProps>`
  ${scrollbarStyling}
  ${({ scrollable }) =>
    scrollable &&
    css`
      ${tokens.bodyScrollable.base}
    `}
`;

export type ModalBodyProps = {
  scrollable?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, ...rest }, ref) => {
    const containerProps = {
      ref,
      ...rest
    };

    return <Container {...containerProps}>{children}</Container>;
  }
);
