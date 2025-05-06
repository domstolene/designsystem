export type Booleanish = boolean | 'true' | 'false';

export function convertBooleanishToBoolean(
  value?: Booleanish,
): boolean | undefined {
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  } else {
    return value;
  }
}
