import { createContext, useContext } from 'react';

type StepperContextType = {
  activeStep: number;
};

export const StepperContext = createContext<StepperContextType>({
  activeStep: 0
});

export const useStepperContext = () => useContext(StepperContext);
