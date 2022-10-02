import { createContext, useContext } from 'react';

type ProgressTrackerContextType = {
  activeStep: number;
};

export const ProgressTrackerContext = createContext<ProgressTrackerContextType>(
  {
    activeStep: 0,
  }
);

export const useProgressTrackerContext = () =>
  useContext(ProgressTrackerContext);
