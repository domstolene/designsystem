import { type DependencyList, useCallback, useEffect, useRef } from 'react';

/**
 * Hook som returnerer en callback-funksjon som refererer til den nyeste versjonen av den opprinnelige funksjonen.
 * Nyttig når du trenger en stabil referanse (f.eks. i event listeners), men fortsatt ønsker at den skal bruke den nyeste logikken.
 *
 * @template T - Typen til callback-funksjonen.
 * @param {T | undefined} callback - Funksjonen som skal kalles.
 * @param {DependencyList} [deps=[]] - Avhengigheter som styrer når den returnerte funksjonen skal oppdateres.
 * @returns {T} En memorisert funksjon som peker til den nyeste versjonen av `callback`.
 * @example
 * ```tsx
 * function MyComponent() {
 *   const [count, setCount] = useState(0);
 *
 *   const handleClick = useCallbackRef(() => {
 *     console.log('Klikk med count:', count);
 *   }, [count]);
 *
 *   useEffect(() => {
 *     window.addEventListener('click', handleClick);
 *     return () => window.removeEventListener('click', handleClick);
 *   }, [handleClick]);
 *
 *   return <button onClick={() => setCount(c => c + 1)}>Øk</button>;
 * }
 * ```

 */

export function useCallbackRef<T extends (...args: Array<never>) => unknown>(
  callback: T | undefined,
  deps: DependencyList = [],
): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps);
}
