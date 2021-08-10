import { SortOrder } from './SortCell';

export type HeaderCellToSort = {
  name: string;
  dataName: string;
  sortOrder?: SortOrder;
  isSorted?: boolean;
};

export const headerCells: HeaderCellToSort[] = [
  {
    name: 'Arbeidstakers navn',
    dataName: 'name',
    sortOrder: 'none'
  },
  {
    name: 'Fødselsnummer',
    dataName: 'fnumber',
    sortOrder: 'none'
  },
  {
    name: 'Arbeidsgivernavn',
    dataName: 'employer',
    sortOrder: 'none'
  },
  {
    name: 'Org.nr',
    dataName: 'orgnumber',
    sortOrder: 'none'
  },
  {
    name: 'Stilling',
    dataName: 'percentage'
  }
];

export type CellDataToSort = {
  name: string;
  fnumber: string;
  employer: string;
  orgnumber: string;
  percentage: string;
};

export const data: CellDataToSort[] = [
  {
    name: 'Sandra Lovsetter',
    fnumber: '01048000138',
    employer: 'Domstolsadministrasjonen',
    orgnumber: '974713659',
    percentage: '100%'
  },
  {
    name: 'Marie Bjerke',
    fnumber: '12046782540',
    employer: 'Bouvet ASA',
    orgnumber: '482905761',
    percentage: '100%'
  },
  {
    name: 'Andreas Olsen',
    fnumber: '23117723456',
    employer: 'Direktoratet for mineralforvaltning',
    orgnumber: '123456789',
    percentage: '100%'
  },
  {
    name: 'Liv Jensen',
    fnumber: '07127523456',
    employer: 'Bekk Consulting AS',
    orgnumber: '987654321',
    percentage: '100%'
  }
];

export const mapCellContents = (
  data: CellDataToSort[],
  headerCells: HeaderCellToSort[]
): string[][] =>
  data.map(item =>
    headerCells.map(headerCell =>
      typeof item[headerCell.dataName as keyof CellDataToSort] !== 'undefined'
        ? (item[headerCell.dataName as keyof CellDataToSort] as string)
        : ''
    )
  );
