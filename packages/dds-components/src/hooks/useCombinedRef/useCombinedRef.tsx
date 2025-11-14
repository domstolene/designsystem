import type { Ref, RefCallback, RefObject } from 'react';
import { useCallback } from 'react';

/**
 * Kombinerer refs for et element.
 *
 * @template T elementet som refereres til.
 * @param {Array<Ref<T> | undefined>} refs array med refs.
 * @returns {RefCallback<T>} callback med kombinerte refs.
 * @example
 * ```tsx
 * function MyComponent(ref) {
 *
 *  const itemRef = useRef<HTMLDivElement>(null);
 *  const combinedRef = useCombinedRef(ref, itemRef);
 *
 *  return <div ref={combinedRef}>innhold</div>
 * });
 * ```
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
