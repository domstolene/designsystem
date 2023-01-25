import { describe, it, expect } from 'vitest';
import { formatMobilePhoneNumber } from './formatMobilePhoneNumber';

describe('formatMobilePhoneNumber()', () => {
  it('should format a valid mobile phone number', () => {
    expect(formatMobilePhoneNumber('12345678')).toBe('12 34 56 78');
  });
  it('should format a valid mobile phone number with whitespace', () => {
    expect(formatMobilePhoneNumber(' 123 45 678 ')).toBe('12 34 56 78');
  });
  it('should format a partial mobile phone number', () => {
    expect(formatMobilePhoneNumber('123')).toBe('12 3');
    expect(formatMobilePhoneNumber('1234')).toBe('12 34');
  });
  it('should not format a number longer than 8 digits', () => {
    expect(formatMobilePhoneNumber('123456789')).toBe('123456789');
  });
  it('should not format a string containing alpha characters', () => {
    expect(formatMobilePhoneNumber('1234567A')).toBe('1234567A');
  });
  it('should not crash on empty string', () => {
    expect(formatMobilePhoneNumber('')).toBe('');
  });
});
