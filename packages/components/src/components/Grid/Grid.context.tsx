import { useContext, createContext } from 'react';
import { ScreenSize } from '@norges-domstoler/dds-core';

export type GridContextProps = {
  screenSize: ScreenSize;
};

export const GridContext = createContext<GridContextProps>({
  screenSize: ScreenSize.Large,
});

export const useGridContext = () => {
  return useContext(GridContext);
};
