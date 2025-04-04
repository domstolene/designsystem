import { describe, expect, it } from 'vitest';

import { formatInputBeloep } from './formatInputBeloep';

describe('formatInputBeloep()', () => {
  it('should format amount to NOK without currency', () => {
    expect(formatInputBeloep('12345678901').replace(/\u00A0/g, ' ')).toEqual(
      '12 345 678 901',
    );
  });
  it('should format amount to NOK without currency and with trailing decimals', () => {
    expect(
      formatInputBeloep('12345678901', true).replace(/\u00A0/g, ' '),
    ).toEqual('12 345 678 901,00');
  });
  it('should format amount with dot decimals to NOK without currency', () => {
    expect(formatInputBeloep('12345678901.23').replace(/\u00A0/g, ' ')).toBe(
      '12 345 678 901,23',
    );
  });
  it('should format amount with comma decimals to NOK without currency', () => {
    expect(formatInputBeloep('12345678901,23').replace(/\u00A0/g, ' ')).toBe(
      '12 345 678 901,23',
    );
  });
  it('should format dot decimal amount to NOK without currency', () => {
    expect(formatInputBeloep('.23').replace(/\u00A0/g, ' ')).toBe('0,23');
  });
  it('should format comma decimal amount to NOK without currency', () => {
    expect(formatInputBeloep(',23').replace(/\u00A0/g, ' ')).toBe('0,23');
  });
  it('should return empty string if amount has more than 2 decimals', () => {
    expect(formatInputBeloep('12345678901.23423').replace(/\u00A0/g, ' ')).toBe(
      '',
    );
  });
  it('should return empty string if amount is not a number', () => {
    expect(formatInputBeloep('qwerty').replace(/\u00A0/g, ' ')).toBe('');
  });
  it('should return empty string if amount is empty', () => {
    expect(formatInputBeloep('').replace(/\u00A0/g, ' ')).toBe('');
  });
  it('should return empty string if amount is invalid', () => {
    expect(formatInputBeloep('1,2,3').replace(/\u00A0/g, ' ')).toBe('');
  });
});
