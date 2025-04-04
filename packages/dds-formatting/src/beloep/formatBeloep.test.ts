import { describe, expect, it } from 'vitest';

import { formatBeloep } from './formatBeloep';

describe('formatBeloep()', () => {
  it('should format number to NOK', () => {
    expect(formatBeloep(12345678901).replace(/\u00A0/g, ' ')).toEqual(
      '12 345 678 901,00 kr',
    );
  });
  it('should format number with decimals to NOK', () => {
    expect(formatBeloep(12345678901.23).replace(/\u00A0/g, ' ')).toBe(
      '12 345 678 901,23 kr',
    );
  });
  it('should format number with many decimals to NOK', () => {
    expect(formatBeloep(12345678901.23423).replace(/\u00A0/g, ' ')).toBe(
      '12 345 678 901,23 kr',
    );
  });
  it('should format number below 1 to NOK', () => {
    expect(formatBeloep(0.23423).replace(/\u00A0/g, ' ')).toBe('0,23 kr');
  });
});
