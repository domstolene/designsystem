import type { MutableRefObject, RefCallback } from 'react';
import { useCallback } from 'react';

export function useCombinedRef<T>(...refs: React.Ref<T>[]): RefCallback<T> {
  return useCallback(
    (element: T) => {
      refs.forEach(ref => {
        if (typeof ref === 'function') ref(element);
        else if (ref && typeof ref === 'object')
          (ref as MutableRefObject<T>).current = element;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
}
