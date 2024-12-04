import { describe, expect, it } from 'vitest';

import { formatLandlinePhoneNumber } from './formatLandlinePhoneNumber';

describe('formatLandlinePhoneNumber()', () => {
  it('should format a valid landline phone number', () => {
    expect(formatLandlinePhoneNumber('12345678')).toBe('12 34 56 78');
  });
  it('should format a valid landline phone number with whitespace', () => {
    expect(formatLandlinePhoneNumber(' 123 45 678 ')).toBe('12 34 56 78');
  });
  it('should format a partial landline phone number', () => {
    expect(formatLandlinePhoneNumber('123')).toBe('12 3');
    expect(formatLandlinePhoneNumber('1234')).toBe('12 34');
  });
  it('should not format a number longer than 8 digits', () => {
    expect(formatLandlinePhoneNumber('123456789')).toBe('123456789');
  });
  it('should not format a string containing alpha characters', () => {
    expect(formatLandlinePhoneNumber('1234567A')).toBe('1234567A');
  });
  it('should not crash on empty string', () => {
    expect(formatLandlinePhoneNumber('')).toBe('');
  });
});
