import { type useDateField, type useDatePicker } from '@react-aria/datepicker';
import type * as CSS from 'csstype';
import {
  type ForwardRefExoticComponent,
  type ReactNode,
  type Ref,
  type RefAttributes,
  forwardRef,
} from 'react';
import styled from 'styled-components';

import { cn } from '../../../utils';
import {
  type InputProps,
  OuterInputContainer,
  StatefulInput,
} from '../../helpers';
import { InputMessage } from '../../InputMessage';
import { Label } from '../../Typography';
import { datePickerTokens } from '../DatePicker/DatePicker.tokens';

export type DateInputProps = {
  className?: string;
  active?: boolean;
  children: ReactNode;
  prefix?: ReactNode;
  label?: ReactNode;
  internalRef: Ref<HTMLDivElement>;
  width?: CSS.Properties['width'];
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
  >;

const InputDiv = styled(StatefulInput)`
  display: inline-flex;
  flex-direction: row;
  gap: ${datePickerTokens.gap};
  align-items: center;
  padding-left: ${({ componentSize = 'medium' }) =>
    datePickerTokens.datefield[componentSize].paddingX};
  padding-right: ${({ componentSize = 'medium' }) =>
    datePickerTokens.datefield[componentSize].paddingX};
`;

const DateSegmentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

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
    width = datePickerTokens.datefield[componentSize].width,
    ...props
  }: DateInputProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;
  const hasLabel = props.label != null;
  const hasMessage = hasErrorMessage || hasTip;

  return (
    <OuterInputContainer
      {...groupProps}
      $width={width}
      className={className}
      ref={forwardedRef}
    >
      {hasLabel && (
        <Label {...labelProps} showRequiredStyling={required}>
          {props.label}
        </Label>
      )}
      <InputDiv
        {...fieldProps}
        as="div"
        style={style}
        disabled={disabled}
        componentSize={componentSize}
        ref={internalRef}
        hasErrorMessage={hasErrorMessage}
        className={cn(
          disabled && 'disabled',
          active && 'active',
          readOnly && 'read-only',
        )}
      >
        {button}
        <DateSegmentContainer>{children}</DateSegmentContainer>
      </InputDiv>
      {hasMessage && (
        <InputMessage
          messageType={hasErrorMessage ? 'error' : 'tip'}
          message={errorMessage ?? tip ?? ''}
        />
      )}
    </OuterInputContainer>
  );
}

export const DateInput: ForwardRefExoticComponent<
  DateInputProps & RefAttributes<HTMLDivElement>
> = forwardRef(_DateInput);

DateInput.displayName = 'DateInput';
