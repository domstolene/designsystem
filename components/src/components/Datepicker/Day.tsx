import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import {
  focusVisible,
  focusVisibleTransitionValue,
  removeButtonStyling,
} from '../../helpers/styling';
import { datepickerTokens } from './Datepicker.tokens';
const { calendarPopup } = datepickerTokens;
type StyledDayProps = {
  selected?: boolean;
  isToday?: boolean;
};

const StyledDay = styled.button<StyledDayProps>`
  ${removeButtonStyling}
  text-transform: capitalize;
  transition: background-color 0.2s, ${focusVisibleTransitionValue};
  height: 2.5em;
  width: 2.5em;
  padding: ${calendarPopup.day.padding};
  border-radius: ${calendarPopup.day.borderRadius};
  &:hover {
    background-color: ${calendarPopup.day.hover.backgroundColor};
  }
  &:focus-visible,
  .focus-visible {
    ${focusVisible}
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${calendarPopup.day.selected.backgroundColor};
      color: ${calendarPopup.day.selected.color};
      &:hover {
        background-color: ${calendarPopup.day.selected.backgroundColor};
      }
    `}

  ${({ isToday }) =>
    isToday &&
    css`
      box-shadow: ${calendarPopup.day.today.boxShadow};
    `}
`;

type DayProps = {
  isToday?: boolean;
  index: number;
  selected?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const Day = (props: DayProps) => {
  const { isToday, index, selected, ...rest } = props;

  return (
    <StyledDay isToday={isToday} selected={selected} {...rest}>
      {index + 1}
    </StyledDay>
  );
};
