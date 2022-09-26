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
