import {
  useCallback,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react';

export function useRoveFocus(
  size: number | undefined,
  reset?: boolean
): [number, Dispatch<SetStateAction<number>>] {
  const [currentFocus, setCurrentFocus] = useState(0);

  const handleKeyDown = useCallback(
    e => {
      if (!size) return;
      if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
      if (reset && currentFocus >= 0) {
        console.log(reset);
        setCurrentFocus(-1);
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

export default useRoveFocus;
