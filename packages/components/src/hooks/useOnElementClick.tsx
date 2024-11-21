import { useEffect } from 'react';

/**
 * Kjører logikk når brukeren klikker på et element, men ikke på noen av elementets barn,
 * f.eks. bruker klikker inne i en drawer som kan være barn av `Backdrop`
 * Typisk bruk:
 * ```
 * const [isOpen, setOpen] = useState(true);
 * const ref = useRef<HTMLElement>(null);
 * useOnElementClick(ref.current, () => setOpen(false))
 *
 *
 * return
 * (
 *  <Backdrop isMounted={isOpen} ref={backdropRef}>
 *    <div>
 *      <Button onClick={gjoerNoeUtenALukkeBackdrop()}>Gjør noe</Button>
 *    <div>
 *  </Backdrop>
 * )
 * ```
 * @param element HTML Elementet man klikker på.
 * @param handler funksjonen som kjøres ved klikk på elementet
 */

export function useOnElementClick(
  element: HTMLElement | null,
  handler: (event: MouseEvent | TouchEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (event.target === event.currentTarget) {
        handler(event);
      }
    };

    if (element) {
      element.addEventListener('mousedown', listener);
      element.addEventListener('touchstart', listener);
    }
    return () => {
      if (element) {
        element.removeEventListener('mousedown', listener);
        element.removeEventListener('touchstart', listener);
      }
    };
  }, [element, handler]);
}
