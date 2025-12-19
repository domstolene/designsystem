import { type useDateField, type useDatePicker } from '@react-aria/datepicker';
import { type ReactNode, type Ref, useContext } from 'react';

import styles from './DateInput.module.css';
import { cn } from '../../../utils';
import { type InputProps, getInputWidth } from '../../helpers/Input';
import inputStyles from '../../helpers/Input/Input.module.css';
import focusStyles from '../../helpers/styling/focus.module.css';
import { renderInputMessage } from '../../InputMessage';
import { Box } from '../../layout';
import { renderLabel } from '../../Typography/Label/Label.utils';
import tgStyles from '../../Typography/typographyStyles.module.css';
import { type DatePickerProps } from '../DatePicker';
import { CalendarPopoverContext } from '../DatePicker/CalendarPopover';

export type DateInputProps = {
  className?: string;
  active?: boolean;
  children: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  label?: ReactNode;
  internalRef: Ref<HTMLDivElement>;
  groupProps?: ReturnType<typeof useDatePicker>['groupProps'];
  ref?: Ref<HTMLDivElement>;
  clearable?: DatePickerProps['clearable'];
  errorMessageId?: string;
  tipId?: string;
} & Pick<ReturnType<typeof useDateField>, 'fieldProps' | 'labelProps'> &
  Pick<
    InputProps,
    | 'componentSize'
    | 'errorMessage'
    | 'tip'
    | 'disabled'
    | 'style'
    | 'required'
    | 'readOnly'
    | 'width'
    | 'afterLabelContent'
  >;

export function DateInput({
  errorMessage,
  tip,
  componentSize = 'medium',
  style,
  className,
  disabled,
  active,
  internalRef,
  readOnly,
  required,
  children,
  prefix: button,
  suffix: suffixEl,
  labelProps,
  fieldProps,
  groupProps,
  width,
  clearable,
  ref,
  afterLabelContent,
  tipId,
  errorMessageId,
  ...props
}: DateInputProps) {
  const hasErrorMessage = !!errorMessage;

  const { isOpen } = useContext(CalendarPopoverContext);

  return (
    <div
      {...groupProps}
      className={cn(className, inputStyles.container)}
      ref={ref}
    >
      {renderLabel({
        ...labelProps,
        label: props.label,
        showRequiredStyling: required,
        readOnly,
        afterLabelContent,
      })}
      <Box
        style={style}
        width={getInputWidth(width, 'fit-content')}
        className={cn(
          inputStyles.input,
          inputStyles['input--stateful'],
          inputStyles['input--hover'],
          inputStyles[`input--${componentSize}`],
          inputStyles[`input-with-icon--${componentSize}`],
          tgStyles[`body-short-${componentSize}`],
          hasErrorMessage && inputStyles['input--stateful-danger'],
          styles['date-input'],
          clearable && styles[`date-input--${componentSize}--clearable`],
          focusStyles['focusable-within'],
          isOpen && focusStyles.focused,
          disabled && 'disabled',
          disabled && inputStyles.disabled,
          active && 'active',
          readOnly && 'read-only',
          readOnly && inputStyles['read-only'],
        )}
      >
        {button}
        <div
          {...fieldProps}
          ref={internalRef}
          className={styles['date-segment-container']}
        >
          {children}
        </div>
        {suffixEl}
      </Box>
      {renderInputMessage({ tip, errorMessage, tipId, errorMessageId })}
    </div>
  );
}

DateInput.displayName = 'DateInput';
