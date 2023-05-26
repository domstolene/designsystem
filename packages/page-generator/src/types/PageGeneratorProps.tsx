import { BaseComponentPropsWithChildren } from '@norges-domstoler/dds-components/dist/cjs/types';
import { PageGeneratorField } from './PageGeneratorField';
import { PageGeneratorRow } from './PageGeneratorRow';

export type PageGeneratorProps = BaseComponentPropsWithChildren<
  HTMLElement | HTMLFormElement,
  {
    /** Definere liste med felt/komponenter og/eller rader med felt/komponenter */
    fields: (PageGeneratorField | PageGeneratorRow)[];
    /** For å hente ut state etter endringer */
    stateOnChange?: (newState: object) => void;
    /** Setter form eller div på Grid-komponenten */
    as: 'div' | 'form';
  }
>;
