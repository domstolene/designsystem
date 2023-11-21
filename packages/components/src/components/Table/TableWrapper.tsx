import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { scrollbarStyling } from '../ScrollableContainer';

const Wrapper = styled.div<{ $overflowX: boolean }>`
  ${({ $overflowX }) =>
    $overflowX &&
    css`
      overflow-x: auto;
    `}
  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox}
`;

export type TableWrapperProps = HTMLAttributes<HTMLDivElement>;

export const TableWrapper = ({ children, ...rest }: TableWrapperProps) => {
  const [overflowX, setOverflowX] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function isOverflowingX(event: HTMLDivElement): boolean {
    return event.offsetWidth < event.scrollWidth;
  }

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef?.current && isOverflowingX(wrapperRef.current)) {
      setOverflowX(true);
      return;
    }
    setOverflowX(false);
  }, [windowWidth]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <Wrapper $overflowX={overflowX} ref={wrapperRef} {...rest}>
      {children}
    </Wrapper>
  );
};

TableWrapper.displayName = 'Table.Wrapper';
