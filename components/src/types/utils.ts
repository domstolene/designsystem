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

/**
 * Gir tilbake typer fra `T` som matcher `U`
 *
 * @template T en union type
 * @template U delmengde av `T`
 */

export type ExtractStrict<T, U extends T> = U;
