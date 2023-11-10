import { SelectOption } from '@norges-domstoler/dds-components';
import { MultiValue, SingleValue } from 'react-select';

export const isMultiValue = (
  obj: SingleValue<SelectOption<unknown>> | MultiValue<SelectOption<unknown>>,
): obj is MultiValue<SelectOption<unknown>> => {
  return (obj as MultiValue<SelectOption<unknown>>)?.values !== undefined;
};
