/**
 * @param value - string to check
 * @returns true if value contains only numbers
 */
export const containsOnlyNumbers = (value: string): boolean =>
  value.match(/^\d+$/) !== null;
