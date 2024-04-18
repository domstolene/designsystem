import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { type AriaButtonProps, useButton } from '@react-aria/button';
import { type Properties } from 'csstype';
import { useRef } from 'react';

import type { DateFieldProps } from './DateField';
import { cn } from '../../../../utils';
import { focusable } from '../../../helpers/styling/focus.module.css';
import { Icon } from '../../../Icon';
import { CalendarIcon } from '../../../Icon/icons';
import styles from '../../common/DateInput.module.css';

interface CalendarButtonProps extends AriaButtonProps {
  componentSize: DateFieldProps['componentSize'];
}

export function CalendarButton({
  componentSize,
  ...props
}: CalendarButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  const buttonSize: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-date-input-icon-size' as any]:
      componentSize === 'medium'
        ? ddsBaseTokens.iconSizes.DdsIconsizeMedium
        : ddsBaseTokens.iconSizes.DdsIconsizeSmall,
  };

  return (
    <button
      {...buttonProps}
      ref={ref}
      type="button"
      onClick={e => {
        if (!props.isDisabled) {
          buttonProps.onClick?.(e);
        }
      }}
      style={{ ...buttonProps.style, ...buttonSize }}
      className={cn(
        buttonProps.className,
        styles['icon-wrapper'],
        styles['popover-button'],
        !props.isDisabled && focusable,
        props.isDisabled && 'disabled',
      )}
    >
      <Icon
        icon={CalendarIcon}
        iconSize={componentSize === 'medium' ? 'medium' : 'small'}
      />
    </button>
  );
}
