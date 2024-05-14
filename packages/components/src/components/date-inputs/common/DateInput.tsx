import { type useDateField, type useDatePicker } from '@react-aria/datepicker';
import {
  type ForwardRefExoticComponent,
  type ReactNode,
  type Ref,
  type RefAttributes,
  forwardRef,
  useContext,
} from 'react';

import styles from './DateInput.module.css';
import { cn } from '../../../utils';
import { type InputProps } from '../../helpers';
import inputStyles from '../../helpers/Input/Input.module.css';
import focusStyles from '../../helpers/styling/focus.module.css';
import { InputMessage } from '../../InputMessage';
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
  >;

function _DateInput(
  {
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
    ...props
  }: DateInputProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;
  const hasLabel = props.label != null;
  const hasMessage = hasErrorMessage || hasTip;

  const { isOpen } = useContext(CalendarPopoverContext);

  return (
    <div
      {...groupProps}
      className={cn(
        className,
        inputStyles.container,
        styles[`container--${componentSize}`],
      )}
      ref={forwardedRef}
      style={{ width }}
    >
      {hasLabel && (
        <Label {...labelProps} showRequiredStyling={required}>
          {props.label}
        </Label>
      )}
      <div
        {...fieldProps}
        style={style}
        ref={internalRef}
        className={cn(
          inputStyles.input,
          inputStyles['input--stateful'],
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
      </div>
      {hasMessage && (
        <InputMessage
          messageType={hasErrorMessage ? 'error' : 'tip'}
          message={errorMessage ?? tip ?? ''}
        />
      )}
    </div>
  );
}

export const DateInput: ForwardRefExoticComponent<
  DateInputProps & RefAttributes<HTMLDivElement>
> = forwardRef(_DateInput);

DateInput.displayName = 'DateInput';
