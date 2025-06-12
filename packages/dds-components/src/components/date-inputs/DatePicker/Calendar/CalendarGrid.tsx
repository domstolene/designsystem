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
import { createTexts, useTranslation } from '../../../../i18n';
import { cn } from '../../../../utils';
import typographyStyles from '../../../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../../../VisuallyHidden';
import styles from '../../common/DateInput.module.css';
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

  const typographyCn = [
    typographyStyles['body-xsmall'],
    typographyStyles['text-color--subtle'],
  ];
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
    >
      <thead {...headerProps}>
        <tr>
          {showWeekNumbers && (
            <th
              className={cn(styles['calendar__grid-element'], ...typographyCn)}
            >
              <span aria-hidden>#</span>
              <VisuallyHidden>{t(texts.weekNumber)}</VisuallyHidden>
            </th>
          )}
          {weekDays.map((day, index) => (
            <th key={index} className={cn(...typographyCn)}>
              <span aria-hidden>{day.short}</span>
              <VisuallyHidden>{day.full}</VisuallyHidden>
            </th>
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
                <td
                  className={cn(
                    styles['calendar__grid-element'],
                    styles['calendar__week-number'],
                    ...typographyCn,
                  )}
                >
                  {weekNumber}
                </td>
              )}
              {datesInWeek.map((date, i) =>
                date ? (
                  <CalendarCell
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
  },
  mo: {
    nb: 'Ma',
    no: 'Ma',
    nn: 'Må',
    en: 'Mo',
  },
  tu: {
    nb: 'Ti',
    no: 'Ti',
    nn: 'Ty',
    en: 'Tu',
  },
  we: {
    nb: 'On',
    no: 'On',
    nn: 'On',
    en: 'We',
  },
  th: {
    nb: 'To',
    no: 'To',
    nn: 'To',
    en: 'Th',
  },
  fr: {
    nb: 'Fr',
    no: 'Fr',
    nn: 'Fr',
    en: 'Fr',
  },
  sa: {
    nb: 'Lø',
    no: 'Lø',
    nn: 'La',
    en: 'Sa',
  },
  su: {
    nb: 'Sø',
    no: 'Sø',
    nn: 'Su',
    en: 'Su',
  },
  monday: {
    nb: 'Mandag',
    no: 'Mandag',
    nn: 'Måndag',
    en: 'Monday',
  },
  tuesday: {
    nb: 'Tirsdag',
    no: 'Tirsdag',
    nn: 'Tysdag',
    en: 'Tuesday',
  },
  wednesday: {
    nb: 'Onsdag',
    no: 'Onsdag',
    nn: 'Onsdag',
    en: 'Wednesday',
  },
  thursday: {
    nb: 'Torsdag',
    no: 'Torsdag',
    nn: 'Torsdag',
    en: 'Thursday',
  },
  friday: {
    nb: 'Fredag',
    no: 'Fredag',
    nn: 'Fredag',
    en: 'Friday',
  },
  saturday: {
    nb: 'Lørdag',
    no: 'Lørdag',
    nn: 'Laurdag',
    en: 'Saturday',
  },
  sunday: {
    nb: 'Søndag',
    no: 'Søndag',
    nn: 'Sundag',
    en: 'Sunday',
  },
});
