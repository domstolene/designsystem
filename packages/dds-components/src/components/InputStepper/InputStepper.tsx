import { forwardRef, useId } from 'react';

import { Label, MinusIcon, PlusIcon } from '../..';
import { useControllableState } from '../../hooks/useControllableState';
import { Button } from '../Button';
import { StatefulInput } from '../helpers';
import styles from './InputStepper.module.css';
import { type InputStepperProps } from './InputStepper.types';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import inputStyles from '../helpers/Input/Input.module.css';
import { renderInputMessage } from '../InputMessage';

export const InputStepper = forwardRef<HTMLInputElement, InputStepperProps>(
  (
    {
      id,
      className,
      label,
      decreaseButtonLabel,
      increaseButtonLabel,
      componentSize = 'medium',
      tip,
      errorMessage,
      minValue = 0,
      maxValue = 10,
      defaultValue = 0,
      step = 1,
      onChange,
      htmlProps,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-inputStepper`;
    const [inputValue, setInputValue] = useControllableState<number>({
      defaultValue: defaultValue ?? 0,
      onChange,
    });
    const hasErrorMessage = !!errorMessage;
    const hasMessage = hasErrorMessage;
    const tipId = derivativeIdGenerator(uniqueId, 'tip');
    const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

    const handlePlus = () => {
      if (maxValue != undefined && inputValue + step <= maxValue) {
        setInputValue(+inputValue + +step);
      }
    };
    const handleMinus = () => {
      if (minValue !== undefined && inputValue - step >= minValue) {
        setInputValue(inputValue - step);
      }
    };
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (+e.target.value >= minValue && +e.target.value <= maxValue) {
        setInputValue(Number(e.target.value));
        if (onChange) {
          onChange(e);
        }
      } else {
        throw new RangeError(
          `Verdien må være mellom ${minValue} og ${maxValue}`,
        );
      }
    };
    return (
      <div className={cn(styles.containter, className)}>
        <div>
          <Label htmlFor={uniqueId} className={cn(inputStyles.label, rest)}>
            {label}
          </Label>
        </div>
        <div
          className={cn(
            styles['input-container'],
            hasErrorMessage ? styles.error : '',
          )}
        >
          <Button
            aria-label={decreaseButtonLabel ?? `Trekk fra ${label}`}
            purpose="tertiary"
            icon={MinusIcon}
            onClick={handleMinus}
            className={cn(
              inputStyles['input--medium'],
              styles.stepButton,
              styles[componentSize],
            )}
            aria-controls={uniqueId}
          ></Button>
          <StatefulInput
            type="text"
            inputMode="numeric"
            pattern="-?[0-9]+"
            id={uniqueId}
            ref={ref}
            className={cn(
              styles.textInput,
              styles[componentSize],
              hasErrorMessage ? styles.error : '',
            )}
            value={inputValue}
            onChange={handleInput}
            hasErrorMessage={hasErrorMessage}
            aria-invalid={hasErrorMessage ? true : undefined}
            aria-describedby={spaceSeparatedIdListGenerator([
              hasErrorMessage ? errorMessageId : undefined,
            ])}
            {...htmlProps}
            {...rest}
          />
          <Button
            aria-label={increaseButtonLabel ?? `Legg til ${label}`}
            purpose="tertiary"
            icon={PlusIcon}
            onClick={handlePlus}
            className={cn(styles.stepButton, styles[componentSize], className)}
            aria-controls={uniqueId}
          ></Button>
        </div>
        {hasMessage &&
          renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
      </div>
    );
  },
);

InputStepper.displayName = 'InputStepper';
