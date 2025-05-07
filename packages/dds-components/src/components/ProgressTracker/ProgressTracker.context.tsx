import { createContext, useContext } from 'react';

import { type Direction } from '../../types';

interface ProgressTrackerContextType {
  activeStep: number;
  handleStepChange?: (index: number) => void;
  direction: Direction;
}

export const ProgressTrackerContext = createContext<ProgressTrackerContextType>(
  {
    activeStep: 0,
    direction: 'column',
  },
);

export const useProgressTrackerContext = () =>
  useContext(ProgressTrackerContext);
