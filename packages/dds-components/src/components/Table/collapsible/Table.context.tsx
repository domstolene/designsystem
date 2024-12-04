import { createContext, useContext } from 'react';

import { type HeaderValues } from '../normal/Table.types';

interface CollapsibleTableContextProps {
  isCollapsed?: boolean;
  headerValues: HeaderValues;
  definingColumnIndex: Array<number>;
}

export const CollapsibleTableContext =
  createContext<CollapsibleTableContextProps>({
    headerValues: [],
    definingColumnIndex: [0],
  });
export const useCollapsibleTableContext = () =>
  useContext(CollapsibleTableContext);
