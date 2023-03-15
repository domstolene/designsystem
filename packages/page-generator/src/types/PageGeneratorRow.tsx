import { ScreenSize } from '@norges-domstoler/dds-components';
import { PageGeneratorField } from './PageGeneratorField';

export type PageGeneratorRow = {
  rowType: 'button' | 'standard';
  breakpoint?: ScreenSize;
  fields: PageGeneratorField[];
  hide?: boolean;
};
