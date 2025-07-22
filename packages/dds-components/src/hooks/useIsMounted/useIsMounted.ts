import { useCallback, useEffect, useRef } from 'react';

/**
 * Sjekker om komponenten er mounted i DOM.
 *
 * @returns {() => boolean} om komponenten er mounted.
 * @example
 * ```tsx
 * function MyComponent() {
 *
 *  const isMounted = useIsMounted();
 *
 *  useEffect(() => {
 *    if(isMounted()) {
 *    // logikk når mounted
 *    }
 *  }, [isMounted]);
 *
 * });
 * ```
 *
 */

export const useIsMounted = (): (() => boolean) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
};
