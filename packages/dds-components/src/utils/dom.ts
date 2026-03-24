/**
 * Join class names together.
 * Will filter out all falsy values.
 */
export function cn(...classNames: Array<unknown>) {
  const filtered = classNames.filter(Boolean).join(' ');
  return filtered || undefined;
}

export function convertCamelToHyphen(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([0-9])/g, '$1-$2')
    .toLowerCase();
}

export const defaultPortalTarget = () =>
  document.getElementsByClassName('dds-themed')[0] as HTMLElement;

/**
 * Returnener verdien hvis den er truthy.
 * Ellers returnerer `undefined`.
 * Kan konfigureres til å beholde `0`.
 */
export function optAttr<T>(
  value: T | undefined | null,
  keepZero?: boolean,
): T | undefined {
  if (keepZero && value === 0) {
    return value;
  }
  return value ? value : undefined;
}
