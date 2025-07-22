import { useEffect } from 'react';

/**
 * Kjører logikk når brukeren klikker utenfor espesifisert(e) element(er).
 * @param {HTMLElement | null | undefined | Array<HTMLElement | null | undefined>} element HTML element(er) som overvåkes for klikk utenfor.
 * @param {(event: MouseEvent | TouchEvent) => void} handler funksjonen som kjøres ved klikk utenfor.
 * @returns {void}
 * @example
 * ```tsx
 * * function MyComponent() {
 *  const [isOpen, setOpen] = useState(true);
 *  const ref = useRef<HTMLDivElement>(null);
 *  useOnClickOutside(ref.current, () => setOpen(false));
 *
 *  return isOpen && <div ref={ref}>innhold</div>
 * };
 * ```
 */

export function useOnClickOutside(
  element:
    | HTMLElement
    | null
    | undefined
    | Array<HTMLElement | null | undefined>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const elements = Array.isArray(element)
        ? element
        : [element].filter(Boolean);

      const hasClickedInside = elements.some(el =>
        el?.contains(event.target as HTMLElement),
      );

      // ClearIndicator in react-select removes itself from DOM before this handler goes off.
      // Therefore a click on it will always be counted as a click outside, for everything.
      // This is not a great solution, but it is a fair assumption that this will do more good than harm.
      const clickedOnSomethingInDocument = document.contains(
        event.target as Node,
      );
      if (hasClickedInside || !clickedOnSomethingInDocument) return;

      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [element, handler]);
}
