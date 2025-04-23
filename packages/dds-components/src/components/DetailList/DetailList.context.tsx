import { createContext, useContext } from 'react';

import { type Breakpoint } from '../layout';

interface DetailListContextProps {
  smallScreenBreakpoint?: Breakpoint;
}

export const DetailListContext = createContext<DetailListContextProps>({});
export const useDetailListContext = () => useContext(DetailListContext);
