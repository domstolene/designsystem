import { type DateSegment } from '@react-stately/datepicker';

import { useTranslation } from '../../../../i18n';
import { createTexts } from '../../../../i18n';

// Formaterer dato-segmenter til norsk locale
export function formatDateFieldSegments(
  segments: Array<DateSegment>,
): Array<DateSegment> {
  const { t } = useTranslation();
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
    placeholder: t(texts.dayPlaceholder),
  };

  const formattedMonthSegment = {
    ...monthSegment,
    text: monthSegment.text.padStart(2, '0'),
    placeholder: t(texts.monthPlaceholder),
  };

  const formattedYearSegment = {
    ...yearSegment,
    placeholder: t(texts.yearPlaceholder),
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

export const texts = createTexts({
  dayPlaceholder: {
    nb: 'dd',
    no: 'dd',
    nn: 'dd',
    en: 'dd',
    se: 'jj',
  },
  monthPlaceholder: {
    nb: 'mm',
    no: 'mm',
    nn: 'mm',
    en: 'mm',
    se: 'mm',
  },
  yearPlaceholder: {
    nb: 'åååå',
    no: 'åååå',
    nn: 'åååå',
    en: 'yyyy',
    se: 'jjjj',
  },
});
