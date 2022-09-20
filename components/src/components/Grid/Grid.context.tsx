import { useContext, createContext } from 'react';
import { ScreenSize } from '../../hooks';

export type GridContextProps = {
  screenSize: ScreenSize;
};

export const GridContext = createContext<GridContextProps>({
  screenSize: ScreenSize.Large,
});

export const useGridContext = () => {
  return useContext(GridContext);
};
