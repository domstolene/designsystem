import { type Time } from '@internationalized/date';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { type AriaTimeFieldProps, useTimeField } from '@react-aria/datepicker';
import { useTimeFieldState } from '@react-stately/datepicker';
import { type Properties } from 'csstype';
import { type Ref, forwardRef, useRef } from 'react';

import { type InputProps } from '../../helpers/Input/Input.types';
import { Icon } from '../../Icon';
import { TimeIcon } from '../../Icon/icons';
import { DateInput } from '../common/DateInput';
import styles from '../common/DateInput.module.css';
import { locale } from '../DatePicker/constants';
import { DateSegment } from '../DatePicker/DateField/DateSegment';

export type TimePickerProps = Omit<AriaTimeFieldProps<Time>, 'hideTimeZone'> & {
  /**
   * Navn på egne klasser.
   */
  className?: string;
  /**
   * Egendefinert bredde på komponenten.
   */
  width?: Properties['width'];
} & Pick<InputProps, 'componentSize' | 'errorMessage' | 'tip' | 'style'>;

function _TimePicker(
  { componentSize = 'medium', width, ...props }: TimePickerProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const ref = useRef<HTMLInputElement>(null);
  const state = useTimeFieldState({
    ...props,
    locale,
  });
  const { labelProps, fieldProps } = useTimeField(
    { ...props, hideTimeZone: true, granularity: 'hour' },
    state,
    ref,
  );

  const iconSize: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-date-input-icon-size' as any]:
      componentSize === 'medium'
        ? ddsBaseTokens.iconSizes.DdsIconsizeMedium
        : ddsBaseTokens.iconSizes.DdsIconsizeSmall,
  };

  const disabled = props.isDisabled || !!fieldProps['aria-disabled'];

  return (
    <DateInput
      {...props}
      width={width}
      disabled={disabled}
      required={props.isRequired}
      componentSize={componentSize}
      ref={forwardedRef}
      internalRef={ref}
      readOnly={props.isReadOnly}
      labelProps={labelProps}
      fieldProps={fieldProps}
      prefix={
        !props.isReadOnly && (
          <span className={styles['icon-wrapper']} style={iconSize}>
            <Icon
              icon={TimeIcon}
              iconSize={componentSize == 'medium' ? 'medium' : 'small'}
            />
          </span>
        )
      }
    >
      {state.segments.map((segment, i) => (
        <DateSegment
          componentSize={componentSize}
          key={i}
          segment={segment}
          state={state}
        />
      ))}
    </DateInput>
  );
}

export const TimePicker = forwardRef(_TimePicker);

TimePicker.displayName = 'TimePicker';
