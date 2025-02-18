import { type RefObject, useEffect, useRef } from 'react';

import { getFocusableElements } from '../../../dds-components/src/utils';

/**
 * Returnerer fokus til et element når første eller siste barn i en container mister fokus ved tastaturnavigasjon. Typisk bruk:
 * ```
 * const MyComponent = (props) => {
 *
 *  const [isOpen, setOpen] = useState(true);
 *  const close = () => setOpen(false);
 *  const triggerRef = useRef<HTMLButtonElement>(null);
 *  const containerRef = useReturnFocusOnBlur<HTMLDivElement>(
 *    isOpen,
 *    triggerRef.current,
 *    () => close()
 *  );
 *
 *  return (
 *    <div>
 *      <button ref={triggerRef} >Åpne popover</button>
 *      <div ref={containerRef}>
 *        <button>gjør noe</button>
 *      </div>
 *    </div>
 *  )
 * }
 * ```
 * @param active om container skal få fokus, f.eks. når en modal åpnes.
 * @param triggerElement elementet som skal få fokus når fokus forlater container.
 * @param onBlur ekstra logikk når fokus forlater container.
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
