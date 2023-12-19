import type { SelectOption } from './Select';

export const createSelectOptions = <TValue extends string | number>(
  ...args: TValue[]
): SelectOption<TValue>[] => args.map(v => ({ label: v, value: v }));
