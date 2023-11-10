import { SelectOption } from '@norges-domstoler/dds-components';
import { PropsValue } from 'react-select';

export type PageGeneratorStateOptionTypes =
  | string
  | number
  | boolean
  | readonly string[]
  | undefined
  | PropsValue<SelectOption<unknown>>;

export type PageGeneratorState<StateOptionTypes> = Record<
  string,
  StateOptionTypes
>;
