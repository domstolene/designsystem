import { type useDateField, type useDatePicker } from '@react-aria/datepicker';
import { type ReactNode, type Ref, useContext } from 'react';

import styles from './DateInput.module.css';
import { cn } from '../../../utils';
import { type InputProps, getInputWidth } from '../../helpers/Input';
import inputStyles from '../../helpers/Input/Input.module.css';
import focusStyles from '../../helpers/styling/focus.module.css';
import { InputMessage } from '../../InputMessage';
import { Box } from '../../layout';
import { Label } from '../../Typography';
import { CalendarPopoverContext } from '../DatePicker/CalendarPopover';

export type DateInputProps = {
  className?: string;
  active?: boolean;
  children: ReactNode;
  prefix?: ReactNode;
  label?: ReactNode;
  internalRef: Ref<HTMLDivElement>;
  groupProps?: ReturnType<typeof useDatePicker>['groupProps'];
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
  > & {
    ref?: Ref<HTMLDivElement>;
  };

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
  labelProps,
  fieldProps,
  groupProps,
  width,
  ref,
  ...props
}: DateInputProps) {
  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;
  const hasLabel = props.label != null;
  const hasMessage = hasErrorMessage || hasTip;

  const { isOpen } = useContext(CalendarPopoverContext);

  return (
    <div
      {...groupProps}
      className={cn(className, inputStyles.container)}
      ref={ref}
    >
      {hasLabel && (
        <Label
          {...labelProps}
          showRequiredStyling={required}
          className={inputStyles.label}
          readOnly={readOnly}
        >
          {props.label}
        </Label>
      )}
      <Box
        {...fieldProps}
        style={style}
        ref={internalRef}
        width={getInputWidth(width, 'fit-content')}
        className={cn(
          inputStyles.input,
          inputStyles['input--stateful'],
          inputStyles['input--hover'],
          inputStyles[`input--${componentSize}`],
          hasErrorMessage && inputStyles['input--stateful-danger'],
          styles['date-input'],
          styles[`date-input--${componentSize}`],
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
        <div className={styles['date-segment-container']}>{children}</div>
      </Box>
      {hasMessage && (
        <InputMessage
          messageType={hasErrorMessage ? 'error' : 'tip'}
          message={errorMessage ?? tip ?? ''}
        />
      )}
    </div>
  );
}

DateInput.displayName = 'DateInput';
