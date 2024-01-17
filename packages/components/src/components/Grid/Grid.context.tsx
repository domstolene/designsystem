import { createContext, useContext } from 'react';

import { ScreenSize } from '../../hooks';

export interface GridContextProps {
  screenSize: ScreenSize;
}

export const GridContext = createContext<GridContextProps>({
  screenSize: ScreenSize.Large,
});

export const useGridContext = () => {
  return useContext(GridContext);
};
