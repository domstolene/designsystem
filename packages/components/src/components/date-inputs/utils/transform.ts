import { DateValue, fromDate } from '@internationalized/date';

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
