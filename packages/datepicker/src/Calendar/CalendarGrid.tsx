import { getWeeksInMonth } from '@internationalized/date';
import { AriaCalendarGridProps, useCalendarGrid } from '@react-aria/calendar';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import styled from 'styled-components';

import { CalendarCell } from './CalendarCell';
import { locale } from '../constants';
import { getWeekNumber } from '../utils/getWeekNumber';
import { calendarTokens } from './Calendar.tokens';

const { grid: gridTokens } = calendarTokens;

interface CalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState | RangeCalendarState;
}

const Th = styled.th`
  font-family: ${gridTokens.headers.fontFamily};
  font-size: ${gridTokens.headers.fontSize};
  font-style: ${gridTokens.headers.fontStyle};
  font-weight: ${gridTokens.headers.fontWeight};
  letter-spacing: ${gridTokens.headers.letterSpacing};
  line-height: ${gridTokens.headers.lineHeight};
  color: ${gridTokens.headers.color};
`;

const WeekNumber = styled.td`
  font-family: ${gridTokens.weekNumbers.fontFamily};
  font-size: ${gridTokens.weekNumbers.fontSize};
  font-style: ${gridTokens.weekNumbers.fontStyle};
  font-weight: ${gridTokens.weekNumbers.fontWeight};
  letter-spacing: ${gridTokens.weekNumbers.letterSpacing};
  line-height: ${gridTokens.weekNumbers.lineHeight};
  color: ${gridTokens.headers.color};
  width: ${calendarTokens.cell.width};
  height: ${calendarTokens.cell.height};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export function CalendarGrid({ state, ...props }: CalendarGridProps) {
  const { gridProps, headerProps } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
  const weekDays = ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'];

  return (
    <table {...gridProps} cellPadding="0">
      <thead {...headerProps}>
        <tr>
          <Th>#</Th>
          {weekDays.map((day, index) => (
            <Th key={index}>{day}</Th>
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
              <WeekNumber>{weekNumber}</WeekNumber>
              {datesInWeek.map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
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