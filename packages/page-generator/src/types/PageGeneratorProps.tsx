import { BaseComponentPropsWithChildren } from '@norges-domstoler/dds-components';
import { PageGeneratorField } from './PageGeneratorField';
import { PageGeneratorRow } from './PageGeneratorRow';

export type PageGeneratorProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /** Definere liste med felt/komponenter og/eller rader med felt/komponenter */
    fields: (PageGeneratorField | PageGeneratorRow)[];
    /** For å hente ut state etter endringer */
    stateOnChange?: (newState: object) => void;
    /** Setter form eller div på Grid-komponenten */
    as: 'div' | 'form';
  }
>;
