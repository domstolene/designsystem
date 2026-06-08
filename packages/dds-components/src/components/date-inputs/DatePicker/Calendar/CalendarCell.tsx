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
  if (isOutsideVisibleRange) {
    return <td {...cellProps} />;
  }

  const closeOnKeyboardBlurForward = (event: KeyboardEvent) => {
    if (event.key === 'Tab' && event.shiftKey === false) {
      onClose();
    }
  };

  const isEffectivelyUnavailable = isUnavailable || isDisabled;
  const isUnavailableToday =
    isEffectivelyUnavailable && isToday(date, timezone);

  return (
    <td {...cellProps}>
      <button
        {...buttonProps}
        type="button"
        ref={ref}
        onKeyDown={closeOnKeyboardBlurForward}
        className={cn(
          styles['calendar__grid-element'],
          styles['calendar__cell-button'],
          isToday(date, timezone) && styles['calendar__cell-button--today'],
          styles[`calendar__cell-button--default`],
          isSelected && styles[`calendar__cell-button--selected`],
          isEffectivelyUnavailable &&
            styles[`calendar__cell-button--unavailable`],
          isUnavailableToday &&
            styles['calendar__cell-button--unavailable--today'],
          typographyStyles['body-short-small'],
          focusable,
        )}
      >
        {formattedDate}
      </button>
    </td>
  );
}

CalendarCell.displayName = 'CalendarCell';
