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

import { Box } from '../../../..';
import { cn } from '../../../../utils';
import { focusable } from '../../../helpers/styling/focus.module.css';
import typographyStyles from '../../../Typography/typographyStyles.module.css';
import styles from '../../common/DateInput.module.css';
import { timezone } from '../constants';

interface CalendarDateProps extends AriaCalendarCellProps {
  state: CalendarState | RangeCalendarState;
  onClose: () => void;
}

export function CalendarDate({ date, state, onClose }: CalendarDateProps) {
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
      <Box
        {...buttonProps}
        as="button"
        type="button"
        ref={ref}
        onKeyDown={closeOnKeyboardBlurForward}
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={cn(
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
      </Box>
    </td>
  );
}

CalendarDate.displayName = 'CalendarDate';
