import { type RefObject, useEffect, useRef } from 'react';

import { getFocusableElements } from '../../utils';

/**
 * Returnerer fokus til et element når første eller siste barn i en container mister fokus ved tastaturnavigasjon.
 * @template {HTMLElement} T typen til container som skal returnere fous.
 * @param {boolean} active om container skal få fokus, f.eks. når en modal åpnes.
 * @param {() => void} onBlur ekstra logikk når fokus forlater container.
 * @param {HTMLElement | null | undefined} triggerElement elementet som skal få fokus når fokus forlater container.
 * @returns {RefObject<T | null>} ref til container som skal returnere fokus.
 * @example
 * ```tsx
 * const MyComponent() {
 *
 *  const [isOpen, setOpen] = useState(false);
 *  const triggerRef = useRef<HTMLButtonElement>(null);
 *  const containerRef = useReturnFocusOnBlur<HTMLDivElement>(
 *    isOpen,
 *    () => setOpen(false),
 *    triggerRef.current,
 *  );
 *
 *  return (
 *    <div>
 *      <button
 *        ref={triggerRef}
 *        onClick={() => setOpen(true)}
 *      >
 *        Åpne popover
 *      </button>
 *      {isOpen &&
 *        <div ref={containerRef}>
 *          <button>1</button>
 *          <button>2</button>
 *        </div>
 *      }
 *    </div>
 *  )
 * }
 * ```
 */

export function useReturnFocusOnBlur<T extends HTMLElement>(
  active: boolean,
  onBlur: () => void,
  triggerElement?: HTMLElement | null,
): RefObject<T | null> {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    function handleFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab' || !active || !elementRef.current || !triggerElement)
        return;
      const focusableElements = getFocusableElements(elementRef);
      const lastElement = focusableElements[focusableElements.length - 1];
      const firstElement = focusableElements[0];

      if (
        (!e.shiftKey && document.activeElement === lastElement) ||
        (e.shiftKey && document.activeElement === firstElement) ||
        (e.shiftKey && document.activeElement === element)
      ) {
        triggerElement.focus();
        e.preventDefault();
        onBlur();
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
