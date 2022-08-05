import { RefObject, useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { scrollbarTokens as tokens } from './Scrollbar.tokens';

const ScrollbarOuterWrapper = styled.div``;

const ScrollbarElements = styled.div`
  display: block;
  height: 100%;
  position: relative;
`;

const Track = styled.div`
  bottom: 0;
  top: 0;
  position: absolute;

  ${tokens.track.base}
`;

type ThumbProps = {
  height: number;
  top: number;
};

const Thumb = styled.div<ThumbProps>`
  position: absolute;

  height: ${({ height }) => height}px;
  top: ${({ top }) => top}px;
  ${tokens.thumb.base}
`;

export type ScrollbarProps = BaseComponentProps<
  HTMLDivElement,
  { contentRef?: RefObject<HTMLDivElement> }
>;

export const Scrollbar = (props: ScrollbarProps) => {
  const { id, className, htmlProps, contentRef, ...rest } = props;
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [isScrollable, setIsScrollable] = useState(false);
  const [thumbTop, setThumbTop] = useState<number>(0);
  const observer = useRef<ResizeObserver | null>(null);
  const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
  const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  function handleResize(ref: HTMLDivElement, trackSize: number) {
    const { clientHeight, scrollHeight } = ref;
    setIsScrollable(clientHeight !== scrollHeight);
    setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
  }

  const handleTrackClick = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      if (contentRef && contentRef.current) {
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
            clickRatio * contentCurrent.scrollHeight
          );
          contentCurrent.scrollTo({
            top: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    },
    [thumbHeight]
  );

  const handleThumbPositioning = useCallback(() => {
    console.log('thumb positioning');
    if (!contentRef?.current || !trackRef.current || !thumbRef.current) {
      return;
    }
    const { scrollTop: contentTop, scrollHeight: contentHeight } =
      contentRef.current;
    const { clientHeight } = trackRef.current;
    let newTop = (+contentTop / +contentHeight) * clientHeight;
    newTop = Math.min(newTop, clientHeight - thumbHeight);
    setThumbTop(newTop);
    // const thumb = thumbRef.current;
    // thumb.style.top = `${newTop}px`;
  }, []);

  useEffect(() => {
    if (contentRef && contentRef.current && trackRef.current) {
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

  const handleThumbMousedown = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentRef && contentRef.current)
      setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }, []);

  const handleThumbMouseup = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
    },
    [isDragging]
  );

  const handleThumbMousemove = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      if (contentRef && contentRef.current) {
        if (isDragging) {
          const {
            scrollHeight: contentScrollHeight,
            offsetHeight: contentOffsetHeight
          } = contentRef.current;

          const deltaY =
            (e.clientY - scrollStartPosition) *
            (contentOffsetHeight / thumbHeight);
          const newScrollTop = Math.min(
            initialScrollTop + deltaY,
            contentScrollHeight - contentOffsetHeight
          );

          contentRef.current.scrollTop = newScrollTop;
        }
      }
    },
    [isDragging, scrollStartPosition, thumbHeight]
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

  return (
    <ScrollbarOuterWrapper
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
    >
      <ScrollbarElements>
        <Track ref={trackRef} onClick={handleTrackClick} />
        <Thumb
          height={thumbHeight}
          top={thumbTop}
          ref={thumbRef}
          onMouseDown={handleThumbMousedown}
        />
      </ScrollbarElements>
    </ScrollbarOuterWrapper>
  );
  //   return isScrollable ? (
  //     <ScrollbarOuterWrapper
  //       {...getBaseHTMLProps(id, className, htmlProps, rest)}
  //     >
  //       <ScrollbarElements>
  //         <Track ref={trackRef}></Track>
  //         <Thumb height={thumbHeight} top={thumbTop} ref={thumbRef}></Thumb>
  //       </ScrollbarElements>
  //     </ScrollbarOuterWrapper>
  //   ) : null;
};
