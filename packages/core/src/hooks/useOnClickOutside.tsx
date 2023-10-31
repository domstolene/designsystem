import { useEffect } from 'react';

/**
 * Kjører logikk når brukeren klikker utenfor et element, f.eks at elementet fjernes fra DOM.
 * Typisk bruk:
 * ```
 * const [isOpen, setOpen] = useState(true);
 * const ref = useRef<HTMLElement>(null);
 * useOnClickOutside(ref, () => setOpen(false));
 *
 * return <div ref={ref}>innhold</div>
 * ```
 * @param element HTML elementet man klikker utenfor.
 * @param handler funksjonen som kjøres ved klikk utenfor.
 */

export function useOnClickOutside(
  element: HTMLElement | null | (HTMLElement | null)[],
  handler: (event: MouseEvent | TouchEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const elements = Array.isArray(element) ? element : [element];
      let targetElement = event.target as HTMLElement;

      while (targetElement) {
        if (elements.indexOf(targetElement) != -1) {
          return;
        }
        targetElement = targetElement.parentNode as HTMLElement;
      }
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
