import { useDateSegment } from '@react-aria/datepicker';
import type {
  DateFieldState,
  DateSegment as DateSegmentType,
} from '@react-stately/datepicker';
import { useRef } from 'react';

import { cn, spaceSeparatedIdListGenerator } from '../../../../utils';
import typographyStyles from '../../../Typography/typographyStyles.module.css';
import styles from '../../common/DateInput.module.css';
import { type DatePickerProps } from '../DatePicker';

interface DateSegmentProps extends Pick<
  Required<DatePickerProps>,
  'componentSize'
> {
  segment: DateSegmentType;
  state: DateFieldState;
  errorMessageId?: string;
  tipId?: string;
}

export function DateSegment({
  segment,
  state,
  componentSize,
  errorMessageId,
  tipId,
}: DateSegmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);
  return (
    <div
      {...segmentProps}
      aria-describedby={spaceSeparatedIdListGenerator([
        errorMessageId ? errorMessageId : undefined,
        tipId ? tipId : undefined,
      ])}
      ref={ref}
      className={cn(
        segmentProps.className,
        styles.segment,
        typographyStyles[`body-short-${componentSize}`],
      )}
      style={{
        ...segmentProps.style,
        minWidth:
          segment.maxValue != null
            ? String(segment.maxValue).length + 'ch'
            : undefined,
      }}
    >
      <span
        aria-hidden="true"
        className={cn(
          styles.segment__placeholder,
          !segment.isPlaceholder && styles['segment__placeholder--invisible'],
          typographyStyles[`body-short-${componentSize}`],
        )}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </div>
  );
}

DateSegment.displayName = 'DateSegment';
