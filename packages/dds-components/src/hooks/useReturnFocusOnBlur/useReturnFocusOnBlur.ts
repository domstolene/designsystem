import { type RefObject, useEffect, useRef } from 'react';

import { getFocusableElements } from '../../utils';

/**
 * Returnerer fokus til et element når første eller siste barn i en container mister fokus ved tastaturnavigasjon. Typisk bruk:
 * ```
 * const MyComponent = (props) => {
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
 * @param active om container skal få fokus, f.eks. når en modal åpnes.
 * @param onBlur ekstra logikk når fokus forlater container.
 * @param triggerElement elementet som skal få fokus når fokus forlater container.
 * @returns ref til container som får fokus.
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
      console.log('active', active);
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
      console.log('document.activeElement', document.activeElement);
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
