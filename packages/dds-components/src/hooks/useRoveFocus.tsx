import {
  type Dispatch,
  type KeyboardEvent,
  type SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { type Direction } from '../types';

export const isKeyboardEvent = (
  e: Event | KeyboardEvent<Element>,
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
 * @param active om fokus skal kontrolleres av hooken. Når status blir inaktiv vil fokusrekkefølge nullstilles.
 * @param direction retning elementene blas i.
 * @param noWrap om indeksen skal 'wrappe' rundt til 0 hvis den går over size - 1, eller til size - 1 hvis den går under 0.
 * @returns hook par: indeksen til fokuserte elemenentet og funksjonen som håndterer fokus.
 */

export function useRoveFocus(
  size?: number,
  active?: boolean,
  direction: Direction = 'column',
  noWrap?: boolean,
): [number, Dispatch<SetStateAction<number>>] {
  const [currentFocusIndex, setCurrentFocusIndex] = useState(-1);

  const nextKey = direction === 'row' ? 'ArrowRight' : 'ArrowDown';
  const previousKey = direction === 'row' ? 'ArrowLeft' : 'ArrowUp';

  const handleKeyDown = useCallback(
    (e: Event) => {
      if (!size || !isKeyboardEvent(e)) return;
      if (e.key === nextKey) {
        // Down / Right arrow
        e.preventDefault();
        setCurrentFocusIndex(prev => {
          if (prev === size - 1) return noWrap ? prev : 0;
          return prev + 1;
        });
      } else if (e.key === previousKey) {
        // Up / Left arrow
        e.preventDefault();
        setCurrentFocusIndex(prev => {
          if (prev === -1 || prev === 0) return noWrap ? prev : size - 1;
          return prev - 1;
        });
      }
    },
    [size, setCurrentFocusIndex, direction, noWrap],
  );

  useEffect(() => {
    if (!active) {
      setCurrentFocusIndex(-1);
      return;
    }

    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown, active]);

  return [currentFocusIndex, setCurrentFocusIndex];
}
