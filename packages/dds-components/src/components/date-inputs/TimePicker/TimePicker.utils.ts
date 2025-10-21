import { type DateSegment } from '@react-stately/datepicker';

// Formaterer klokkeslett-segmenter til norsk locale
export function formatTimeSegments(
  segments: Array<DateSegment>,
): Array<DateSegment> {
  const hourSegment = segments.find(segment => segment.type === 'hour');
  const minuteSegment = segments.find(segment => segment.type === 'minute');
  const separatorSegment = segments.find(
    segment =>
      segment.type === 'literal' && segment.isPlaceholder === undefined,
  );

  if (!hourSegment || !minuteSegment || !separatorSegment) {
    throw new Error('Invalid time segments');
  }

  const formattedHourSegment = {
    ...hourSegment,
    text: hourSegment.text.padStart(2, '0'),
    placeholder: '––',
  };

  const formattedMinuteSegment = {
    ...minuteSegment,
    text: minuteSegment.text.padStart(2, '0'),
    placeholder: '––',
  };

  const formattedSeparatorSegment = { ...separatorSegment, text: ':' };

  return [
    formattedHourSegment,
    formattedSeparatorSegment,
    formattedMinuteSegment,
  ];
}
