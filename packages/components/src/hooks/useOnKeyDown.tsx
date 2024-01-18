import { useEffect } from 'react';

/**
 * Kjører logikk når en spesifisert tast blir trykt ned.
 * Typisk bruk:
 * ```
 * const [isOpen, setOpen] = useState(true);
 * const ref = useRef<HTMLElement>(null);
 * useOnKeyDown(['Escape', 'Esc'], () => setOpen(false));
 *
 * return isOpen ? <div>innhold</div> : null;
 * ```
 * @param key tasten som trykkes.
 * @param handler funksjonen som skal kjøres.
 */

export const useOnKeyDown = (
  key: string | Array<string>,
  handler: (event: KeyboardEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const keys = Array.isArray(key) ? key : [key];
      if (keys.indexOf(event.key) !== -1) {
        handler(event);
      }
    };

    document.addEventListener('keydown', listener, true);

    return () => {
      document.removeEventListener('keydown', listener, true);
    };
  }, [handler]);
};
