import { describe, expect, it } from 'vitest';

import { formatFoedselsnummer } from './formatFoedselsnummer';

describe('formatFoedselsnummer()', () => {
  it('should format a valid foedselsnummer', () => {
    expect(formatFoedselsnummer('12345678901')).toBe('123456 78901');
  });
  it('should format a valid foedselsnummer with whitespace', () => {
    expect(formatFoedselsnummer(' 123456 78901 ')).toBe('123456 78901');
  });
  it('should format a partial foedselsnummer', () => {
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
