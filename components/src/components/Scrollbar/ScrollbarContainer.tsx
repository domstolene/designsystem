import { useRef } from 'react';
import styled from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { Scrollbar } from './Scrollbar';
import { Property } from 'csstype';

const StyledScrollbarContainer = styled.div`
  grid-template: auto / 1fr 50px;
  overflow: hidden;
  position: relative;
  display: grid;
`;

type ContentProps = {
  height: Property.Height;
};

const Content = styled.div<ContentProps>`
  height: ${({ height }) => height};
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export type ScrollbarContainer = BaseComponentPropsWithChildren<
  HTMLDivElement,
  { contentHeight?: Property.Height }
>;

export const ScrollbarContainer = (props: ScrollbarContainer) => {
  const {
    children,
    id,
    className,
    contentHeight = '90vh',
    htmlProps,
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  return (
    <StyledScrollbarContainer
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
    >
      <Content height={contentHeight} ref={ref}>
        {children}
      </Content>
      <Scrollbar contentRef={ref} />
    </StyledScrollbarContainer>
  );
};
