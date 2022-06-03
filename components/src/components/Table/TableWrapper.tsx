import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { scrollbarStyling } from '../../helpers/styling';

const Wrapper = styled.div<{ overflowX: boolean }>`
  ${({ overflowX }) =>
    overflowX &&
    css`
      overflow-x: auto;
    `}
  ${scrollbarStyling}
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
    if (
      wrapperRef &&
      wrapperRef.current &&
      isOverflowingX(wrapperRef.current)
    ) {
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

  const wrapperProps = {
    ref: wrapperRef,
    overflowX,
    ...rest
  };

  return <Wrapper {...wrapperProps}>{children}</Wrapper>;
};
