import {
  type ChangeEvent,
  type InputHTMLAttributes,
  forwardRef,
  useId,
} from 'react';

import {
  type ToggleBarContextType,
  useToggleBarContext,
} from './ToggleBar.context';
import styles from './ToggleBar.module.css';
import { type ToggleBarSize } from './ToggleBar.types';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { type SvgIcon } from '../Icon/utils';
import { type StaticTypographyType, Typography } from '../Typography';

export const typographyTypes: Record<ToggleBarSize, StaticTypographyType> = {
  large: 'bodyLarge',
  medium: 'bodyMedium',
  small: 'bodySmall',
  xsmall: 'bodyXsmall',
};

type PickedInputHTMLAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'name' | 'checked' | 'value' | 'onChange' | 'aria-label' | 'aria-labelledby'
>;

export type ToggleRadioProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst som vises i komponenten. */
    label?: string;
    /**Ikonet som vises i komponenten. */
    icon?: SvgIcon;
  } & PickedInputHTMLAttributes,
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof PickedInputHTMLAttributes>
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

export const ToggleRadio = forwardRef<HTMLInputElement, ToggleRadioProps>(
  (props, ref) => {
    const {
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
      id,
      ...rest
    } = props;

    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-ToggleRadio`;
    const group = useToggleBarContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
      group?.onChange && group.onChange(event);
    };

    const contentTypeCn = label ? 'with-text' : 'just-icon';

    return (
      <label htmlFor={uniqueId} className={styles.label}>
        <input
          {...getBaseHTMLProps(
            uniqueId,
            cn(
              className,
              focusStyles['focusable-sibling'],
              utilStyles['hide-input'],
            ),
            htmlProps,
            rest,
          )}
          type="radio"
          ref={ref}
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
            styles[`content--${group.size}--${contentTypeCn}`],
            focusStyles['focus-styled-sibling'],
          )}
        >
          {icon && <Icon icon={icon} iconSize="inherit" />}
          {label && <span>{label}</span>}
        </Typography>
      </label>
    );
  },
);

ToggleRadio.displayName = 'ToggleRadio';
