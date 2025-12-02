import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useState,
} from 'react';

import { useCallbackRef } from '../useCallbackRef';

export interface UseControllableStateProps<T> {
  /**Verdi. */
  value?: T;
  /**Default verdi. */
  defaultValue?: T | (() => T);
  /** `onChange` funksjon. */
  onChange?: (value: T) => void;
}

/**
 * The `useControllableState` hook returns the state and function that updates the state, just like React.useState does.
 */

/**
 * Håndterer bruk av state slik at den kan bli enten kontrollert eller ukontrollert ut av boksen.
 * @template T typen til verdien.
 * @param {{
 *  value?: T;
 *  defaultValue?: T | (() => T);
 *  onChange?: (value: T) => void;
 * }} props verdi, default verdi ved ukontrollert state og funksjon til å kotrnollere `value`.
 * @returns {[T, Dispatch<SetStateAction<T>>]} state og funksjon til å kontrollere den.
 * @example
 * ```tsx
 * const MyComponent = ({
 *   onChange,
 *  checked: checkedProp,
 *  defaultChecked
 * }) => {
 *  const [checked, setChecked] = useControllableState({
 *    value: checkedProp,
 *    defaultValue: defaultChecked ?? false,
 *    onChange,
 *  });
 *  return (
 *    <input
 *      checked={checked}
 *      onChange={e => setChecked(e.target.checked)}
 *      type="checkbox"
 *    />
 *  ) };
 * ```
 */

export function useControllableState<T>(
  props: UseControllableStateProps<T>,
): [T, Dispatch<SetStateAction<T>>] {
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

/**
 * The `useControllableGroupState` hook returns the group value and handleChange function to control it.
 */
export interface UseControllableGroupStateProps<T> extends Pick<
  UseControllableStateProps<T>,
  'defaultValue' | 'value'
> {
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: T) => void;
}

export function useControllableGroupState<T>(
  props: UseControllableGroupStateProps<T>,
) {
  const { value, defaultValue, onChange } = props;
  const [uncontrolledValue, setUncontrolledValue] = useState<T | undefined>(
    defaultValue,
  );
  const isControlled = value !== undefined;
  const groupValue = isControlled ? value : uncontrolledValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as T;
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    if (onChange) {
      onChange(e, newValue);
    }
  };

  return { groupValue, handleChange };
}
