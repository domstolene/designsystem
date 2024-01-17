import { type AriaButtonProps, useButton } from '@react-aria/button';
import { useRef } from 'react';
import styled, { css } from 'styled-components';

import {
  CalendarIcon,
  Icon,
  focusVisible,
  normalizeButton,
  selection,
} from '@norges-domstoler/dds-components';

import type { DateFieldProps } from './DateField';
import { datePickerTokens } from '../DatePicker.tokens';

const StyledButton = styled.button<{
  $componentSize: DateFieldProps['componentSize'];
  $isDisabled: DateFieldProps['disabled'];
}>`
  ${normalizeButton}
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $componentSize = 'medium' }) => css`
    height: ${datePickerTokens.calendarButton[$componentSize].size};
    width: ${datePickerTokens.calendarButton[$componentSize].size};
    margin: calc(0px - ${datePickerTokens.calendarButton[$componentSize].size})
      0;
  `}
  margin-left: -1px; // To align with TextInputs icons
  border: 0;
  padding: 0;
  border-radius: ${datePickerTokens.calendarButton.borderRadius};

  background-color: ${datePickerTokens.calendarButton.background};
  color: ${({ $isDisabled }) =>
    $isDisabled
      ? datePickerTokens.calendarButton.disabled.color
      : datePickerTokens.calendarButton.color};

  transition: 50ms;

  &:hover:not(.disabled) {
    background-color: ${datePickerTokens.calendarButton.hover.background};
    color: ${datePickerTokens.calendarButton.hover.color};
  }

  &:focus-visible:not(.disabled) {
    ${focusVisible}
    outline-offset: 0;
  }

  &.disabled {
    outline: none;
  }

  *::selection {
    ${selection}
  }
`;

interface CalendarButtonProps extends AriaButtonProps {
  componentSize: DateFieldProps['componentSize'];
}

export function CalendarButton({
  componentSize,
  ...props
}: CalendarButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <StyledButton
      {...buttonProps}
      ref={ref}
      type="button"
      $isDisabled={props.isDisabled}
      $componentSize={componentSize}
      onClick={e => {
        if (!props.isDisabled) {
          buttonProps.onClick?.(e);
        }
      }}
      className={[props.isDisabled ? 'disabled' : false]
        .filter(Boolean)
        .join(' ')}
    >
      <Icon
        icon={CalendarIcon}
        iconSize={componentSize === 'medium' ? 'medium' : 'small'}
      />
    </StyledButton>
  );
}
