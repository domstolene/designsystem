import { CalendarDate } from '@internationalized/date';
import { describe, expect, it } from 'vitest';

import { getDayOfWeek, getDayOfYear, getWeekNumber } from './getWeekNumber';

describe('getWeekNumber()', () => {
  it('calculates first week correctly', () => {
    expect(getWeekNumber(new CalendarDate(2023, 1, 1))).toBe(52);
    expect(getWeekNumber(new CalendarDate(2025, 1, 1))).toBe(1);
  });
});

describe('getDayOfWeek()', () => {
  it('calculates monday as day 1', () => {
    expect(getDayOfWeek(new CalendarDate(2023, 10, 23))).toBe(1);
  });
  it('calculates sunday as day 7', () => {
    expect(getDayOfWeek(new CalendarDate(2023, 10, 29))).toBe(7);
  });
});

describe('getDayOfYear()', () => {
  it('calculates Jan 1st as day 1', () => {
    expect(getDayOfYear(new CalendarDate(2023, 1, 1))).toBe(1);
  });
  it('calculates leap year March 1st as day 61', () => {
    expect(getDayOfYear(new CalendarDate(2008, 3, 1))).toBe(61);
  });
  it('calculates non-leap year March 1st as day 60', () => {
    expect(getDayOfYear(new CalendarDate(2009, 3, 1))).toBe(60);
  });
});
