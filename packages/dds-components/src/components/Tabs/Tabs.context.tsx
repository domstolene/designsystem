import { type RefObject, createContext, useContext } from 'react';

import { type AddTabButtonProps } from './AddTabButton';
import { type TabSize } from './Tabs';
import { type Direction } from '../../types';

interface Tabs {
  activeTab: number;
  tabsId: string;
  size: TabSize;
  handleTabChange: (index: number) => void;
  tabListRef: RefObject<HTMLDivElement | null> | null;
  tabPanelsRef: RefObject<HTMLDivElement | null> | null;
  hasTabFocus: boolean;
  setHasTabFocus: (hasFocus: boolean) => void;
  tabContentDirection: Direction;
  addTabButtonProps?: Omit<AddTabButtonProps, 'index'>;
}

export const TabsContext = createContext<Tabs>({
  activeTab: 0,
  tabsId: '',
  size: 'small',
  handleTabChange: () => null,
  tabListRef: null,
  tabPanelsRef: null,
  hasTabFocus: false,
  setHasTabFocus: () => null,
  tabContentDirection: 'row',
  addTabButtonProps: undefined,
});
export const useTabsContext = () => useContext(TabsContext);
