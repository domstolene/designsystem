import { useCallback, useEffect, useRef } from 'react';

/**
 * Sjekker om komponenten er mounted i DOM.
 *
 * Eksempel på bruk:
 * ```
 * const MyComponent = () => {
 *
 *  const isMounted = useIsMounted();
 *
 *  useEffect(() => {
 *    if(isMounted()) {
 *    // koden din
 *    }
 *  }, [isMounted]);
 *
 *  // resten av koden...
 * });
 * ```
 * @returns  om komponenten er mounted.
 *
 */

export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
};
