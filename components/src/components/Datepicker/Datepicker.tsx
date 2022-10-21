import { forwardRef, useId } from 'react';
import { InputSize, renderInputMessage } from '../../helpers';
import { StatefulInput, OuterInputContainer, InputProps } from '../../helpers';
import { Property } from 'csstype';
import styled, { css } from 'styled-components';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import CalendarIcon from '../../assets/svg/calendar_today.svg';
import { datepickerTokens as tokens } from './Datepicker.tokens';
import { selection } from '../../helpers/styling';
import { Label } from '../Typography';

const StyledInput = styled(StatefulInput)`
  &::-webkit-calendar-picker-indicator {
    // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
    background-image: ${`url("${CalendarIcon}")`};
    position: absolute;
    ${({ componentSize }) =>
      componentSize &&
      css`
        right: ${tokens.calendarIndicator.base.sizes[componentSize].right};
        height: ${tokens.calendarIndicator.base.sizes[componentSize].height};
        width: ${tokens.calendarIndicator.base.sizes[componentSize].width};
      `}
    margin-left: 0px;
    padding: 0;
    top: 50%;
    transform: translate(0, -50%);
    box-sizing: border-box;
  }

  &::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  &::-webkit-calendar-picker-indicator:focus-visible {
    outline: ${tokens.calendarIndicator.focus.outline};
    outline-offset: ${tokens.calendarIndicator.focus.outlineOffset};
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-year-field,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-minute-field {
      transition: 0.2s;
    }
  }

  &::-webkit-datetime-edit-day-field:focus,
  &::-webkit-datetime-edit-month-field:focus,
  &::-webkit-datetime-edit-year-field:focus,
  &::-webkit-datetime-edit-hour-field:focus,
  &::-webkit-datetime-edit-minute-field:focus {
    ${selection}
  }
`;

type DatepickerType = 'date' | 'datetime-local';

export type DatepickerProps = Omit<InputProps, 'type'> & {
  /** Angi dato-input med eller uten klokkeslett. */
  type?: DatepickerType;
};

export const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
  (
    {
      id,
      type = 'date',
      required,
      readOnly,
      disabled,
      label,
      width,
      errorMessage,
      tip,
      style,
      className,
      componentSize = 'medium',
      max,
      'aria-required': ariaRequired,
      'aria-describedby': ariaDescribedby,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-datepickerInput`;

    const componentWidth = width ? width : getWidth(type, componentSize);
    const hasLabel = !!label;
    const hasErrorMessage = !!errorMessage;
    const showRequiredStyling = !!(required || ariaRequired);

    const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');
    const tipId = derivativeIdGenerator(uniqueId, 'tip');

    const inputProps = {
      id: uniqueId,
      hasErrorMessage,
      ref,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      required,
      disabled,
      componentSize,
      type,
      'aria-describedby': spaceSeparatedIdListGenerator([
        tip ? tipId : undefined,
        errorMessage ? errorMessageId : undefined,
        ariaDescribedby,
      ]),
      'aria-required': ariaRequired,
      'aria-invalid': hasErrorMessage ? true : undefined,
      max: getMax(type, max),
      ...rest,
    };

    const outerinputContainerProps = {
      width: componentWidth,
      style,
      className,
    };

    return (
      <OuterInputContainer {...outerinputContainerProps}>
        {hasLabel && (
          <Label htmlFor={uniqueId} showRequiredStyling={showRequiredStyling}>
            {label}
          </Label>
        )}
        <StyledInput {...inputProps} />
        {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
      </OuterInputContainer>
    );
  }
);

type DefaultInputWidth = {
  medium: Property.Width<string>;
  small: Property.Width<string>;
  tiny: Property.Width<string>;
};

const defaultWidths: {
  date: DefaultInputWidth;
  ['datetime-local']: DefaultInputWidth;
} = {
  date: {
    medium: '160px',
    small: '140px',
    tiny: '125px',
  },
  ['datetime-local']: {
    medium: '200px',
    small: '180px',
    tiny: '150px',
  },
};

const getWidth = (
  type: DatepickerType,
  size: InputSize
): Property.Width<string> => defaultWidths[type][size];

const getMax = (
  type: DatepickerType,
  max?: string | number
): string | number | undefined => {
  if (max !== undefined) {
    return max;
  }

  // Limit the year-part to only four digits by default

  if (type === 'datetime-local') {
    return '9999-12-31T23:59';
  }

  if (type === 'date') {
    return '9999-12-31';
  }
};
