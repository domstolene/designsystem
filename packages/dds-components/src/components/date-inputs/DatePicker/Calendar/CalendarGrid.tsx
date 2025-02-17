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
  const { locale } = useLocale();
  const {
    gridProps: { onKeyDown, ...gridProps },
    headerProps,
  } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
  const weekDays = ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'];

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
            <th className={cn(...typographyCn)}>
              # <VisuallyHidden as="span">Ukenummer</VisuallyHidden>
            </th>
          )}
          {weekDays.map((day, index) => (
            <th key={index} className={cn(...typographyCn)}>
              {day}
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
