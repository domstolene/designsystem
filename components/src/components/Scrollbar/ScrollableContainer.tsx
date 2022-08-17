import { useRef } from 'react';
import styled from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { Scrollbar } from './Scrollbar';
import { Property } from 'csstype';
import { scrollbarTokens as tokens } from './Scrollbar.tokens';

const { track, content } = tokens;

const StyledScrollableContainer = styled.div`
  grid-template: auto / 1fr ${track.width};
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
  padding-right: ${content.paddingRight};
`;

export type ScrollableContainerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  { contentHeight?: Property.Height }
>;

export const ScrollableContainer = (props: ScrollableContainerProps) => {
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
    <StyledScrollableContainer
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
    >
      <Content height={contentHeight} ref={ref}>
        {children}
      </Content>
      <Scrollbar contentRef={ref} />
    </StyledScrollableContainer>
  );
};
