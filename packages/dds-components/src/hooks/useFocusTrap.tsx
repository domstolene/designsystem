import { type RefObject, useEffect, useRef } from 'react';

import { getFocusableElements } from '../../../dds-components/src/utils';

/**
 * Fanger fokus i en loop inni et element. Typisk bruk:
 * ```
 * const MyComponent = (props) => {
 *
 *  const componentRef = useFocusTrap<HTMLDivElement>(props.isOpen);
 *
 *  return props.isOpen ? <div ref={componentRef}><button>click</button></div> : null;
 *
 * }
 * ```
 * @param active om focus skal fanges, f.eks. når en modal åpnes.
 * @param initialFocusRef Ref som skal motta focus når focus trap er aktiv.
 * @returns ref til elementet som fanger fokus.
 */

export function useFocusTrap<T extends HTMLElement>(
  active: boolean,
  initialFocusRef: RefObject<HTMLElement | null> | undefined = undefined,
): RefObject<T | null> {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    function handleFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab' || !active || !elementRef.current) return;

      const focusableElements = getFocusableElements(elementRef);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }

      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    }

    const element = elementRef.current;

    if (element && active) {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
      } else {
        element.focus();
        element.addEventListener('keydown', handleFocus);
      }
    }

    return () => {
      element?.removeEventListener('keydown', handleFocus);
    };
  }, [active]);

  return elementRef;
}
