import {
  type CalendarDate,
  type DateValue,
  createCalendar,
} from '@internationalized/date';
import {
  type AriaDateFieldOptions,
  useDateField,
  type useDatePicker,
} from '@react-aria/datepicker';
import { useLocale } from '@react-aria/i18n';
import { useDateFieldState } from '@react-stately/datepicker';
import { type Ref, useRef } from 'react';

import { CalendarButton } from './CalendarButton';
import { formatDateFieldSegments } from './DateField.utils';
import { DateSegment } from './DateSegment';
import { createTexts, useTranslation } from '../../../../i18n';
import { cn } from '../../../../utils';
import { ClearButton } from '../../../helpers/ClearButton';
import { type InputProps } from '../../../helpers/Input';
import { DateInput } from '../../common/DateInput';
import styles from '../../common/DateInput.module.css';

export type DateFieldProps<T extends DateValue = CalendarDate> =
  AriaDateFieldOptions<T> & {
    buttonProps?: ReturnType<typeof useDatePicker>['buttonProps'];
    buttonOnClick?: () => void;
    groupProps?: ReturnType<typeof useDatePicker>['groupProps'];
    ref?: Ref<HTMLDivElement>;
    clearable?: boolean;
    tipId?: string;
    errorMessageId?: string;
  } & Pick<
      InputProps,
      | 'componentSize'
      | 'errorMessage'
      | 'tip'
      | 'disabled'
      | 'style'
      | 'width'
      | 'className'
    >;

export function DateField({
  componentSize = 'medium',
  buttonProps,
  groupProps,
  ref,
  clearable,
  errorMessageId,
  tipId,
  ...props
}: DateFieldProps) {
  const { locale } = useLocale();
  const { t } = useTranslation();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const internalRef = useRef<HTMLInputElement>(null);
  const { labelProps, fieldProps } = useDateField(props, state, internalRef);

  const disabled = props.isDisabled || !!fieldProps['aria-disabled'];
  const showClearButton = clearable && !disabled && !props.isReadOnly;

  const hasPartialValue = state.segments.some(
    segment =>
      segment.type !== 'literal' && segment.placeholder !== segment.text,
  );
  const hasValue = !!state.value || hasPartialValue;
  const clearDate = () => {
    state.setValue(null);
  };

  const formattedSegments = formatDateFieldSegments(state.segments);

  return (
    <DateInput
      {...props}
      groupProps={groupProps}
      componentSize={componentSize}
      label={props.label}
      disabled={disabled}
      required={props.isRequired}
      clearable={clearable}
      ref={ref}
      tipId={tipId}
      errorMessageId={errorMessageId}
      internalRef={internalRef}
      readOnly={props.isReadOnly}
      prefix={
        <CalendarButton
          componentSize={componentSize}
          {...buttonProps}
          isReadOnly={props.isReadOnly}
          isDisabled={disabled || props.isReadOnly}
        />
      }
      suffix={
        showClearButton && (
          <ClearButton
            absolute={false}
            aria-label={t(texts.clearDate)}
            aria-hidden={!hasValue}
            className={cn(
              styles['clear-button'],
              !hasValue && styles['clear-button--inactive'],
            )}
            size="component"
            onClick={clearDate}
          />
        )
      }
      labelProps={labelProps}
      fieldProps={fieldProps}
    >
      {formattedSegments.map((segment, i) => (
        <DateSegment
          aria-readonly={props.isReadOnly}
          componentSize={componentSize}
          errorMessageId={errorMessageId}
          tipId={tipId}
          key={i}
          segment={segment}
          state={state}
        />
      ))}
    </DateInput>
  );
}

DateField.displayName = 'DateField';

const texts = createTexts({
  clearDate: {
    en: 'Clear date',
    nb: 'Tøm dato',
    no: 'Tøm dato',
    nn: 'Tøm dato',
    se: 'Gurre dáhtona',
  },
});
