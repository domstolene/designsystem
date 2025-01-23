import {
  type HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './Table.module.css';
import { cn } from '../../../utils';
import { scrollbar } from '../../helpers/styling/utilStyles.module.css';
import { ThemeContext } from '../../ThemeProvider';

export type TableWrapperProps = HTMLAttributes<HTMLDivElement>;

export const TableWrapper = ({ className, ...rest }: TableWrapperProps) => {
  const themeContext = useContext(ThemeContext);
  const container = themeContext?.el;
  const containerWidth = container ? container.clientWidth : 0;

  const [overflowX, setOverflowX] = useState(false);
  const [themeContainerWidth, setThemeContainerWidth] =
    useState(containerWidth);

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
  }, [themeContainerWidth]);

  useEffect(() => {
    function handleResize() {
      setThemeContainerWidth(containerWidth);
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
