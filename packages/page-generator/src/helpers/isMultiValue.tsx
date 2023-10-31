import { MultiValue, SingleValue } from 'react-select';

export const isMultiValue = (
  obj:
    | SingleValue<Record<string, unknown>>
    | MultiValue<Record<string, unknown>>,
): obj is MultiValue<Record<string, unknown>> => {
  return (obj as MultiValue<Record<string, unknown>>)?.values !== undefined;
};
