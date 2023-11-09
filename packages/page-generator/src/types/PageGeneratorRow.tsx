import { ScreenSize } from '@norges-domstoler/dds-components';
import { PageGeneratorField } from './PageGeneratorField';

export interface PageGeneratorRow {
  rowType: 'button' | 'standard';
  breakpoint?: ScreenSize;
  fields: PageGeneratorField[];
  hide?: boolean;
}
