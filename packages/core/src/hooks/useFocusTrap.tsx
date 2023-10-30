import { RefObject, useEffect, useRef } from 'react';
import { getFocusableElements } from '../utils';

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
 * @returns ref til elementet som fanger fokus.
 */

export function useFocusTrap<T extends HTMLElement>(
  active: boolean,
): RefObject<T> {
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
      element.focus();
      element.addEventListener('keydown', handleFocus);
    }

    return () => {
      element?.removeEventListener('keydown', handleFocus);
    };
  }, [active]);

  return elementRef;
}
