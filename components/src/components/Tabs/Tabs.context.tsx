import { createContext, RefObject, useContext } from 'react';
import { Direction } from '../../types';
import { Property } from 'csstype';

type Tabs = {
  activeTab: number;
  tabsId: string;
  handleTabChange: (index: number) => void;
  tabListRef: RefObject<HTMLDivElement> | null;
  tabPanelsRef: RefObject<HTMLDivElement> | null;
  hasTabFocus: boolean;
  setHasTabFocus: (hasFocus: boolean) => void;
  tabContentDirection: Direction;
  tabWidth: Property.Width;
};

export const TabsContext = createContext<Tabs>({
  activeTab: 0,
  tabsId: '',
  handleTabChange: () => null,
  tabListRef: null,
  tabPanelsRef: null,
  hasTabFocus: false,
  setHasTabFocus: () => null,
  tabContentDirection: 'row',
  tabWidth: '150px',
});
export const useTabsContext = () => useContext(TabsContext);
