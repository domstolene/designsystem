import { type Dispatch, type SetStateAction, useState } from 'react';

import { useCallbackRef } from './useCallbackRef';

export interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
}

/**
 * The `useControllableState` hook returns the state and function that updates the state, just like React.useState does.
 */
export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const { value: valueProp, defaultValue, onChange } = props;

  const onChangeProp = useCallbackRef(onChange);

  const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T);
  const controlled = valueProp !== undefined;
  const value = controlled ? valueProp : uncontrolledState;

  const setValue = useCallbackRef(
    (next: SetStateAction<T>) => {
      const setter = next as (prevState?: T) => T;
      const nextValue = typeof next === 'function' ? setter(value) : next;

      if (!controlled) {
        setUncontrolledState(nextValue);
      }

      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value],
  );

  return [value, setValue] as [T, Dispatch<SetStateAction<T>>];
}
