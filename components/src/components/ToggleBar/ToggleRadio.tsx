import { forwardRef, InputHTMLAttributes, useState, ChangeEvent } from 'react';
import { SvgIcon } from '../../icons/utils';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { Icon } from '../Icon';
import { ToggleBarContextType, useToggleBarContext } from './ToggleBar.context';
import { Label, Input, Content } from './ToggleRadio.styles';

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

const isValueEqualToGroupValueOrFalsy = (
  value: unknown,
  group: ToggleBarContextType
): boolean => {
  if (typeof value !== 'undefined' && value !== null && group) {
    if (typeof value === 'number') {
      return value === Number(group?.value);
    }
    return value === group?.value;
  }
  return !!value;
};

let nextUniqueId = 0;

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
    const [uniqueId] = useState<string>(id ?? `ToggleRadio-${nextUniqueId++}`);
    const group = useToggleBarContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
      group && group.onChange && group.onChange(event);
    };

    return (
      <Label size={group.size} htmlFor={uniqueId}>
        <Input
          ref={ref}
          {...getBaseHTMLProps(uniqueId, className, htmlProps, rest)}
          name={name ?? group.name}
          onChange={handleChange}
          value={value}
          checked={
            typeof checked !== 'undefined'
              ? checked
              : isValueEqualToGroupValueOrFalsy(value, group)
          }
        />
        <Content size={group.size} justIcon={!!icon && !!!label}>
          {icon && <Icon icon={icon} iconSize="inherit" />}
          {label && <span>{label}</span>}
        </Content>
      </Label>
    );
  }
);
