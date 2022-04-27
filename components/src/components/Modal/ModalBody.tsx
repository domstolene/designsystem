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
      &:focus-visible, &.focus-visible {
        ${tokens.bodyScrollable.focus.base}
      }
    `}
`;

export type ModalBodyProps = {
  scrollable?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, scrollable, ...rest }, ref) => {
    const containerProps = {
      ref,
      tabIndex: scrollable ? 0 : undefined,
      scrollable,
      ...rest
    };

    return <Container {...containerProps}>{children}</Container>;
  }
);
