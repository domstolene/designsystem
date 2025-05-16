import { isToday } from '@internationalized/date';
import {
  type AriaCalendarCellProps,
  useCalendarCell,
} from '@react-aria/calendar';
import {
  type CalendarState,
  type RangeCalendarState,
} from '@react-stately/calendar';
import { type KeyboardEvent, useRef } from 'react';

import { cn } from '../../../../utils';
import { focusable } from '../../../helpers/styling/focus.module.css';
import typographyStyles from '../../../Typography/typographyStyles.module.css';
import styles from '../../common/DateInput.module.css';
import { timezone } from '../constants';

export type CellVariant = 'default' | 'selected' | 'unavailable';

interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState | RangeCalendarState;
  onClose: () => void;
}

export function CalendarCell({ date, state, onClose }: CalendarCellProps) {
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

  const closeOnKeyboardBlurForward = (event: KeyboardEvent) => {
    if (event.key === 'Tab' && event.shiftKey === false) {
      onClose();
    }
  };

  return (
    <td {...cellProps}>
      <button
        {...buttonProps}
        type="button"
        ref={ref}
        hidden={isOutsideVisibleRange}
        onKeyDown={closeOnKeyboardBlurForward}
        className={cn(
          styles['calendar__grid-element'],
          styles['calendar__cell-button'],
          isToday(date, timezone) && styles['calendar__cell-button--today'],
          styles[`calendar__cell-button--${variant}`],
          typographyStyles['body-small'],
          focusable,
        )}
      >
        {formattedDate}
      </button>
    </td>
  );
}

CalendarCell.displayName = 'CalendarCell';
