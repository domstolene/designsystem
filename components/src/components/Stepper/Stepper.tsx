import {
  Children,
  cloneElement,
  forwardRef,
  Fragment,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { StepperContext } from './Stepper.context';
import { stepperTokens } from './Stepper.tokens';

const StepsWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${stepperTokens.stepsWrapper.gap};
  margin: 0;
  padding: 0;
`;

const StepsConnector = styled.div`
  margin-left: calc(
    (${stepperTokens.stepNumber.size} / 2) -
      (${stepperTokens.connector.width} / 2)
  );
  height: ${stepperTokens.connector.height};
  border-right: ${stepperTokens.connector.width} solid
    ${stepperTokens.connector.color};
`;

type StepperProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til det aktive steget. */
    activeStep?: number;
  }
>;

/**
 * @beta Denne komponenten er ikke ferdig og endringer kan gjøres utenfor semver.
 */
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
      ref,
    };

    const steps = Children.map(children, (step, index) => {
      if (!isValidElement(step)) {
        return false;
      }

      return cloneElement(step, {
        ...step.props,
        index,
      });
    })
      ?.filter(Boolean)
      .map((child, index) => {
        if (index === 0) {
          return child;
        }
        return (
          <Fragment key={index}>
            <StepsConnector aria-hidden />
            {child}
          </Fragment>
        );
      });

    return (
      <StepperContext.Provider
        value={{
          activeStep: thisActiveStep,
        }}
      >
        <div role="group" aria-label="progress" {...containerProps}>
          <StepsWrapper>{steps}</StepsWrapper>
        </div>
      </StepperContext.Provider>
    );
  }
);
