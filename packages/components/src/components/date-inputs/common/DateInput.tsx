import { ReactNode, Ref, forwardRef } from 'react';
import { useDateField } from '@react-aria/datepicker';
import styled from 'styled-components';
import {
  InputMessage,
  Label,
  cn,
  InputProps,
  StatefulInput,
  StyledInputProps,
} from '@norges-domstoler/dds-components';
import { datePickerTokens } from '../DatePicker/DatePicker.tokens';

export type DateInputProps = {
  className?: string;
  active?: boolean;
  children: ReactNode;
  prefix?: ReactNode;
  label?: ReactNode;
  internalRef: Ref<HTMLDivElement>;
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

const DateFieldContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${datePickerTokens.labelGap};
`;

const InputDiv = styled(StatefulInput).attrs({
  as: 'div',
})<StyledInputProps>`
  min-width: ${({ componentSize = 'medium' }) =>
    datePickerTokens.datefield[componentSize].minWidth};
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

export const DateInput = forwardRef<HTMLDivElement, DateInputProps>(
  (
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
      ...props
    },
    forwardedRef,
  ) => {
    const hasErrorMessage = !!errorMessage;
    const hasTip = !!tip;
    const hasLabel = props.label != null;
    const hasMessage = hasErrorMessage || hasTip;

    return (
      <DateFieldContainer className={className} ref={forwardedRef}>
        {hasLabel && (
          <Label {...labelProps} showRequiredStyling={required}>
            {props.label}
          </Label>
        )}
        <InputDiv
          {...fieldProps}
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
      </DateFieldContainer>
    );
  },
);

DateInput.displayName = 'DateInput';
