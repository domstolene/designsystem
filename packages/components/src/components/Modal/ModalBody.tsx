import { forwardRef } from 'react';
import styled from 'styled-components';
import { ScrollableContainer } from '../ScrollableContainer';
import { Property } from 'csstype';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

const Container = styled.div``;

export type ModalBodyProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Gjør at innholdet kan scrolles. Det må eventuelt settes (max)bredde og (max)høyde styling på både denne subkomponenten og `<Modal />`.  */
    scrollable?: boolean;
    /**Høyde på container. */
    height?: Property.Height;
  }
>;

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  (props, ref) => {
    const { children, scrollable, id, className, htmlProps, height, ...rest } =
      props;

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref,
    };

    return scrollable ? (
      <Container {...containerProps}>
        <ScrollableContainer contentHeight={height}>
          {children}
        </ScrollableContainer>
      </Container>
    ) : (
      <Container {...containerProps}>{children}</Container>
    );
  },
);

ModalBody.displayName = 'ModalBody';
