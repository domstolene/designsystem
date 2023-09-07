import {
  PageGeneratorField,
  PageGeneratorRow,
  FieldWithValidations,
} from '../types';

export const isFieldWithValidations = (
  obj: PageGeneratorField | PageGeneratorRow
): obj is FieldWithValidations => {
  return (obj as FieldWithValidations).validations !== undefined;
};
