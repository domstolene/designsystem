import { useId } from 'react';

import { Box, Label, MinusIcon, PlusIcon, getBaseHTMLProps } from '../..';
import { useControllableState } from '../../hooks/useControllableState';
import { createTexts, useTranslation } from '../../i18n';
import { Button } from '../Button';
import { StatefulInput, getInputWidth } from '../helpers';
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
  const { t } = useTranslation();
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

  return (
    <div className={className}>
      <div>
        <Label
          htmlFor={uniqueId}
          readOnly={readOnly}
          className={inputStyles.label}
        >
          {label}
        </Label>
      </div>
      <Box
        className={styles['input-container']}
        width={getInputWidth(width, '180px')}
      >
        {readOnly || disabled ? null : (
          <Button
            aria-label={decreaseButtonLabel ?? `${t(texts.decrease)} ${label}`}
            purpose="secondary"
            size={componentSize}
            icon={MinusIcon}
            onClick={handleMinus}
            className={cn(styles['stepButton--left'], styles['stepButton'])}
            aria-controls={uniqueId}
          ></Button>
        )}
        <Box
          as={StatefulInput}
          width="100%"
          type="text"
          disabled={disabled}
          readOnly={readOnly}
          inputMode="numeric"
          pattern="-?[0-9]+"
          id={uniqueId}
          style={style}
          componentSize={componentSize}
          {...getBaseHTMLProps(uniqueId, styles.textInput, htmlProps, rest)}
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
            aria-label={increaseButtonLabel ?? `${t(texts.increase)} ${label}`}
            purpose="secondary"
            size={componentSize}
            icon={PlusIcon}
            onClick={handlePlus}
            className={cn(styles['stepButton--right'], styles['stepButton'])}
            aria-controls={uniqueId}
          ></Button>
        )}
      </Box>
      {hasMessage &&
        renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </div>
  );
};

InputStepper.displayName = 'InputStepper';

const texts = createTexts({
  decrease: {
    nb: 'Trekk fra',
    no: 'Trekk fra',
    nn: 'Trekk frå',
    en: 'Decrease',
  },
  increase: {
    nb: 'Legg til',
    no: 'Legg til',
    nn: 'Legg til',
    en: 'Increase',
  },
});
