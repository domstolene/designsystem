import {
  CalendarDate,
  type DateValue,
  Time,
  fromDate,
} from '@internationalized/date';

export function nativeDateToDateValue(
  date: Date,
  timeZone: string | undefined = 'Europe/Oslo',
): DateValue {
  return fromDate(date, timeZone);
}

export function dateValueToNativeDate(
  date: DateValue,
  timeZone: string | undefined = 'Europe/Oslo',
): Date {
  return date.toDate(timeZone);
}

export function nativeDateToCalendarDate(date: Date): CalendarDate {
  return new CalendarDate(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );
}

export function nativeDateToTime(date: Date): Time {
  return new Time(date.getHours(), date.getMinutes(), date.getSeconds());
}

export function calendarDateToNativeDate(
  date: CalendarDate,
  time: Time = new Time(12, 0, 0, 0),
): Date {
  return new Date(
    date.year,
    date.month - 1,
    date.day,
    time.hour,
    time.minute,
    time.second,
  );
}
