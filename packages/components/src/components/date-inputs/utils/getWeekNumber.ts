import {
  CalendarDate,
  ZonedDateTime,
  CalendarDateTime,
  startOfWeek,
  startOfYear,
  endOfYear,
} from '@internationalized/date';

/**
 * Calculates the week number following the ISO-8601 format.
 * @returns week number, 1 indexed
 */
export function getWeekNumber(
  date: CalendarDate | ZonedDateTime | CalendarDateTime,
) {
  const dayOfWeek = getDayOfWeek(date);
  const dayOfYear = getDayOfYear(date);
  const jan1DayOfWeek = getDayOfWeek(startOfYear(date));

  const isPartOfLastWeekOfPreviousYear =
    dayOfYear <= 8 - jan1DayOfWeek && jan1DayOfWeek > 4;

  if (isPartOfLastWeekOfPreviousYear) {
    if (
      jan1DayOfWeek === 5 ||
      (jan1DayOfWeek === 6 && isLeapYear(date.subtract({ years: 1 })))
    ) {
      return 53;
    }
    return 52;
  }

  const daysInYear = getDayOfYear(endOfYear(date));
  if (daysInYear - dayOfYear < 4 - dayOfWeek) {
    return 1;
  }

  const weekNum = (dayOfYear + (7 - dayOfWeek) + (jan1DayOfWeek - 1)) / 7;
  if (jan1DayOfWeek > 4) {
    return weekNum - 1;
  }

  return weekNum;
}

/**
 * Mon = 1
 * Tue = 2
 * Wed = 3
 * Thu = 4
 * Fri = 5
 * Sat = 6
 * Sun = 7
 * @returns day of week, 1 indexed
 */
export function getDayOfWeek(
  date: CalendarDate | ZonedDateTime | CalendarDateTime,
) {
  const weekStart = startOfWeek(date, 'no-NO');
  return (
    date.calendar.toJulianDay(date) -
    weekStart.calendar.toJulianDay(weekStart) +
    1
  );
}

/**
 * @returns day of year, 1 indexed
 */
export function getDayOfYear(
  date: CalendarDate | ZonedDateTime | CalendarDateTime,
) {
  const yearStart = startOfYear(date);
  return (
    date.calendar.toJulianDay(date) -
    yearStart.calendar.toJulianDay(yearStart) +
    1
  );
}

export function isLeapYear(
  date: CalendarDate | ZonedDateTime | CalendarDateTime,
) {
  return (
    (date.year % 4 === 0 && date.year % 100 !== 0) || date.year % 400 === 0
  );
}
