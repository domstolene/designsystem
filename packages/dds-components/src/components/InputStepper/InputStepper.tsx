import { type Properties } from 'csstype';
import { useId } from 'react';

import { Label, MinusIcon, PlusIcon, getBaseHTMLProps } from '../..';
import { useControllableState } from '../../hooks/useControllableState';
import { Button } from '../Button';
import { StatefulInput } from '../helpers';
import styles from './InputStepper.module.css';
import {
  type InputStepperProps,
  isPositiveInteger,
} from './InputStepper.types';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import inputStyles from '../helpers/Input/Input.module.css';
import { renderInputMessage } from '../InputMessage';

export const InputStepper = ({
  id,
  className,
  label,
  decreaseButtonLabel,
  increaseButtonLabel,
  componentSize,
  tip,
  errorMessage,
  minValue = 0,
  maxValue,
  defaultValue,
  value,
  disabled,
  readOnly,
  step = 1,
  onChange,
  style,
  width,
  htmlProps,
  ...rest
}: InputStepperProps) => {
  if (
    !isPositiveInteger(minValue) ||
    !isPositiveInteger(maxValue) ||
    !isPositiveInteger(step)
  ) {
    throw new Error('minValue, maxValue & step must be a non-negative integer');
  }
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-inputStepper`;
  const [inputValue, setInputValue] = useControllableState<number>({
    defaultValue: defaultValue ?? 0,
    value: value,
    onChange,
  });
  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;
  const hasMessage = hasErrorMessage || hasTip;
  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

  const handlePlus = () => {
    if (maxValue !== undefined && inputValue + step <= maxValue) {
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
      throw new RangeError(`Verdien må være mellom ${minValue} og ${maxValue}`);
    }
  };

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-input-stepper-width' as any]: width ? width : '85px',
  };
  return (
    <div className={className}>
<<<<<<< HEAD
    <div className={className}>
=======
    <div className={cn(className)}>
>>>>>>> 5787c8a2 (ELSA1-565 fix merge conflict)
      <div>
        <Label
          htmlFor={uniqueId}
          readOnly={readOnly}
<<<<<<< HEAD
          className={inputStyles.label}
=======
          className={cn(inputStyles.label)}
>>>>>>> 5787c8a2 (ELSA1-565 fix merge conflict)
        >
          {label}
        </Label>
      </div>
<<<<<<< HEAD
      <div className={styles['input-container']}>
=======
      <div className={cn(styles['input-container'])}>
>>>>>>> 5787c8a2 (ELSA1-565 fix merge conflict)
        {readOnly || disabled ? null : (
          <Button
            aria-label={decreaseButtonLabel ?? `Trekk fra ${label}`}
            purpose="secondary"
            size={componentSize}
            icon={MinusIcon}
            onClick={handleMinus}
            className={cn(styles['stepButton--left'], styles['stepButton'])}
            aria-controls={uniqueId}
          ></Button>
        )}
        <StatefulInput
          type="text"
          disabled={disabled}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          readOnly={readOnly}
>>>>>>> a0922432 (ELSA1-565 fix merge conflict)
=======
          readOnly={readOnly}
>>>>>>> 5787c8a2 (ELSA1-565 fix merge conflict)
          inputMode="numeric"
          pattern="-?[0-9]+"
          id={uniqueId}
          style={{ ...style, ...styleVariables }}
          componentSize={componentSize}
<<<<<<< HEAD
          {...getBaseHTMLProps(uniqueId, styles.textInput, htmlProps, rest)}
=======
          {...getBaseHTMLProps(uniqueId, cn(styles.textInput), htmlProps, rest)}
>>>>>>> 5787c8a2 (ELSA1-565 fix merge conflict)
          value={inputValue}
          onChange={handleInput}
          hasErrorMessage={hasErrorMessage}
          aria-invalid={hasErrorMessage ? true : undefined}
          aria-describedby={spaceSeparatedIdListGenerator([
            hasErrorMessage ? errorMessageId : undefined,
            hasTip ? tipId : undefined,
          ])}
        />
        {readOnly || disabled ? null : (
          <Button
            aria-label={increaseButtonLabel ?? `Legg til ${label}`}
            purpose="secondary"
            size={componentSize}
            icon={PlusIcon}
            onClick={handlePlus}
            className={cn(styles['stepButton--right'], styles['stepButton'])}
            aria-controls={uniqueId}
          ></Button>
        )}
      </div>
      {hasMessage &&
        renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </div>
  );
};
InputStepper.displayName = 'InputStepper';
