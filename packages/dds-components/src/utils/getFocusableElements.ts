import { type RefObject } from 'react';

export function getFocusableElements<T extends HTMLElement>(
  elementRef: RefObject<T | null>,
): NodeListOf<HTMLElement> | [] {
  return elementRef && elementRef.current
    ? elementRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
    : [];
}
