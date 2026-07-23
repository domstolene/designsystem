import { type ReactNode, createContext, useContext } from 'react';

import { type Breakpoint } from '../../layout/common/Responsive.types';

interface CollapsibleTableContextProps {
  collapseBelow?: Breakpoint;
  labelsStore: Map<string, ReactNode>;
}

export const CollapsibleTableContext =
  createContext<CollapsibleTableContextProps>({
    labelsStore: new Map(),
  });

export const useCollapsibleTableContext = () =>
  useContext(CollapsibleTableContext);

export const CollapsibleCellContext = createContext(false);

export const useIsCollapsibleChild = () => useContext(CollapsibleCellContext);
