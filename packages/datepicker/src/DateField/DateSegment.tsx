import { useRef } from 'react';
import { useDateSegment } from '@react-aria/datepicker';
import type {
  DateSegment as DateSegmentType,
  DateFieldState,
} from '@react-stately/datepicker';
import styled, { css } from 'styled-components';

import { datePickerTokens } from '../DatePicker.tokens';
import { type DatePickerProps } from '../DatePicker';
import { DateValue } from '@react-aria/calendar';
const {
  datefield: { segment: segmentTokens },
} = datePickerTokens;

interface DateSegmentProps
  extends Pick<Required<DatePickerProps<DateValue>>, 'componentSize'> {
  segment: DateSegmentType;
  state: DateFieldState;
}

const Segment = styled.div<Pick<DateSegmentProps, 'componentSize'>>`
  display: block;
  width: max-content;
  font-variant-numeric: tabular-nums;
  outline: none;
  padding: ${segmentTokens.padding.y} ${segmentTokens.padding.x};
  ${({ componentSize }) => css`
    font-family: ${segmentTokens[componentSize].font.fontFamily};
    font-size: ${segmentTokens[componentSize].font.fontSize};
    font-style: ${segmentTokens[componentSize].font.fontStyle};
    font-weight: ${segmentTokens[componentSize].font.fontWeight};
    line-height: ${segmentTokens[componentSize].font.lineHeight};
  `}

  &:focus:not([aria-readonly]) {
    background-color: ${segmentTokens.focus.backgroundColor};
    color: ${segmentTokens.focus.textColor};
  }
`;

const SegmentPlaceholder = styled.span<Pick<DateSegmentProps, 'componentSize'>>`
  display: block;
  width: 100%;
  font-variant-numeric: tabular-nums;

  ${({ componentSize }) => css`
    font-family: ${segmentTokens[componentSize].placeholder.fontFamily};
    font-size: ${segmentTokens[componentSize].placeholder.fontSize};
    font-style: ${segmentTokens[componentSize].placeholder.fontStyle};
    font-weight: ${segmentTokens[componentSize].placeholder.fontWeight};
    line-height: ${segmentTokens[componentSize].placeholder.lineHeight};
    color: ${segmentTokens[componentSize].placeholder.textColor};
  `}

  ${Segment}:focus & {
    color: ${segmentTokens.focus.textColor};
  }
`;

export function DateSegment({
  segment,
  state,
  componentSize,
}: DateSegmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <Segment
      {...segmentProps}
      componentSize={componentSize}
      ref={ref}
      style={{
        ...segmentProps.style,
        minWidth:
          segment.maxValue != null
            ? String(segment.maxValue).length + 'ch'
            : undefined,
      }}
    >
      <SegmentPlaceholder
        aria-hidden="true"
        componentSize={componentSize}
        style={{
          visibility: segment.isPlaceholder ? undefined : 'hidden',
          height: segment.isPlaceholder ? undefined : 0,
          width: segment.isPlaceholder ? undefined : 0,
          pointerEvents: 'none',
        }}
      >
        {segment.placeholder}
      </SegmentPlaceholder>
      {segment.isPlaceholder
        ? ''
        : segment.text.padStart(String(segment.maxValue ?? '').length, '0')}
    </Segment>
  );
}

DateSegment.displayName = 'DateSegment';
