import { type DateSegment } from '@react-stately/datepicker';

// Formaterer dato-segmenter til norsk locale
export function formatDateFieldSegments(
  segments: Array<DateSegment>,
): Array<DateSegment> {
  const daySegment = segments.find(segment => segment.type === 'day');
  const monthSegment = segments.find(segment => segment.type === 'month');
  const yearSegment = segments.find(segment => segment.type === 'year');
  const separatorSegment = segments.find(segment => segment.type === 'literal');

  if (!daySegment || !monthSegment || !yearSegment || !separatorSegment) {
    throw new Error('Invalid date field segments');
  }

  const formattedDaySegment = {
    ...daySegment,
    text: daySegment.text.padStart(2, '0'),
    placeholder: 'dd',
  };

  const formattedMonthSegment = {
    ...monthSegment,
    text: monthSegment.text.padStart(2, '0'),
    placeholder: 'mm',
  };

  const formattedYearSegment = {
    ...yearSegment,
    placeholder: 'åååå',
  };

  const formattedSeparatorSegment = { ...separatorSegment, text: '.' };

  return [
    formattedDaySegment,
    formattedSeparatorSegment,
    formattedMonthSegment,
    formattedSeparatorSegment,
    formattedYearSegment,
  ];
}
