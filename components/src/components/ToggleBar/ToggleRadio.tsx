import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { SvgIcon } from '../../icons/utils';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { Icon } from '../Icon';
import { useToggleBarContext } from './ToggleBar.context';
import { Label, Input, Content } from './ToggleRadio.styles';

type PickedInputHTMLAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'name'
  | 'readOnly'
  | 'checked'
  | 'value'
  | 'required'
  | 'onChange'
  | 'aria-describedby'
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

let nextUniqueId = 0;

export const ToggleRadio = forwardRef<HTMLInputElement, ToggleRadioProps>(
  (props, ref) => {
    const { icon, label, htmlProps, className, id, ...rest } = props;
    const [uniqueId] = useState<string>(id ?? `ToggleRadio-${nextUniqueId++}`);
    const { size } = useToggleBarContext();

    return (
      <Label size={size}>
        <Input
          ref={ref}
          {...getBaseHTMLProps(uniqueId, className, htmlProps, rest)}
        />
        <Content size={size} justIcon={!!icon && !!!label}>
          {icon && <Icon icon={icon} iconSize="inherit" />}
          {label}
        </Content>
      </Label>
    );
  }
);
