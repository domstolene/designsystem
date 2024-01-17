import { isToday } from '@internationalized/date';
import {
  type AriaCalendarCellProps,
  useCalendarCell,
} from '@react-aria/calendar';
import {
  type CalendarState,
  type RangeCalendarState,
} from '@react-stately/calendar';
import { useRef } from 'react';
import styled, { css } from 'styled-components';

import {
  focusVisible,
  normalizeButton,
} from '@norges-domstoler/dds-components';

import { type CellVariant, calendarTokens } from './Calendar.tokens';
import { timezone } from '../constants';

interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState | RangeCalendarState;
}

interface CellProps {
  $variant: CellVariant;
  $isToday: boolean;
}

const Cell = styled.button<CellProps>`
  ${normalizeButton}
  width: ${calendarTokens.cell.width};
  height: ${calendarTokens.cell.height};

  font-family: ${calendarTokens.cell.font.fontFamily};
  font-size: ${calendarTokens.cell.font.fontSize};
  font-style: ${calendarTokens.cell.font.fontStyle};
  font-weight: ${calendarTokens.cell.font.fontWeight};
  letter-spacing: ${calendarTokens.cell.font.letterSpacing};
  line-height: ${calendarTokens.cell.font.lineHeight};

  border: ${calendarTokens.cell.borderWidth} solid
    ${({ $isToday }) =>
      $isToday ? calendarTokens.cell.today.borderColor : 'transparent'};
  border-radius: ${calendarTokens.cell.borderRadius};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus-visible {
    ${focusVisible}
  }

  ${({ $variant, $isToday }) => {
    const variantStyles = calendarTokens.cell.variants[$variant];
    return css`
      background-color: ${variantStyles.bg};
      color: ${variantStyles.color};
      border-color: ${variantStyles.borderColor};
      font-weight: ${variantStyles.fontWeight};
      text-decoration: ${variantStyles.textDecoration};
      cursor: ${variantStyles.cursor};

      ${() =>
        variantStyles.today &&
        $isToday &&
        css`
          border-color: ${variantStyles.today.borderColor};
          text-decoration: ${variantStyles.today.textDecoration};
        `}

      ${variantStyles.hover &&
      css`
        &:hover {
          background-color: ${variantStyles.hover.bg};
          color: ${variantStyles.hover.color};
          border-color: ${variantStyles.hover.borderColor ??
          calendarTokens.cell.today.borderColor};
        }
      `}
    `;
  }}
`;

export function CalendarCell({ date, state }: CalendarCellProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const {
    buttonProps,
    cellProps,
    isOutsideVisibleRange,
    formattedDate,
    isSelected,
    isDisabled,
    isUnavailable,
  } = useCalendarCell({ date }, state, ref);
  if (isDisabled) {
    return <td {...cellProps} />;
  }

  const variant: CellVariant = isSelected
    ? 'selected'
    : isUnavailable || isDisabled
      ? 'unavailable'
      : 'default';

  return (
    <td {...cellProps}>
      <Cell
        {...buttonProps}
        type="button"
        $isToday={isToday(date, timezone)}
        $variant={variant}
        ref={ref}
        hidden={isOutsideVisibleRange}
      >
        {formattedDate}
      </Cell>
    </td>
  );
}

CalendarCell.displayName = 'CalendarCell';
