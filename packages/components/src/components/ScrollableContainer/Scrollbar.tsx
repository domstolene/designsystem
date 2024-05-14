import {
  type MouseEvent,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './ScrollableContainer.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';

const minThumbHeightPx = 15;

export type ScrollbarProps = BaseComponentProps<
  HTMLDivElement,
  {
    /** Ref til container med innholdet som skal scrolles. */
    contentRef?: RefObject<HTMLDivElement>;
  }
>;

export const Scrollbar = (props: ScrollbarProps) => {
  const { id, className, htmlProps, contentRef, ...rest } = props;
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(minThumbHeightPx);
  const [isScrollable, setIsScrollable] = useState(true);
  const [thumbTop, setThumbTop] = useState<number>(0);
  const observer = useRef<ResizeObserver | null>(null);
  const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
  const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  function handleResize(ref: HTMLDivElement, trackSize: number) {
    const { clientHeight, scrollHeight } = ref;
    setIsScrollable(clientHeight !== scrollHeight);
    setThumbHeight(
      Math.max((clientHeight / scrollHeight) * trackSize, minThumbHeightPx),
    );
  }

  const handleTrackClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (contentRef?.current) {
        const { current: trackCurrent } = trackRef;
        const { current: contentCurrent } = contentRef;
        if (trackCurrent && contentCurrent) {
          const { clientY } = e;
          const target = e.target as HTMLDivElement;
          const rect = target.getBoundingClientRect();
          const trackTop = rect.top;
          const thumbOffset = -(thumbHeight / 2);
          const clickRatio =
            (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
          const scrollAmount = Math.floor(
            clickRatio * contentCurrent.scrollHeight,
          );
          contentCurrent.scrollTo({
            top: scrollAmount,
            behavior: 'smooth',
          });
        }
      }
    },
    [thumbHeight],
  );

  const handleThumbPositioning = useCallback(() => {
    if (!contentRef?.current || !trackRef.current || !thumbRef.current) {
      return;
    }
    const { scrollTop: contentTop, scrollHeight: contentHeight } =
      contentRef.current;
    const { clientHeight } = trackRef.current;
    let newTop = (+contentTop / +contentHeight) * clientHeight;
    newTop = Math.min(newTop, clientHeight - thumbHeight);
    setThumbTop(newTop);
  }, []);

  useEffect(() => {
    if (contentRef?.current && trackRef.current) {
      const ref = contentRef.current;
      const { clientHeight } = trackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, clientHeight);
      });
      observer.current.observe(ref);
      ref.addEventListener('scroll', handleThumbPositioning);
      return () => {
        observer.current?.unobserve(ref);
        ref.removeEventListener('scroll', handleThumbPositioning);
      };
    }
  }, []);

  const handleThumbMousedown = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setScrollStartPosition(e.clientY);
    if (contentRef?.current) setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }, []);

  const handleThumbMouseup = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  const handleThumbMousemove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (contentRef?.current) {
        if (isDragging) {
          const {
            scrollHeight: contentScrollHeight,
            offsetHeight: contentOffsetHeight,
          } = contentRef.current;

          const deltaY =
            (e.clientY - scrollStartPosition) *
            (contentOffsetHeight / thumbHeight);
          const newScrollTop = Math.min(
            initialScrollTop + deltaY,
            contentScrollHeight - contentOffsetHeight,
          );

          contentRef.current.scrollTop = newScrollTop;
        }
      }
    },
    [isDragging, scrollStartPosition, thumbHeight],
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMousemove);
    document.addEventListener('mouseup', handleThumbMouseup);
    document.addEventListener('mouseleave', handleThumbMouseup);
    return () => {
      document.removeEventListener('mousemove', handleThumbMousemove);
      document.removeEventListener('mouseup', handleThumbMouseup);
      document.removeEventListener('mouseleave', handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup]);

  return isScrollable ? (
    <div {...getBaseHTMLProps(id, className, htmlProps, rest)}>
      <div className={styles.scrollbar}>
        <div
          ref={trackRef}
          onClick={handleTrackClick}
          className={styles.track}
        />
        <div
          style={{
            height: thumbHeight,
            top: thumbTop,
          }}
          ref={thumbRef}
          onMouseDown={handleThumbMousedown}
          className={styles.thumb}
        />
      </div>
    </div>
  ) : null;
};

Scrollbar.displayName = 'Scrollbar';
