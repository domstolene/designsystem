/**
 * Join class names together.
 * Will filter out all falsy values.
 */
export function cn(...classNames: Array<unknown>) {
  return classNames.filter(Boolean).join(' ');
}

export function convertCamelToHyphen(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([0-9])/g, '$1-$2')
    .toLowerCase();
}

export const defaultPortalTarget = () =>
  document.getElementsByClassName('dds-themed')[0] as HTMLElement;
