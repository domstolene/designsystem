/**
 * Join class names together.
 * Will filter out all falsy values.
 */
export function cn(...classNames: Array<unknown>) {
  return classNames.filter(Boolean).join(' ');
}
