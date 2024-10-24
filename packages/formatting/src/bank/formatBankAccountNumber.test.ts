import { describe, expect, it } from 'vitest';

import { formatBankAccountNumber } from './formatBankAccountNumber';

describe('formatBankAccountNumber()', () => {
  it('should format a valid bank account number', () => {
    expect(formatBankAccountNumber('12345678901')).toBe('1234 56 78901');
  });
  it('should format a valid bank account number with whitespace', () => {
    expect(formatBankAccountNumber(' 1234 56 78901 ')).toBe('1234 56 78901');
  });
  it('should format a partial bank account number', () => {
    expect(formatBankAccountNumber('1234')).toBe('1234');
    expect(formatBankAccountNumber('12345678')).toBe('1234 56 78');
  });
  it('should not format a number longer than 11 digits', () => {
    expect(formatBankAccountNumber('123456789012')).toBe('123456789012');
  });
  it('should not format a string containing alpha characters', () => {
    expect(formatBankAccountNumber('1234567890A')).toBe('1234567890A');
  });
});
