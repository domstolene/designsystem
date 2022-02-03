import { useEffect } from 'react';

export const useOnKeyDown = (
  key: string | string[],
  handler: (event: KeyboardEvent) => void
) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const keys = Array.isArray(key) ? key : [key];
      if (keys.indexOf(event.key) !== -1) {
        handler(event);
      }
    };

    document.addEventListener('keydown', listener, true);

    return () => {
      document.removeEventListener('keydown', listener, true);
    };
  }, [handler]);
};
