import { useEffect } from 'react';

/**
 * Kjører logikk når spesifisert(e) tast(er) blir trykt ned.
 * @param {string} key tasten som trykkes.
 * @param {(event: KeyboardEvent) => void} handler funksjonen som skal kjøres.
 * @returns {void}
 * @example
 * ```tsx
 * function MyComponent() {
 *  const [isOpen, setOpen] = useState(true);
 *  useOnKeyDown('Escape', () => setOpen(false));
 *
 *   return isOpen ? <div>innhold</div> : null;
 * }
 * ```
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
