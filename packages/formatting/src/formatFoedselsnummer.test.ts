import { describe, it, expect } from 'vitest';

import { formatFoedselsnummer } from './formatFoedselsnummer';

describe('formatPersonnummer()', () => {
  it('should format a valid personnummer', () => {
    expect(formatFoedselsnummer('12345678901')).toBe('123456 78901');
  });
  it('should format a valid personnummer with whitespace', () => {
    expect(formatFoedselsnummer(' 123456 78901 ')).toBe('123456 78901');
  });
  it('should format a partial personnummer', () => {
    expect(formatFoedselsnummer('123456')).toBe('123456');
    expect(formatFoedselsnummer('12345678')).toBe('123456 78');
  });
  it('should not format a number longer than 11 digits', () => {
    expect(formatFoedselsnummer('123456789012')).toBe('123456789012');
  });
  it('should not format a string containing alpha characters', () => {
    expect(formatFoedselsnummer('1234567890A')).toBe('1234567890A');
  });
});
