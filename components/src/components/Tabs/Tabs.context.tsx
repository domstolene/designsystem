import { createContext, RefObject, useContext } from 'react';

type Tabs = {
  selectedTab: number;
  tabsId: string;
  handleTabChange: (index: number) => void;
  tabListRef: RefObject<HTMLDivElement> | null;
  tabPanelsRef: RefObject<HTMLDivElement> | null;
  hasTabFocus: boolean;
  setHasTabFocus: (hasFocus: boolean) => void;
};

export const TabsContext = createContext<Tabs>({
  selectedTab: 0,
  tabsId: '',
  handleTabChange: () => null,
  tabListRef: null,
  tabPanelsRef: null,
  hasTabFocus: false,
  setHasTabFocus: () => null
});
export const useTabsContext = () => useContext(TabsContext);
