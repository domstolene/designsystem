import { describe, expect, it } from 'vitest';

import { convertBooleanishToBoolean } from './Booleanish';

describe('convertBooleanishToBoolean', () => {
  it('returns boolean values as is', () => {
    const trueValue = convertBooleanishToBoolean(true);
    expect(trueValue).toBe(true);
    const falseValue = convertBooleanishToBoolean(false);
    expect(falseValue).toBe(false);
  });

  it('returns boolean values for string inputs "true" and "false"', () => {
    const trueValue = convertBooleanishToBoolean('true');
    expect(trueValue).toBe(true);
    const falseValue = convertBooleanishToBoolean('false');
    expect(falseValue).toBe(false);
  });
});
