import { describe, expect, it } from 'vitest';

import { formatOrganisationNumber } from './formatOrganisationNumber';

describe('formatOrganisationNumber()', () => {
  it('should format a valid organisation number', () => {
    expect(formatOrganisationNumber('123456789')).toBe('123 456 789');
  });
  it('should format a valid organisation number with whitespace', () => {
    expect(formatOrganisationNumber(' 123456 789 ')).toBe('123 456 789');
  });
  it('should format a partial organisation number', () => {
    expect(formatOrganisationNumber('123')).toBe('123');
    expect(formatOrganisationNumber('123456')).toBe('123 456');
    expect(formatOrganisationNumber('12345678')).toBe('123 456 78');
  });
  it('should not format a number longer than 9 digits', () => {
    expect(formatOrganisationNumber('123456789012')).toBe('123456789012');
  });
  it('should not format a string containing other characters than numbers', () => {
    expect(formatOrganisationNumber('123456A')).toBe('123456A');
    expect(formatOrganisationNumber('123456%')).toBe('123456%');
  });
});
