import { describe, it, expect } from 'vitest';

import { formatDate, formatTime, formatDateTime } from './formatDato';

describe('formatDato()', () => {
  describe('formatDate', () => {
    describe('valid dates', () => {
      it('should format date input - string', () => {
        const date = '01/01/1990';
        expect(formatDate(date)).toBe('01.01.1990');
      });
      it('should format date input - date', () => {
        const date = new Date('12-31-2022');
        expect(formatDate(date)).toBe('31.12.2022');
      });
      it('should format date input - number', () => {
        const timestamp = 946724400000;
        expect(formatDate(timestamp)).toBe('01.01.2000');
      });
    });

    describe('invalid dates', () => {
      it('should not format date input - string', () => {
        //99-99-2000 is an invalid date
        const date = '99-99-2000';
        expect(formatDate(date)).toBe(date);
      });
      it('should not format date input - date', () => {
        //31-12-2022 is an invalid date to date js Date object
        const date = new Date('31-12-2022');
        expect(formatDate(date)).toBe(date);
      });
      it('should not format date input - number', () => {
        const timestamp = 12345.12;
        expect(formatDate(timestamp)).toBe('01.01.1970'); //01.01.1970 is the fallback when timestamp is invalid
      });
    });
  });

  describe('formatTime', () => {
    describe('valid times', () => {
      it('should format time input - string', () => {
        const date = '01/01/1990 14:30';
        expect(formatTime(date)).toBe('14:30');
      });
      it('should format time input - date', () => {
        const date = new Date('12-31-2022 13:37');
        expect(formatTime(date)).toBe('13:37');
      });
      it('should format time input - number', () => {
        const timestamp = 946730220000;
        const options: Intl.DateTimeFormatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'Europe/Oslo',
        };
        expect(formatTime(timestamp, options)).toBe('13:37');
      });
    });

    describe('invalid times', () => {
      it('should not format time input - string', () => {
        //55:55 is an invalid time
        const date = '01-01-2000 55:55';
        expect(formatTime(date)).toBe(date);
      });
      it('should not format time input - date', () => {
        //99:99 is an invalid time
        const date = new Date('12-31-2022 99:99');
        expect(formatTime(date)).toBe(date);
      });
      it('should not format time input - number', () => {
        const timestamp = 12345.12;
        const options: Intl.DateTimeFormatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'Europe/Oslo',
        };
        expect(formatTime(timestamp, options)).toBe('01:00');
      });
    });
  });

  describe('formatDateTime', () => {
    describe('valid times', () => {
      it('should format datetime input - string', () => {
        const date = '01/01/1990 14:30';
        expect(formatDateTime(date)).toBe('01.01.1990 14:30');
      });
      it('should format datetime input - date', () => {
        const date = new Date('12-31-2022 13:37');
        expect(formatDateTime(date)).toBe('31.12.2022 13:37');
      });
      it('should format datetime input - number', () => {
        const timestamp = 946730220000;
        const options: Intl.DateTimeFormatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'Europe/Oslo',
        };
        expect(formatDateTime(timestamp, options)).toBe('01.01.2000 13:37');
      });
    });

    describe('invalid datetimes', () => {
      it('should not format datetime input - string', () => {
        //55:55 is an invalid time
        const date = '99-99-2000 55:55';
        expect(formatDateTime(date)).toBe(date);
      });
      it('should not format datetime input - date', () => {
        //99:99 is an invalid time
        const date = new Date('31-12-2022 99:99');
        expect(formatDateTime(date)).toBe(date);
      });
      it('should not format datetime input - number', () => {
        const timestamp = 12345.12;
        const options: Intl.DateTimeFormatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'Europe/Oslo',
        };
        expect(formatDateTime(timestamp, options)).toBe('01.01.1970 01:00');
      });
    });
  });
});
