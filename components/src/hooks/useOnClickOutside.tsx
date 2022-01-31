import { useEffect } from 'react';

export function useOnClickOutside(
  element: HTMLElement | HTMLElement[] | null | null[],
  handler: Function
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const elements = Array.isArray(element) ? element : [element];
      let targetElement = event.target as HTMLElement;

      while (targetElement) {
        if (elements.indexOf(targetElement) != -1) {
          return;
        }
        targetElement = targetElement.parentNode as HTMLElement;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [element, handler]);
}
