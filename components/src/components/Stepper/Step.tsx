import styled, { css } from 'styled-components';
import {
  focusVisible,
  focusVisibleTransitionValue,
} from '../../helpers/styling';
import { BaseComponentPropsWithChildren } from '../../types';
import { VisuallyHidden } from '../VisuallyHidden';
import { useStepperContext } from './Stepper.context';
import { stepperTokens } from './Stepper.tokens';

type StepState =
  | 'activeCompleted'
  | 'activeIncomplete'
  | 'inactiveCompleted'
  | 'inactiveIncomplete';

const toStepState = (active: boolean, completed: boolean): StepState =>
  active
    ? completed
      ? 'activeCompleted'
      : 'activeIncomplete'
    : completed
    ? 'inactiveCompleted'
    : 'inactiveIncomplete';

const { stepNumber, connector, stepButton } = stepperTokens;

type StepStyleProps = { state: StepState; clickable: boolean };

type BaseStepProps = {
  /** Om steget er valgt eller ikke. Settes av konsument. */
  active?: boolean;

  /** Om steget er ferdig eller ikke. Settes av konsument */
  completed?: boolean;

  /** Indeksen til steget. NB! Denne settes automatisk av <Stepper /> og skal ikke settes manuelt. */
  index?: number;
};

type StepProps =
  | ({
      /** Click-handler som gjør det mulig for bruker å klikke på steget for å navigere. Valgfri. */
      onClick: (stepIndex: number) => void;
    } & BaseComponentPropsWithChildren<HTMLButtonElement, BaseStepProps>)
  | ({
      onClick?: undefined;
    } & BaseComponentPropsWithChildren<HTMLDivElement, BaseStepProps>);

const stepSize = '40px';

const StepWrapper = styled.li`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;

  :not(:last-child):after {
    content: '';
    display: block;
    border-top: 1px solid ${connector.color};
    position: absolute;
    width: 100%;
    left: 50%;
    top: calc(${stepSize} / 2);
  }
`;

const StepContentWrapper = styled.div<StepStyleProps>`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ${focusVisibleTransitionValue};

  :focus-visible {
    ${focusVisible}
  }

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}
`;

const StepNumber = styled.div<StepStyleProps>`
  border-radius: 50%;
  border: 1px solid;
  padding: 5px;
  width: ${stepSize};
  height: ${stepSize};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  ${({ state }) => {
    switch (state) {
      case 'activeIncomplete':
        return css`
          border-color: ${stepNumber.active.borderColor};
          color: ${stepNumber.active.color};
          background-color: ${stepNumber.active.backgroundColor};
        `;
      case 'activeCompleted':
      case 'inactiveCompleted':
        return css`
          border-color: ${stepNumber.completed.borderColor};
          color: ${stepNumber.completed.color};
          background-color: ${stepNumber.completed.backgroundColor};
        `;
      case 'inactiveIncomplete':
        return css`
          border-color: ${stepNumber.inactive.borderColor};
          color: ${stepNumber.inactive.color};
          background-color: ${stepNumber.inactive.backgroundColor};
        `;
    }
  }}
`;

const StepCompletedCheck = styled.div`
  border: solid ${stepNumber.completed.color};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  width: 27.5%;
  height: 55%;
  margin-top: -2px;
`;

const StepText = styled.div<StepStyleProps>`
  font-family: ${stepButton.fontFamily};
  font-size: ${stepButton.fontSize};
  margin-top: ${stepButton.marginTop};

  ${({ state, clickable }) => {
    switch (state) {
      case 'activeCompleted':
      case 'activeIncomplete':
        return css`
          color: ${stepButton.active.color};
          text-decoration ${
            clickable ? stepButton.active.textDecoration : 'none'
          };
        `;
      case 'inactiveCompleted':
        return css`
          color: ${stepButton.completed.color};
          text-decoration ${
            clickable ? stepButton.completed.textDecoration : 'none'
          };
        `;
      case 'inactiveIncomplete':
        return css`
          color: ${stepButton.inactive.color};
          text-decoration ${
            clickable ? stepButton.inactive.textDecoration : 'none'
          };
        `;
    }
  }}
`;

const getVisuallyHiddenText = (active: boolean, completed: boolean) =>
  `${active ? '' : 'Trinn, '}${completed ? 'Ferdig, ' : 'Ikke ferdig, '}`;

/**
 * @beta Denne komponenten er ikke ferdig og endringer kan gjøres utenfor semver.
 */
export const Step = (props: StepProps) => {
  const { index = 0, completed = false, children } = props;

  const { activeStep } = useStepperContext();
  const active = activeStep === index;

  const styleProps = {
    state: toStepState(active, completed),
    clickable: props.onClick !== undefined,
  };

  return (
    <StepWrapper aria-current={active ? 'step' : undefined}>
      <StepContentWrapper
        {...styleProps}
        as={props.onClick ? 'button' : 'div'}
        onClick={props.onClick ? () => props.onClick(index) : undefined}
      >
        <StepNumber {...styleProps}>
          {completed ? <StepCompletedCheck /> : index + 1}
        </StepNumber>
        <StepText {...styleProps}>
          <VisuallyHidden as="span">
            {getVisuallyHiddenText(active, completed)}
          </VisuallyHidden>
          {children}
        </StepText>
      </StepContentWrapper>
    </StepWrapper>
  );
};
