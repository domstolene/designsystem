import { useEffect } from 'react';

/**
 * Kjører logikk når vindusstørrelsen endrer seg.
 * @param {() => void} handler funksjonen som skal kjøres.
 * @returns {void}
 * @example
 * ```tsx
 * function MyComponent() {
 *   const [width, setWidth] = useState<number>(window.innerWidth);
 *   useResize(() => setWidth(window.innerWidth));
 *
 *   return <div>vindusstørrelse: {width}px</div>;
 * }
 * ```
 */

export const useWindowResize = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [handler]);
};
