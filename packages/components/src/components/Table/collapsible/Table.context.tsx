import { createContext, useContext } from 'react';

import { type HeaderValues } from '../Table.types';

interface CollapsibleTableContextProps {
  isCollapsed?: boolean;
  headerValues: HeaderValues;
  definingColumnIndex: number[];
}

export const CollapsibleTableContext =
  createContext<CollapsibleTableContextProps>({
    headerValues: [],
    definingColumnIndex: [0],
  });
export const useCollapsibleTableContext = () =>
  useContext(CollapsibleTableContext);
