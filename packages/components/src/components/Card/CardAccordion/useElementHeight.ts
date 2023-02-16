import { useEffect, useState } from 'react';

export function useElementHeight(element: HTMLDivElement | null): number {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeight(element.offsetHeight || 0);
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [element]);

  return height;
}
