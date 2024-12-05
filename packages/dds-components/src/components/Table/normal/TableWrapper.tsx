import { type HTMLAttributes, useEffect, useRef, useState } from 'react';

import styles from './Table.module.css';
import { cn } from '../../../utils';
import { scrollbar } from '../../helpers/styling/utilStyles.module.css';

export type TableWrapperProps = HTMLAttributes<HTMLDivElement>;

export const TableWrapper = ({ className, ...rest }: TableWrapperProps) => {
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
    <div
      ref={wrapperRef}
      {...rest}
      className={cn(
        className,
        scrollbar,
        styles.wrapper,
        overflowX && styles['wrapper--scrollable'],
      )}
    />
  );
};

TableWrapper.displayName = 'Table.Wrapper';
