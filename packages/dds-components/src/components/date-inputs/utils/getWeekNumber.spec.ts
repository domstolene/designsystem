import { CalendarDate } from '@internationalized/date';
import { describe, expect, it } from 'vitest';

import {
  getDayOfWeek,
  getDayOfYear,
  getWeekNumber,
  isLeapYear,
} from './getWeekNumber';

describe('getWeekNumber()', () => {
  it('calculates first week correctly', () => {
    expect(getWeekNumber(new CalendarDate(2023, 1, 1))).toBe(52);
    expect(getWeekNumber(new CalendarDate(2025, 1, 1))).toBe(1);
    expect(getWeekNumber(new CalendarDate(2023, 1, 2))).toBe(1);
  });

  it('handles multiple weeks throughout the year', () => {
    expect(getWeekNumber(new CalendarDate(2023, 1, 9))).toBe(2);
    expect(getWeekNumber(new CalendarDate(2023, 6, 12))).toBe(24);
    expect(getWeekNumber(new CalendarDate(2023, 12, 11))).toBe(50);
  });

  it('handles year-end transitions', () => {
    expect(getWeekNumber(new CalendarDate(2023, 12, 25))).toBe(52);
    expect(getWeekNumber(new CalendarDate(2023, 12, 31))).toBe(52);
  });

  it('handles leap years', () => {
    expect(getWeekNumber(new CalendarDate(2024, 2, 29))).toBe(9);
    expect(getWeekNumber(new CalendarDate(2023, 3, 1))).toBe(9);
  });

  it('handles different century years', () => {
    expect(getWeekNumber(new CalendarDate(2000, 1, 1))).toBe(52);
    expect(getWeekNumber(new CalendarDate(2000, 1, 3))).toBe(1);
  });

  it('returns week number 1-53 range', () => {
    const weeks = new Set<number>();
    for (let day = 1; day <= 31; day++) {
      weeks.add(getWeekNumber(new CalendarDate(2023, 1, day)));
    }
    // All values should be between 1 and 53
    weeks.forEach(week => {
      expect(week).toBeGreaterThanOrEqual(1);
      expect(week).toBeLessThanOrEqual(53);
    });
  });
});

describe('getDayOfWeek()', () => {
  it('calculates monday as day 1', () => {
    expect(getDayOfWeek(new CalendarDate(2023, 10, 23))).toBe(1);
  });
  it('calculates sunday as day 7', () => {
    expect(getDayOfWeek(new CalendarDate(2023, 10, 29))).toBe(7);
  });

  it('calculates all days of week correctly', () => {
    expect(getDayOfWeek(new CalendarDate(2023, 10, 23))).toBe(1); // Mandag
    expect(getDayOfWeek(new CalendarDate(2023, 10, 24))).toBe(2); // Tirsdag
    expect(getDayOfWeek(new CalendarDate(2023, 10, 25))).toBe(3); // Onsdag
    expect(getDayOfWeek(new CalendarDate(2023, 10, 26))).toBe(4); // Torsdag
    expect(getDayOfWeek(new CalendarDate(2023, 10, 27))).toBe(5); // Fredag
    expect(getDayOfWeek(new CalendarDate(2023, 10, 28))).toBe(6); // Lørdag
    expect(getDayOfWeek(new CalendarDate(2023, 10, 29))).toBe(7); // Søndag
  });

  it('handles month boundaries', () => {
    // Siste dag i September 2023 (Lørdag)
    expect(getDayOfWeek(new CalendarDate(2023, 9, 30))).toBe(6);
    // Første dag i Oktober 2023 (Søndag)
    expect(getDayOfWeek(new CalendarDate(2023, 10, 1))).toBe(7);
  });

  it('handles year boundaries', () => {
    // Siste dag i 2022 (Lørdag)
    expect(getDayOfWeek(new CalendarDate(2022, 12, 31))).toBe(6);
    // Første dag i 2023 (Søndag)
    expect(getDayOfWeek(new CalendarDate(2023, 1, 1))).toBe(7);
  });

  it('returns day number 1-7 range', () => {
    for (let day = 1; day <= 28; day++) {
      const dayOfWeek = getDayOfWeek(new CalendarDate(2023, 1, day));
      expect(dayOfWeek).toBeGreaterThanOrEqual(1);
      expect(dayOfWeek).toBeLessThanOrEqual(7);
    }
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

  it('calculates mid-year dates correctly', () => {
    // 1. juni i ikke-skrudd år: 31+28+31+30+31+1 = 152
    expect(getDayOfYear(new CalendarDate(2023, 6, 1))).toBe(152);
    // 1. juli i ikke-skrudd år: 152-1+30+1 = 183
    expect(getDayOfYear(new CalendarDate(2023, 7, 1))).toBe(182);
  });

  it('calculates last day of year', () => {
    // 31. desember i ikke-skrudd år = 365
    expect(getDayOfYear(new CalendarDate(2023, 12, 31))).toBe(365);
    // 31. desember i skuddår = 366
    expect(getDayOfYear(new CalendarDate(2024, 12, 31))).toBe(366);
  });

  it('handles non-leap year Feb 28', () => {
    // 28. februar i ikke-skrudd år = 59
    expect(getDayOfYear(new CalendarDate(2023, 2, 28))).toBe(59);
    // 1. mars i ikke-skrudd år = 60
    expect(getDayOfYear(new CalendarDate(2023, 3, 1))).toBe(60);
  });

  it('returns day number 1-366 range', () => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const nonLeapDays = new Set<number>();
    for (let month = 1; month <= 12; month++) {
      const lastDay = daysInMonth[month - 1];
      for (let day = 1; day <= lastDay; day++) {
        nonLeapDays.add(getDayOfYear(new CalendarDate(2023, month, day)));
      }
    }

    expect(Math.max(...Array.from(nonLeapDays))).toBe(365);

    const daysInLeapMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leapDays = new Set<number>();
    for (let month = 1; month <= 12; month++) {
      const lastDay = daysInLeapMonth[month - 1];
      for (let day = 1; day <= lastDay; day++) {
        leapDays.add(getDayOfYear(new CalendarDate(2024, month, day)));
      }
    }
    expect(Math.max(...Array.from(leapDays))).toBe(366);
  });
});

describe('isLeapYear()', () => {
  it('identifies leap years divisible by 4', () => {
    expect(isLeapYear(new CalendarDate(2024, 1, 1))).toBe(true);
    expect(isLeapYear(new CalendarDate(2020, 1, 1))).toBe(true);
    expect(isLeapYear(new CalendarDate(2016, 1, 1))).toBe(true);
  });

  it('excludes non-leap years', () => {
    expect(isLeapYear(new CalendarDate(2023, 1, 1))).toBe(false);
    expect(isLeapYear(new CalendarDate(2022, 1, 1))).toBe(false);
    expect(isLeapYear(new CalendarDate(2021, 1, 1))).toBe(false);
  });

  it('handles century years correctly', () => {
    // Divisible by 400 (leap year)
    expect(isLeapYear(new CalendarDate(2000, 1, 1))).toBe(true);
    // Divisible by 100 but not 400 (not leap year)
    expect(isLeapYear(new CalendarDate(1900, 1, 1))).toBe(false);
    expect(isLeapYear(new CalendarDate(2100, 1, 1))).toBe(false);
  });
});
