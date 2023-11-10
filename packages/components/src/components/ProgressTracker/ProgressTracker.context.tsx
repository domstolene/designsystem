import { createContext, useContext } from 'react';

interface ProgressTrackerContextType {
  activeStep: number;
  handleStepChange?: (index: number) => void;
}

export const ProgressTrackerContext = createContext<ProgressTrackerContextType>(
  {
    activeStep: 0,
  },
);

export const useProgressTrackerContext = () =>
  useContext(ProgressTrackerContext);
