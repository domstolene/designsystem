import { useEffect, useState } from 'react';
import { Nullable } from '../../../types';

export function useElementHeight(
  element: HTMLDivElement | null,
): number | null {
  const [height, setHeight] = useState<Nullable<number>>(null);

  useEffect(() => {
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeight(element.offsetHeight);
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [element]);

  return height;
}
