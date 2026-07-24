import { type SortOrder } from '../SortCell';

export interface HeaderCellToSort {
  name: string;
  dataName: string;
  sortOrder?: SortOrder | 'none';
  isSorted?: boolean;
}

export const headerCells: Array<HeaderCellToSort> = [
  {
    name: 'Dommer',
    dataName: 'dommer',
    sortOrder: 'none',
  },
  {
    name: 'Domstol',
    dataName: 'domstol',
    sortOrder: 'none',
  },
  {
    name: 'Favoritt rett',
    dataName: 'favorittRett',
    sortOrder: 'none',
  },
  {
    name: 'Favoritt dyr',
    dataName: 'favorittDyr',
    sortOrder: 'none',
  },
];

export interface CellDataToSort {
  dommer: string;
  domstol: string;
  favorittRett: string;
  favorittDyr: string;
}

export const data: Array<CellDataToSort> = [
  {
    dommer: 'Sandra Lovsetter',
    domstol: 'Salten og Lofoten tingrett',
    favorittRett: 'Pizza',
    favorittDyr: 'Hund',
  },
  {
    dommer: 'Marie Bjerke',
    domstol: 'Midtre Hålogaland tingrett',
    favorittRett: 'Burger',
    favorittDyr: 'Katt',
  },
  {
    dommer: 'Andreas Olsen',
    domstol: 'Nord-Troms og Senja tingrett',
    favorittRett: 'Pasta',
    favorittDyr: 'Fisk',
  },
  {
    dommer: 'Liv Orten',
    domstol: 'Øst-Finnmark tingrett',
    favorittRett: 'Sushi',
    favorittDyr: 'Hest',
  },
];

export const mapCellContents = (
  data: Array<CellDataToSort>,
  headerCells: Array<HeaderCellToSort>,
): Array<Array<string>> =>
  data.map(item =>
    headerCells.map(headerCell =>
      typeof item[headerCell.dataName as keyof CellDataToSort] !== 'undefined'
        ? item[headerCell.dataName as keyof CellDataToSort]
        : '',
    ),
  );
