import { useId } from 'react';

import { Box, MinusIcon, PlusIcon, getBaseHTMLProps } from '../..';
import styles from './InputStepper.module.css';
import {
  type InputStepperProps,
  isPositiveInteger,
} from './InputStepper.types';
import { useControllableState } from '../../hooks/useControllableState';
import { createTexts, useTranslation } from '../../i18n';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Button, type ButtonProps } from '../Button';
import { StatefulInput, getInputWidth } from '../helpers/Input';
import { renderInputMessage } from '../InputMessage';
import { renderLabel } from '../Typography/Label/Label.utils';

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
  step = 1,
  onChange,
  width,
  htmlProps,
  afterLabelContent,
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
  const showRequiredStyling = !!(rest.required || rest['aria-required']);
  const hideButtons = rest.disabled || rest.readOnly;
  const decreaseLabel =
    decreaseButtonLabel ?? t(texts.decrease(label ?? '', step));
  const increaseLabel =
    increaseButtonLabel ?? t(texts.increase(label ?? '', step));

  function buttonProps(type: 'plus' | 'minus'): ButtonProps {
    const isPlus = type === 'plus';
    return {
      purpose: 'secondary',
      size: componentSize,
      'aria-controls': uniqueId,
      onClick: isPlus ? handleMinus : handlePlus,
      icon: isPlus ? MinusIcon : PlusIcon,
      'aria-label': isPlus ? decreaseLabel : increaseLabel,
      className: cn(styles[`stepButton--${type}`], styles['stepButton']),
    };
  }

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
      {renderLabel({
        label,
        htmlFor: uniqueId,
        readOnly: rest.readOnly,
        showRequiredStyling,
        afterLabelContent,
      })}
      <Box
        className={styles['input-container']}
        width={getInputWidth(width, '180px')}
      >
        {hideButtons ? null : <Button {...buttonProps('plus')} />}
        <Box
          as={StatefulInput}
          width="100%"
          type="text"
          inputMode="numeric"
          pattern="-?[0-9]+"
          id={uniqueId}
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
        {hideButtons ? null : <Button {...buttonProps('minus')} />}
      </Box>
      {hasMessage &&
        renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </div>
  );
};

InputStepper.displayName = 'InputStepper';

const texts = createTexts({
  decrease: (label, n) => ({
    nb: `Reduser ${label} med ${n}`,
    no: `Reduser ${label} med ${n}`,
    nn: `Reduser ${label} med ${n}`,
    en: `Decrease ${label} by ${n}`,
    se: `Unnidit ${label} ${n} loguin`,
  }),
  increase: (label, n) => ({
    nb: `Øk ${label} med ${n}`,
    no: `Øk ${label} med ${n}`,
    nn: `Øk ${label} med ${n}`,
    en: `Increase ${label} by ${n}`,
    se: `Lasit ${label} nummirin ${n}`,
  }),
});
