import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { modalTokens as tokens } from './Modal.tokens';
import {
  focusVisibleTransitionValue,
  scrollbarStyling,
} from '../../helpers/styling';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

type ContainerProps = {
  scrollable?: boolean;
};

const Container = styled.div<ContainerProps>`
  ${scrollbarStyling}
  transition: ${focusVisibleTransitionValue};
  ${({ scrollable }) =>
    scrollable &&
    css`
      ${tokens.bodyScrollable.base}
      &:focus-visible, &.focus-visible {
        ${tokens.bodyScrollable.focus.base}
      }
    `}
`;

export type ModalBodyProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Gjør at innholdet kan scrolles. Det må eventuelt settes (max)bredde og (max)høyde styling på både denne subkomponenten og `<Modal />`.  */
    scrollable?: boolean;
  }
>;

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  (props, ref) => {
    const { children, scrollable, id, className, htmlProps, ...rest } = props;

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref,
      tabIndex: scrollable ? 0 : undefined,
      scrollable,
    };

    return <Container {...containerProps}>{children}</Container>;
  }
);
