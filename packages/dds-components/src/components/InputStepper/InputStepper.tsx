import { type Properties } from 'csstype';
import { forwardRef, useId } from 'react';

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

export const InputStepper = forwardRef<HTMLInputElement, InputStepperProps>(
  (
    {
      id,
      className,
      label,
      decreaseButtonLabel,
      increaseButtonLabel,
      componentSize,
      tip,
      errorMessage,
      minValue = 0,
      maxValue = 10,
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
    },
    ref,
  ) => {
    if (
      !isPositiveInteger(minValue) ||
      !isPositiveInteger(maxValue) ||
      !isPositiveInteger(step)
    ) {
      throw new Error('InputStepper does not support negative numbers');
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
    const isDisabled = disabled;
    const isReadOnly = readOnly;
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
        throw new RangeError(
          `Verdien må være mellom ${minValue} og ${maxValue}`,
        );
      }
    };

    const styleVariables: Properties = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-input-stepper-width' as any]: width ? width : '85px',
    };
    if (isDisabled) {
      return (
        <div className={cn(className)}>
          <div>
            <Label
              htmlFor={uniqueId}
              className={cn(inputStyles.label, rest)}
              readOnly={readOnly}
            >
              {label}
            </Label>
          </div>
          <div className={cn(styles['input-container'])}>
            <StatefulInput
              type="text"
              disabled={disabled}
              inputMode="numeric"
              pattern="?[0-9]+"
              id={uniqueId}
              ref={ref}
              style={{ ...style, ...styleVariables }}
              componentSize={componentSize}
              {...getBaseHTMLProps(
                uniqueId,
                cn(styles.textInput),
                htmlProps,
                rest,
              )}
              value={inputValue}
              onChange={handleInput}
              hasErrorMessage={hasErrorMessage}
              aria-invalid={hasErrorMessage ? true : undefined}
              aria-describedby={spaceSeparatedIdListGenerator([
                hasErrorMessage ? errorMessageId : undefined,
                hasTip ? tipId : undefined,
              ])}
            />
          </div>
          {hasMessage &&
            renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
        </div>
      );
    } else if (isReadOnly) {
      return (
        <div className={cn(className)}>
          <div>
            <Label
              readOnly
              htmlFor={uniqueId}
              className={cn(inputStyles.label, rest)}
            >
              {label}
            </Label>
          </div>
          <div className={cn(styles['input-container'])}>
            <StatefulInput
              type="text"
              readOnly={readOnly}
              inputMode="numeric"
              pattern="-?[0-9]+"
              id={uniqueId}
              ref={ref}
              style={{ ...style, ...styleVariables }}
              componentSize={componentSize}
              {...getBaseHTMLProps(
                uniqueId,
                cn(styles.textInput),
                htmlProps,
                rest,
              )}
              value={inputValue}
              onChange={handleInput}
              hasErrorMessage={hasErrorMessage}
              aria-invalid={hasErrorMessage ? true : undefined}
              aria-describedby={spaceSeparatedIdListGenerator([
                hasErrorMessage ? errorMessageId : undefined,
                hasTip ? tipId : undefined,
              ])}
            />
          </div>
          {hasMessage &&
            renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
        </div>
      );
    }
    return (
      <div className={cn(className)}>
        <div>
          <Label htmlFor={uniqueId} className={cn(inputStyles.label, rest)}>
            {label}
          </Label>
        </div>
        <div className={cn(styles['input-container'])}>
          <Button
            aria-label={decreaseButtonLabel ?? `Trekk fra ${label}`}
            purpose="secondary"
            size={componentSize}
            icon={MinusIcon}
            onClick={handleMinus}
            className={cn(
              inputStyles['input--medium'],
              styles['stepButton--left'],
              styles['stepButton'],
            )}
            aria-controls={uniqueId}
          ></Button>
          <StatefulInput
            type="text"
            disabled={disabled}
            inputMode="numeric"
            pattern="-?[0-9]+"
            id={uniqueId}
            ref={ref}
            style={{ ...style, ...styleVariables }}
            componentSize={componentSize}
            {...getBaseHTMLProps(
              uniqueId,
              cn(styles.textInput),
              htmlProps,
              rest,
            )}
            value={inputValue}
            onChange={handleInput}
            hasErrorMessage={hasErrorMessage}
            aria-invalid={hasErrorMessage ? true : undefined}
            aria-describedby={spaceSeparatedIdListGenerator([
              hasErrorMessage ? errorMessageId : undefined,
              hasTip ? tipId : undefined,
            ])}
          />
          <Button
            aria-label={increaseButtonLabel ?? `Legg til ${label}`}
            purpose="secondary"
            size={componentSize}
            icon={PlusIcon}
            onClick={handlePlus}
            className={cn(styles['stepButton--right'], styles['stepButton'])}
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
