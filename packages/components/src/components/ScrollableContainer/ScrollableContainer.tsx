import { useRef } from 'react';
import styled from 'styled-components';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { Scrollbar } from './Scrollbar';
import { Property } from 'csstype';
import { scrollbarTokens as tokens } from './ScrollableContainer.tokens';
import {
  focusVisibleTransitionValue,
  focusVisible,
} from '@norges-domstoler/dds-form';

const { track, content, outerContainer } = tokens;

const StyledScrollableContainer = styled.div`
  grid-template: auto / 1fr ${track.width};
  overflow: hidden;
  position: relative;
  display: grid;
  padding: ${outerContainer.padding};
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
  @media (prefers-reduced-motion: no-preference) {
    transition: ${focusVisibleTransitionValue};
  }
  :focus-visible,
  .focus-visible {
    outline: ${focusVisible.outline};
    outline-offset: ${focusVisible.outlineOffset};
  }
`;

export type ScrollableContainerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Høyde på innholdscontainer. */
    contentHeight?: Property.Height;
  }
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
      <Content height={contentHeight} ref={ref} tabIndex={0}>
        {children}
      </Content>
      <Scrollbar contentRef={ref} />
    </StyledScrollableContainer>
  );
};

ScrollableContainer.displayName = 'ScrollableContainer';
