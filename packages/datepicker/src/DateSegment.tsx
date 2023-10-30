import { useRef } from 'react';
import { useDateSegment } from '@react-aria/datepicker';
import type {
  DateSegment as DateSegmentType,
  DateFieldState,
} from '@react-stately/datepicker';
import styled from 'styled-components';

import { datepickerTokens } from './Datepicker.tokens';
const {
  datefield: { segment: segmentTokens },
} = datepickerTokens;

interface DateSegmentProps {
  segment: DateSegmentType;
  state: DateFieldState;
}

const Segment = styled.div`
  display: block;
  width: max-content;
  font-variant-numeric: tabular-nums;
  outline: none;
  padding: ${segmentTokens.padding.y} ${segmentTokens.padding.x};
  font-family: ${segmentTokens.font.fontFamily};
  font-size: ${segmentTokens.font.fontSize};
  font-style: ${segmentTokens.font.fontStyle};
  font-weight: ${segmentTokens.font.fontWeight};
  line-height: ${segmentTokens.font.lineHeight};

  &:focus {
    background-color: ${segmentTokens.focus.backgroundColor};
    color: ${segmentTokens.focus.textColor};
  }
`;

const SegmentPlaceholder = styled.span`
  display: block;
  width: 100%;
  font-variant-numeric: tabular-nums;

  font-family: ${segmentTokens.placeholder.fontFamily};
  font-size: ${segmentTokens.placeholder.fontSize};
  font-style: ${segmentTokens.placeholder.fontStyle};
  font-weight: ${segmentTokens.placeholder.fontWeight};
  line-height: ${segmentTokens.placeholder.lineHeight};
  color: ${segmentTokens.placeholder.textColor};

  ${Segment}:focus & {
    color: ${segmentTokens.focus.textColor};
  }
`;

export function DateSegment({ segment, state }: DateSegmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <Segment
      {...segmentProps}
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
