import { type ChangeEvent, type InputHTMLAttributes, useId } from 'react';

import {
  type ToggleBarContextType,
  useToggleBarContext,
} from './ToggleBar.context';
import styles from './ToggleBar.module.css';
import { type ToggleBarSize } from './ToggleBar.types';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import buttonStyles from '../Button/Button.module.css';
import { HiddenInput } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { type SvgIcon } from '../Icon/utils';
import { type StaticTypographyType, Typography } from '../Typography';

export const typographyTypes: Record<ToggleBarSize, StaticTypographyType> = {
  large: 'bodyShortLarge',
  medium: 'bodyShortMedium',
  small: 'bodyShortSmall',
  xsmall: 'bodyShortXsmall',
};

export type ToggleRadioProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst som vises i komponenten. */
    label?: string;
    /**Ikonet som vises i komponenten. */
    icon?: SvgIcon;
  } & Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'name' | 'checked' | 'value' | 'onChange' | 'aria-label' | 'aria-labelledby'
  >
>;

/**Beregner om en ToggleRadio skal være checked eller ikke.
 *
 * Returnerer checked hvis den er definert.
 *
 * Returnerer true hvis både verdien fra context og verdien i ToggleRadio er truthy og like.
 * Returnerer true hvis verdien i ToggleRadio er truthy, men context ikke finnes.
 *
 * Returnerer false hvis verdiene er ulike eller hvis verdien i ToggleRadio er falsy.
 */
const calculateChecked = (
  value: unknown,
  group: ToggleBarContextType,
  checked?: boolean,
): boolean => {
  if (typeof checked !== 'undefined') return checked;

  if (typeof value !== 'undefined' && value !== null && group) {
    if (typeof value === 'number') {
      return value === Number(group?.value);
    }
    return value === group?.value;
  }

  return !!value;
};

export const ToggleRadio = ({
  value,
  name,
  onChange,
  checked,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  icon,
  label,
  htmlProps,
  className,
  style,
  id,
  ...rest
}: ToggleRadioProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-ToggleRadio`;
  const group = useToggleBarContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    group?.onChange?.(event);
  };
  const hasLabel = !!label;
  const hasIcon = !!icon;

  const contentTypeCn = !hasLabel
    ? 'just-icon'
    : !hasIcon
      ? 'just-text'
      : 'with-text-and-icon';

  return (
    <label htmlFor={uniqueId} className={styles.label}>
      <HiddenInput
        {...getBaseHTMLProps(
          uniqueId,
          cn(className, focusStyles['focusable-sibling']),
          style,
          htmlProps,
          rest,
        )}
        type="radio"
        name={name ?? group.name}
        onChange={handleChange}
        value={value}
        checked={calculateChecked(value, group, checked)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      />
      <Typography
        as="span"
        typographyType={typographyTypes[group.size]}
        className={cn(
          styles.content,
          buttonStyles[contentTypeCn],
          hasLabel && hasIcon && buttonStyles['with-icon-left'],
          buttonStyles[`button--${group.size}`],
          focusStyles['focus-styled-sibling'],
        )}
      >
        {icon && <Icon icon={icon} iconSize="component" />}
        {label && <span>{label}</span>}
      </Typography>
    </label>
  );
};

ToggleRadio.displayName = 'ToggleRadio';
