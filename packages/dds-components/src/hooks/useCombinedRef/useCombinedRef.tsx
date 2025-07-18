import type { Ref, RefCallback, RefObject } from 'react';
import { useCallback } from 'react';

/**
 * Kombinerer refs for et element.
 * Eksempel på bruk:
 * ```
 * const MyComponent = ({ref, ...props}) => {
 *
 *  const itemRef = useRef<HTMLDivElement>(null);
 *  const combinedRef = useCombinedRef(ref, itemRef);
 *
 *  return <div ref={combinedRef} {...props}>innhold</div>
 * });
 * ```
 * @param refs array med refs.
 * @template T elementet som refereres til.
 * @returns  callback med kombinerte refs.
 *
 * {@link useCombinedRef}
 */

export function useCombinedRef<T>(
  ...refs: Array<Ref<T> | undefined>
): RefCallback<T> {
  return useCallback((element: T) => {
    refs.filter(Boolean).forEach(ref => {
      if (typeof ref === 'function') ref(element);
      else if (ref && typeof ref === 'object')
        (ref as RefObject<T>).current = element;
    });
  }, refs);
}
