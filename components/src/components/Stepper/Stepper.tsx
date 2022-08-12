import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { StepperContext } from './Stepper.context';

const StepsWrapper = styled.ol`
  display: flex;
  margin: 0;
  padding: 0;
`;

type StepperProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til det aktive steget. */
    activeStep?: number;
  }
>;

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (props, ref) => {
    const {
      id,
      activeStep = 0,
      children,
      className,
      htmlProps,
      ...rest
    } = props;

    const [thisActiveStep, setActiveStep] = useState(activeStep);

    useEffect(() => {
      if (activeStep !== undefined && activeStep != thisActiveStep) {
        setActiveStep(activeStep);
      }
    }, [activeStep, thisActiveStep]);

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref
    };

    const steps = Children.map(children, (step, index) => {
      if (!isValidElement(step)) {
        return false;
      }

      return cloneElement(step, {
        ...step.props,
        index
      });
    })?.filter(Boolean);

    return (
      <StepperContext.Provider
        value={{
          activeStep: thisActiveStep
        }}
      >
        <div role="group" aria-label="progress" {...containerProps}>
          <StepsWrapper>{steps}</StepsWrapper>
        </div>
      </StepperContext.Provider>
    );
  }
);
