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
  | 'inactiveIncomplete'
  | 'disabled';

const toStepState = (
  active: boolean,
  completed: boolean,
  disabled: boolean
): StepState => {
  if (disabled) {
    return 'disabled';
  }

  if (active) {
    return completed ? 'activeCompleted' : 'activeIncomplete';
  } else {
    return completed ? 'inactiveCompleted' : 'inactiveIncomplete';
  }
};

const { stepNumber, stepText, stepContentWrapper } = stepperTokens;

type StepStyleProps = {
  state: StepState;
  clickable: boolean;
};

type BaseStepProps = {
  /** Om steget er valgt eller ikke. Settes av konsument. */
  active?: boolean;

  /** Om steget er ferdig eller ikke. Settes av konsument */
  completed?: boolean;

  /** Om steget skal være disabled. Settes av konsument.
   * @default false
   */
  disabled?: boolean;

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

const StepWrapper = styled.li`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const StepContentWrapper = styled.div<StepStyleProps>`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${stepContentWrapper.gap};
  transition: ${focusVisibleTransitionValue};

  :focus-visible {
    ${focusVisible}
  }

  ${({ clickable, state }) =>
    clickable &&
    state !== 'disabled' &&
    css`
      cursor: pointer;
    `}
`;

const StepNumber = styled.div<StepStyleProps>`
  border-radius: 50%;
  border: ${stepNumber.borderWidth} solid;
  width: ${stepNumber.size};
  height: ${stepNumber.size};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-size: ${stepNumber.fontSize};
  font-weight: 600;

  ${({ state, clickable }) => {
    switch (state) {
      case 'activeIncomplete':
        return css`
          border-color: ${stepNumber.active.borderColor};
          color: ${stepNumber.active.color};
          background-color: ${stepNumber.active.backgroundColor};
        `;
      case 'activeCompleted':
        return css`
          border-color: ${stepNumber.completed.borderColor};
          color: ${stepNumber.completed.color};
          background-color: ${stepNumber.completed.backgroundColor};
        `;
      case 'inactiveCompleted':
        return css`
          border-color: ${stepNumber.completed.borderColor};
          color: ${stepNumber.completed.color};
          background-color: ${stepNumber.completed.backgroundColor};

          ${clickable &&
          css`
            :hover {
              border-color: ${stepNumber.completed.hover.borderColor};
              color: ${stepNumber.completed.hover.color};
              background-color: ${stepNumber.completed.hover.backgroundColor};
            }
          `}
        `;
      case 'inactiveIncomplete':
        return css`
          border-color: ${stepNumber.inactive.borderColor};
          color: ${stepNumber.inactive.color};
          background-color: ${stepNumber.inactive.backgroundColor};

          ${clickable &&
          css`
            :hover {
              border-color: ${stepNumber.inactive.hover.borderColor};
              color: ${stepNumber.inactive.hover.color};
              background-color: ${stepNumber.inactive.hover.backgroundColor};
            }
          `}
        `;
      case 'disabled':
        return css`
          border-color: ${stepNumber.disabled.borderColor};
          color: ${stepNumber.disabled.color};
          background-color: ${stepNumber.disabled.backgroundColor};
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
  font-family: ${stepText.fontFamily};
  font-size: ${stepText.fontSize};

  ${({ state, clickable }) => {
    switch (state) {
      case 'activeCompleted':
      case 'activeIncomplete':
        return css`
          color: ${stepText.active.color};
          text-decoration ${stepText.active.textDecoration};
        `;
      case 'inactiveCompleted':
      case 'inactiveIncomplete':
        return css`
          color: ${stepText.inactive.color};
          text-decoration ${stepText.inactive.textDecoration};
          ${
            clickable &&
            css`
          :hover {
            text-decoration ${stepText.inactive.hover.textDecoration};
          }
          `
          }
        `;
      case 'disabled':
        return css`
          color: ${stepText.disabled.color};
          text-decoration: ${stepText.disabled.textDecoration};
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
  const { index = 0, completed = false, disabled = false, children } = props;

  const { activeStep } = useStepperContext();
  const active = activeStep === index;

  const styleProps = {
    state: toStepState(active, completed, disabled),
    clickable: props.onClick !== undefined,
  };

  return (
    <StepWrapper aria-current={active ? 'step' : undefined}>
      <StepContentWrapper
        {...styleProps}
        as={props.onClick ? 'button' : 'div'}
        onClick={
          !disabled && props.onClick ? () => props.onClick(index) : undefined
        }
        disabled={disabled}
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
