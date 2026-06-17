import { CalendarDate, Time } from '@internationalized/date';
import { describe, expect, it } from 'vitest';

import {
  calendarDateToNativeDate,
  dateValueToNativeDate,
  nativeDateToCalendarDate,
  nativeDateToDateValue,
  nativeDateToTime,
} from './transform';

describe('date transform utilities', () => {
  describe('nativeDateToDateValue()', () => {
    it('converts native Date to DateValue', () => {
      const date = new Date(2023, 9, 15); // 15. Oktober 2023
      const result = nativeDateToDateValue(date);

      expect(result.year).toBe(2023);
      expect(result.month).toBe(10);
      expect(result.day).toBe(15);
    });

    it('handles leap year dates', () => {
      const date = new Date(2024, 1, 29); // 29. Februar 2024 (skuddår)
      const result = nativeDateToDateValue(date);

      expect(result.month).toBe(2);
      expect(result.day).toBe(29);
    });

    it('handles timezone parameter', () => {
      const date = new Date('2023-10-15T12:00:00Z');
      const result = nativeDateToDateValue(date, 'UTC');

      expect(result.year).toBe(2023);
      expect(result.month).toBe(10);
      expect(result.day).toBe(15);
    });
  });

  describe('dateValueToNativeDate()', () => {
    it('converts DateValue back to native Date', () => {
      const original = new Date(2023, 9, 15, 12, 30, 45);
      const dateValue = nativeDateToDateValue(original);
      const result = dateValueToNativeDate(dateValue);

      expect(result.getFullYear()).toBe(2023);
      expect(result.getMonth()).toBe(9);
      expect(result.getDate()).toBe(15);
    });

    it('handles round-trip conversion', () => {
      const original = new Date(2023, 9, 15, 8, 45, 30);
      const dateValue = nativeDateToDateValue(original);
      const result = dateValueToNativeDate(dateValue);

      expect(result.getFullYear()).toBe(original.getFullYear());
      expect(result.getMonth()).toBe(original.getMonth());
      expect(result.getDate()).toBe(original.getDate());
    });
  });

  describe('nativeDateToCalendarDate()', () => {
    it('converts native Date to CalendarDate', () => {
      const date = new Date(2023, 9, 15); // 15. Oktober 2023
      const result = nativeDateToCalendarDate(date);

      expect(result.year).toBe(2023);
      expect(result.month).toBe(10);
      expect(result.day).toBe(15);
    });

    it('handles first day of year', () => {
      const date = new Date(2023, 0, 1); // 1. Januar 2023
      const result = nativeDateToCalendarDate(date);

      expect(result.month).toBe(1);
      expect(result.day).toBe(1);
    });

    it('handles last day of year', () => {
      const date = new Date(2023, 11, 31); // 31. Desember 2023
      const result = nativeDateToCalendarDate(date);

      expect(result.month).toBe(12);
      expect(result.day).toBe(31);
    });

    it('handles leap year Feb 29', () => {
      const date = new Date(2024, 1, 29); // 29. Februar 2024 (skuddår)
      const result = nativeDateToCalendarDate(date);

      expect(result.month).toBe(2);
      expect(result.day).toBe(29);
    });
  });

  describe('nativeDateToTime()', () => {
    it('converts native Date to Time', () => {
      const date = new Date(2023, 9, 15, 14, 35, 42);
      const result = nativeDateToTime(date);

      expect(result.hour).toBe(14);
      expect(result.minute).toBe(35);
      expect(result.second).toBe(42);
    });

    it('handles midnight', () => {
      const date = new Date(2023, 9, 15, 0, 0, 0);
      const result = nativeDateToTime(date);

      expect(result.hour).toBe(0);
      expect(result.minute).toBe(0);
      expect(result.second).toBe(0);
    });

    it('handles 23:59:59', () => {
      const date = new Date(2023, 9, 15, 23, 59, 59);
      const result = nativeDateToTime(date);

      expect(result.hour).toBe(23);
      expect(result.minute).toBe(59);
      expect(result.second).toBe(59);
    });

    it('handles noon', () => {
      const date = new Date(2023, 9, 15, 12, 0, 0);
      const result = nativeDateToTime(date);

      expect(result.hour).toBe(12);
      expect(result.minute).toBe(0);
      expect(result.second).toBe(0);
    });
  });

  describe('calendarDateToNativeDate()', () => {
    it('converts CalendarDate to native Date with default time', () => {
      const calendarDate = new CalendarDate(2023, 10, 15);
      const result = calendarDateToNativeDate(calendarDate);

      expect(result.getFullYear()).toBe(2023);
      expect(result.getMonth()).toBe(9); // 0-indeksert i Date
      expect(result.getDate()).toBe(15);
      expect(result.getHours()).toBe(12); // standard klokkeslett er 12:00:00
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
    });

    it('converts CalendarDate to native Date with custom time', () => {
      const calendarDate = new CalendarDate(2023, 10, 15);
      const time = new Time(14, 35, 42);
      const result = calendarDateToNativeDate(calendarDate, time);

      expect(result.getFullYear()).toBe(2023);
      expect(result.getMonth()).toBe(9);
      expect(result.getDate()).toBe(15);
      expect(result.getHours()).toBe(14);
      expect(result.getMinutes()).toBe(35);
      expect(result.getSeconds()).toBe(42);
    });

    it('handles leap year Feb 29', () => {
      const calendarDate = new CalendarDate(2024, 2, 29);
      const result = calendarDateToNativeDate(calendarDate);

      expect(result.getMonth()).toBe(1); // Februar (0-indeksert)
      expect(result.getDate()).toBe(29);
    });

    it('round-trip conversion with CalendarDate', () => {
      const original = new CalendarDate(2023, 10, 15);
      const nativeDate = calendarDateToNativeDate(original);
      const result = nativeDateToCalendarDate(nativeDate);

      expect(result.year).toBe(original.year);
      expect(result.month).toBe(original.month);
      expect(result.day).toBe(original.day);
    });

    it('round-trip conversion with time', () => {
      const calendarDate = new CalendarDate(2023, 10, 15);
      const time = new Time(14, 35, 42);
      const nativeDate = calendarDateToNativeDate(calendarDate, time);
      const resultCalendarDate = nativeDateToCalendarDate(nativeDate);
      const resultTime = nativeDateToTime(nativeDate);

      expect(resultCalendarDate.year).toBe(calendarDate.year);
      expect(resultCalendarDate.month).toBe(calendarDate.month);
      expect(resultCalendarDate.day).toBe(calendarDate.day);
      expect(resultTime.hour).toBe(time.hour);
      expect(resultTime.minute).toBe(time.minute);
      expect(resultTime.second).toBe(time.second);
    });
  });
});
