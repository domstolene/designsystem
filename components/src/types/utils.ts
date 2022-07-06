/**
 * Gir tilbake `T` med properties fra `K` som påkrevd gitt at `Condition` er `true`
 *
 * @template Condition
 * @template T
 * @template K
 */
export type WithRequiredIf<
  Condition extends boolean,
  T,
  K extends keyof T
> = Omit<T, K> & Pick<true extends Condition ? Required<T> : T, K>;
