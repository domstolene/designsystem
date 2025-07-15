import { useEffect, useState } from 'react';

/**
 * Tillater effekter og animasjoner å bli gjennomført like etter et element blir lagt til eller like før det blir fjernet fra DOM.
 * @param {boolean} isMounted om elementet er mounted.
 * @param {number} unmountDelay hvor lenge transition skal vare før unmount.
 * @returns {boolean} om den har trasisjonert inn.
 * @example
 * ```css
 * // CSS
 * .component {
 *  transition: opacity 0.2s;
 *  opacity: 0;
 * }
 *
 * .transitionedIn.mounted {
 *  opacity: 1;
 * }
 * ```
 * ```jsx
 * // JSX
 * function MyComponent(isMounted) {
 *
 * const hasTransitionedIn = useMountTransition(isMounted, 500);
 *
 *  return isMounted || hasTransitionedIn ? (
 *    <div
 *      className={`component ${hasTransitionedIn && 'transitionedIn'} ${isMounted && 'mounted'}`}
 *    >
 *      innhold
 *    </div>)
 *  : null;
 * };
 * ```
 */

export const useMountTransition = (
  isMounted: boolean,
  unmountDelay: number,
): boolean => {
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
