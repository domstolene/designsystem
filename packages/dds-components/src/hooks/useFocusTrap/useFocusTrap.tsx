import { type RefObject, useLayoutEffect, useRef } from 'react';

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
  const containerRef = useRef<T>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!active || !container) return;

    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else {
      container.tabIndex = container.tabIndex || -1;
      container.focus();
    }

    function handleFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;

      const focusableEls = getFocusableElements(containerRef);

      if (focusableEls.length < 1) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];
      const activeEl = document.activeElement;

      if (!e.shiftKey && activeEl === lastEl) {
        firstEl.focus();
        e.preventDefault();
      }

      if (e.shiftKey && activeEl === firstEl) {
        lastEl.focus();
        e.preventDefault();
      }
    }

    document.addEventListener('keydown', handleFocus);
    return () => {
      document.removeEventListener('keydown', handleFocus);
    };
  }, [active]);

  return containerRef;
}
