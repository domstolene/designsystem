import { forwardRef, InputHTMLAttributes, ChangeEvent, useId } from 'react';
import { HiddenInput } from '../../helpers';
import { SvgIcon } from '../../icons/utils';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { Icon } from '../Icon';
import { ToggleBarContextType, useToggleBarContext } from './ToggleBar.context';
import { Label, Content } from './ToggleRadio.styles';

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
  checked?: boolean
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
      group && group.onChange && group.onChange(event);
    };

    return (
      <Label size={group.size} htmlFor={uniqueId}>
        <HiddenInput
          {...getBaseHTMLProps(uniqueId, className, htmlProps, rest)}
          type="radio"
          ref={ref}
          name={name ?? group.name}
          onChange={handleChange}
          value={value}
          checked={calculateChecked(value, group, checked)}
        />
        <Content size={group.size} justIcon={!!icon && !!!label}>
          {icon && <Icon icon={icon} iconSize="inherit" />}
          {label && <span>{label}</span>}
        </Content>
      </Label>
    );
  }
);