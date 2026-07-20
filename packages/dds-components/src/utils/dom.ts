/**
 * Join class names together.
 * Will filter out all falsy values.
 */
export function cn(...classNames: Array<unknown>) {
  const filtered = classNames.filter(Boolean).join(' ');
  return filtered || undefined;
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
