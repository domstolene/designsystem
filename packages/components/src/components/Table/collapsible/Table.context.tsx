import { useContext, createContext } from 'react';
import { HeaderValues } from '../Table.types';

type CollapsibleTableContextProps = {
  isCollapsed?: boolean;
  headerValues: HeaderValues;
  definingColumnIndex: number[];
};

export const CollapsibleTableContext =
  createContext<CollapsibleTableContextProps>({
    headerValues: [],
    definingColumnIndex: [0],
  });
export const useCollapsibleTableContext = () =>
  useContext(CollapsibleTableContext);
