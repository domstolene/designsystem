import { useEffect, useState } from 'react';

/**
 * Tillater effekter og animasjoner å bli gjennomført like etter et element blir lagt til eller like før det blir fjernet fra DOM.
 * Typisk bruk:
 * ```
 * // CSS
 * .component {
 *  transition: opacity 0.2s;
 *  opacity: 0;
 * }
 *
 * .transitionedIn.mounted {
 *  opacity: 1;
 * }
 *
 * const MyComponent = (props) => {
 *
 * const hasTransitionedIn = useMountTransition(props.isMounted, 500);
 *
 *  return props.isMounted || hasTransitionedIn ? (
 *  <div
 *  className={`component ${hasTransitionedIn && 'transitionedIn'} ${props.isMounted && 'mounted'}`}
 *  >
 *    innhold
 *  </div>)
 * : null;
 *
 * }
 * ```
 * @param isMounted om elementet er mounted.
 * @param unmountDelay hvor lenge transition skal vare før unmount.
 * @returns om transition er ferdig.
 */

export const useMountTransition = (
  isMounted: boolean,
  unmountDelay: number,
) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (isMounted && !hasTransitionedIn) setHasTransitionedIn(true);
    else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);
  return hasTransitionedIn;
};
