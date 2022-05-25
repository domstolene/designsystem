import { createContext, RefObject, useContext } from 'react';

type Tabs = {
  selectedTab: number;
  tabsId: string;
  handleTabChange: (index: number) => void;
  tabListRef: RefObject<HTMLDivElement> | null;
  tabPanelsRef: RefObject<HTMLDivElement> | null;
};

export const TabsContext = createContext<Tabs>({
  selectedTab: 0,
  tabsId: '',
  handleTabChange: () => null,
  tabListRef: null,
  tabPanelsRef: null
});
export const useTabsContext = () => useContext(TabsContext);
