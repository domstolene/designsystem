import { PageGeneratorField, SectionGeneratorRow } from '../types';

export const isSectionGeneratorRow = (
  obj: PageGeneratorField | SectionGeneratorRow,
): obj is SectionGeneratorRow => {
  return (obj as SectionGeneratorRow).rowType !== undefined;
};
