import { type RefObject, useEffect, useRef } from 'react';

import { getFocusableElements } from '../../utils';

/**
 * Fanger fokus i en loop inni et element.
 * @template {HTMLElement} T typen til container-elementet som fanger fokus.
 * @param {boolean} active om focus skal fanges, f.eks. når en modal åpnes.
 * @param {RefObject<HTMLElement | null> | undefined} initialFocusRef `ref` til elementet som skal motta focus når focus trap er aktiv.
 * @returns {RefObject<T | null>} `ref` til elementet som fanger fokus.
 * @example
 * ```tsx
 * function MyComponent() {
 *
 *  const [isOpen, setOpen] = useState(false);
 *  const componentRef = useFocusTrap<HTMLDivElement>(isOpen);
 *
 *  return isOpen ? <div ref={componentRef}><button>click</button></div> : null;
 *
 * }
 * ```
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
