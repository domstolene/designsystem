import { type Callback } from '../types';

export const combineHandlers = <T,>(
  handler1?: Callback<T>,
  handler2?: Callback<T>,
): Callback<T> => {
  const callback: Callback<T> = event => {
    handler1?.(event);
    handler2?.(event);
  };
  return callback;
};
