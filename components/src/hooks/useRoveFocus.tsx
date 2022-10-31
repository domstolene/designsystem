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

/**
 * Bytter fokus mellom elementer i en gruppe med piltaster og ikke Tab, og looper fokus i gruppen. Typisk bruk:
 * ```
 * import elements from './elements';
 * import RoveItem from './RoveItem';
 *
 * const MyComponent = () => {
 *  const [focus, setFocus] = useRoveFocus(elements.length);
 *
 *  return (
 *  <ul>
 *    {elements.map((element, index) => (
 *    <li key={element}>
 *      <RoveItem index={index} focus={focus === index} setFocus={setFocus}>{element.name}</RoveItem>
 *    </li>
 *    ))}
 *  </ul>)
 * }
 * ```
 * @param size antall elementer i gruppen.
 * @param reset om fokus i gruppen skal nullstilles; når man tabber seg inn i gruppen skal focus være nullstilt.
 * @param direction retning elementene blas i.
 * @returns hook par: indeksen til fokuserte elemenentet og funksjonen som håndterer fokus.
 */

export function useRoveFocus(
  size?: number,
  reset?: boolean,
  direction: Direction = 'column'
): [number, Dispatch<SetStateAction<number>>] {
  const [currentFocusIndex, setCurrentFocusIndex] = useState(-1);

  const nextKey = direction === 'row' ? 'ArrowRight' : 'ArrowDown';
  const previousKey = direction === 'row' ? 'ArrowLeft' : 'ArrowUp';

  const handleKeyDown = useCallback(
    (e: Event) => {
      if (!size || !isKeyboardEvent(e)) return;
      if (reset) setCurrentFocusIndex(-1);
      if (e.key === nextKey) {
        // Down arrow
        e.preventDefault();
        setCurrentFocusIndex(
          currentFocusIndex === size - 1 ? 0 : currentFocusIndex + 1
        );
      } else if (e.key === previousKey) {
        // Up arrow
        e.preventDefault();
        if (currentFocusIndex !== -1) {
          setCurrentFocusIndex(
            currentFocusIndex === 0 ? size - 1 : currentFocusIndex - 1
          );
        } else setCurrentFocusIndex(size - 1);
      }
    },
    [size, currentFocusIndex, setCurrentFocusIndex, reset]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocusIndex, setCurrentFocusIndex];
}
