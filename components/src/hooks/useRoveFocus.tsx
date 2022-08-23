import {
  useCallback,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
} from 'react';
import { Direction } from '../types';

export const isKeyboardEvent = (
  e: Event | KeyboardEvent<Element>
): e is KeyboardEvent<Element> =>
  (e as KeyboardEvent<Element>).key !== undefined;

export function useRoveFocus(
  size: number | undefined,
  reset?: boolean,
  direction: Direction = 'column'
): [number, Dispatch<SetStateAction<number>>] {
  const [currentFocus, setCurrentFocus] = useState(0);

  const nextKey = direction === 'row' ? 'ArrowRight' : 'ArrowDown';
  const previousKey = direction === 'row' ? 'ArrowLeft' : 'ArrowUp';

  const handleKeyDown = useCallback(
    (e: Event) => {
      if (!size || !isKeyboardEvent(e)) return;
      if (reset) setCurrentFocus(-1);
      if (e.key === nextKey) {
        // Down arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.key === previousKey) {
        // Up arrow
        e.preventDefault();
        if (currentFocus !== -1) {
          setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
        } else setCurrentFocus(size - 1);
      }
    },
    [size, currentFocus, setCurrentFocus, reset]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}
