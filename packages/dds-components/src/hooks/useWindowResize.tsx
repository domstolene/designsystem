import { useEffect } from 'react';

/**
 * Kjører logikk når vindusstørrelsen endrer seg.
 * Typisk bruk:
 * ```
 *  const [width, setWidth] = useState<number>(window.innerWidth);
 *  useResize(() => setWidth(window.innerWidth));
 *
 * return <div>vindusstørrelse: {width}px</div>;
 * ```
 * @param handler funksjonen som skal kjøres.
 */

export const useWindowResize = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [handler]);
};
