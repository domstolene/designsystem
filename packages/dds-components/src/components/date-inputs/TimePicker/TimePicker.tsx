import { type Time } from '@internationalized/date';
import { type AriaTimeFieldProps, useTimeField } from '@react-aria/datepicker';
import { useTimeFieldState } from '@react-stately/datepicker';
import { type Ref, useId, useRef } from 'react';

import { formatTimeSegments } from './TimePicker.utils';
import { useLanguage } from '../../../i18n';
import { cn } from '../../../utils';
import inputStyles from '../../helpers/Input/Input.module.css';
import { type InputProps } from '../../helpers/Input/Input.types';
import { Icon } from '../../Icon';
import { TimeIcon } from '../../Icon/icons';
import { DateInput } from '../common/DateInput';
import styles from '../common/DateInput.module.css';
import { LOCALE } from '../DatePicker/constants';
import { DateSegment } from '../DatePicker/DateField/DateSegment';

export type TimePickerProps = Omit<AriaTimeFieldProps<Time>, 'hideTimeZone'> &
  Pick<
    InputProps,
    'componentSize' | 'errorMessage' | 'tip' | 'style' | 'width' | 'className'
  > & {
    ref?: Ref<HTMLDivElement>;
  };

export function TimePicker({
  componentSize = 'medium',
  width,
  ref,
  ...props
}: TimePickerProps) {
  const lang = useLanguage();

  if (!lang) {
    throw new Error('TimePicker must be used within a DdsProvider');
  }

  const internalRef = useRef<HTMLInputElement>(null);
  const state = useTimeFieldState({
    ...props,
    locale: LOCALE[lang],
  });
  const { labelProps, fieldProps } = useTimeField(
    { ...props, hideTimeZone: true, granularity: 'hour' },
    state,
    internalRef,
  );

  const hasErrorMessage = !!props.errorMessage;
  const hasTip = !!props.tip;

  const uniqueId = props.id ?? useId();
  const errorMessageId = hasErrorMessage
    ? `${uniqueId}-errorMessage`
    : undefined;
  const tipId = hasTip ? `${uniqueId}-tip` : undefined;

  const iconSize = componentSize === 'xsmall' ? 'small' : 'medium';
  const disabled = props.isDisabled || !!fieldProps['aria-disabled'];

  const formattedSegments = formatTimeSegments(state.segments);

  return (
    <DateInput
      {...props}
      errorMessageId={errorMessageId}
      tipId={tipId}
      width={width}
      disabled={disabled}
      required={props.isRequired}
      componentSize={componentSize}
      ref={ref}
      internalRef={internalRef}
      readOnly={props.isReadOnly}
      labelProps={labelProps}
      fieldProps={fieldProps}
      prefix={
        <Icon
          icon={TimeIcon}
          iconSize={iconSize}
          className={cn(
            inputStyles['input-group__absolute-el'],
            inputStyles[`input-group__absolute-el--${componentSize}`],
            disabled && styles['icon-wrapper--disabled'],
            props.isReadOnly && styles['icon-wrapper--readonly'],
          )}
        />
      }
    >
      {formattedSegments.map((segment, i) => (
        <DateSegment
          errorMessageId={errorMessageId}
          tipId={tipId}
          componentSize={componentSize}
          key={i}
          segment={segment}
          state={state}
        />
      ))}
    </DateInput>
  );
}

TimePicker.displayName = 'TimePicker';
