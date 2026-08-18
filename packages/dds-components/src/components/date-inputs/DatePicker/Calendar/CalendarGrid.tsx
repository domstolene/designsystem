import { getWeeksInMonth } from '@internationalized/date';
import {
  type AriaCalendarGridProps,
  useCalendarGrid,
} from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import {
  type CalendarState,
  type RangeCalendarState,
} from '@react-stately/calendar';
import { useContext } from 'react';

import { CalendarCell } from './CalendarCell';
import { CalendarDate } from './CalendarDate';
import { createTexts, useTranslation } from '../../../../i18n';
import tgStyles from '../../../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../../../VisuallyHidden';
import { getWeekNumber } from '../../utils/getWeekNumber';
import { CalendarPopoverContext } from '../CalendarPopover';

interface CalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState | RangeCalendarState;
}

export function CalendarGrid({ state, ...props }: CalendarGridProps) {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const {
    gridProps: { onKeyDown, ...gridProps },
    headerProps,
  } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
  const weekDays = [
    { short: t(texts.mo), full: t(texts.monday) },
    { short: t(texts.tu), full: t(texts.tuesday) },
    { short: t(texts.we), full: t(texts.wednesday) },
    { short: t(texts.th), full: t(texts.thursday) },
    { short: t(texts.fr), full: t(texts.friday) },
    { short: t(texts.sa), full: t(texts.saturday) },
    { short: t(texts.su), full: t(texts.sunday) },
  ];

  const { showWeekNumbers, onClose } = useContext(CalendarPopoverContext);
  return (
    <table
      {...gridProps}
      onKeyDown={e => {
        if (
          (e.key === 'Enter' || e.key === ' ') &&
          state.isCellUnavailable(state.focusedDate)
        ) {
          return;
        }

        onKeyDown?.(e);
      }}
      cellPadding="0"
      className={tgStyles['body-short-xsmall']}
    >
      <thead {...headerProps}>
        <tr>
          {showWeekNumbers && (
            <CalendarCell as="th">
              <span aria-hidden>#</span>
              <VisuallyHidden>{t(texts.weekNumber)}</VisuallyHidden>
            </CalendarCell>
          )}
          {weekDays.map((day, index) => (
            <CalendarCell as="th" key={index}>
              <span aria-hidden>{day.short}</span>
              <VisuallyHidden>{day.full}</VisuallyHidden>
            </CalendarCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map(weekIndex => {
          const datesInWeek = state.getDatesInWeek(weekIndex);
          const firstExistingDay = datesInWeek.find(Boolean);
          const weekNumber = firstExistingDay
            ? getWeekNumber(firstExistingDay)
            : '';
          return (
            <tr key={weekIndex}>
              {showWeekNumbers && (
                <CalendarCell as="td">{weekNumber}</CalendarCell>
              )}
              {datesInWeek.map((date, i) =>
                date ? (
                  <CalendarDate
                    key={i}
                    state={state}
                    date={date}
                    onClose={onClose}
                  />
                ) : (
                  <td key={i} />
                ),
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CalendarGrid.displayName = 'CalendarGrid';

const texts = createTexts({
  weekNumber: {
    nb: 'Ukenummer',
    no: 'Ukenummer',
    nn: 'Vekenummer',
    en: 'Week number',
    se: 'Vahkkonummir',
  },
  mo: {
    nb: 'Ma',
    no: 'Ma',
    nn: 'Må',
    en: 'Mo',
    se: 'Vuos',
  },
  tu: {
    nb: 'Ti',
    no: 'Ti',
    nn: 'Ty',
    en: 'Tu',
    se: 'Maŋ',
  },
  we: {
    nb: 'On',
    no: 'On',
    nn: 'On',
    en: 'We',
    se: 'Gask',
  },
  th: {
    nb: 'To',
    no: 'To',
    nn: 'To',
    en: 'Th',
    se: 'Duo',
  },
  fr: {
    nb: 'Fr',
    no: 'Fr',
    nn: 'Fr',
    en: 'Fr',
    se: 'Bea',
  },
  sa: {
    nb: 'Lø',
    no: 'Lø',
    nn: 'La',
    en: 'Sa',
    se: 'Láv',
  },
  su: {
    nb: 'Sø',
    no: 'Sø',
    nn: 'Su',
    en: 'Su',
    se: 'Sotn',
  },
  monday: {
    nb: 'Mandag',
    no: 'Mandag',
    nn: 'Måndag',
    en: 'Monday',
    se: 'Vuossárga',
  },
  tuesday: {
    nb: 'Tirsdag',
    no: 'Tirsdag',
    nn: 'Tysdag',
    en: 'Tuesday',
    se: 'Maŋŋebárga',
  },
  wednesday: {
    nb: 'Onsdag',
    no: 'Onsdag',
    nn: 'Onsdag',
    en: 'Wednesday',
    se: 'Gaskavahkku',
  },
  thursday: {
    nb: 'Torsdag',
    no: 'Torsdag',
    nn: 'Torsdag',
    en: 'Thursday',
    se: 'Duorastat',
  },
  friday: {
    nb: 'Fredag',
    no: 'Fredag',
    nn: 'Fredag',
    en: 'Friday',
    se: 'Bearjadat',
  },
  saturday: {
    nb: 'Lørdag',
    no: 'Lørdag',
    nn: 'Laurdag',
    en: 'Saturday',
    se: 'Lávvardat',
  },
  sunday: {
    nb: 'Søndag',
    no: 'Søndag',
    nn: 'Sundag',
    en: 'Sunday',
    se: 'Sotnabeaivi',
  },
});
