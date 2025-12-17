import React, { type JSX, type ReactNode } from 'react';
import {
  type ClearIndicatorProps,
  type ControlProps,
  type DropdownIndicatorProps,
  type InputProps,
  type MultiValueRemoveProps,
  type NoticeProps,
  type OptionProps,
  type SingleValueProps,
  components,
} from 'react-select';

import styles from './Select.module.css';
import { cn, getFormInputIconSize } from '../../utils';
import { type InputSize } from '../helpers/Input';
import inputStyles from '../helpers/Input/Input.module.css';
import { Icon, type IconSize, type SvgIcon } from '../Icon';
import { CheckIcon, ChevronDownIcon, CloseSmallIcon } from '../Icon/icons';

const {
  Option,
  NoOptionsMessage,
  Input,
  SingleValue,
  ClearIndicator,
  DropdownIndicator,
  MultiValueRemove,
  Control,
} = components;

export const getIndicatorIconSize = (componentSize: InputSize): IconSize => {
  switch (componentSize) {
    case 'medium':
      return 'medium';
    case 'small':
      return 'small';
    case 'xsmall':
      return 'small';
  }
};

export const DDSOption = <TValue, IsMulti extends boolean>({
  ...props
}: OptionProps<TValue, IsMulti>) => (
  <Option {...props}>
    {props.isSelected && <Icon icon={CheckIcon} iconSize="small" />}
    {props.children}
  </Option>
);

type CustomOptionProps<TValue, IsMulti extends boolean> = OptionProps<
  TValue,
  IsMulti
> & {
  customElement: (props: OptionProps<TValue, IsMulti>) => JSX.Element;
};
export const CustomOption = <TValue, IsMulti extends boolean>(
  props: CustomOptionProps<TValue, IsMulti>,
): ReactNode => (
  <Option {...props}>{React.createElement(props.customElement, props)}</Option>
);

type CustomSingleValueProps<
  TOption,
  IsMulti extends boolean,
> = SingleValueProps<TOption, IsMulti> & {
  id?: string;
  Element?: (props: SingleValueProps<TOption, IsMulti>) => ReactNode;
};
export const CustomSingleValue = <TOption, IsMulti extends boolean>({
  id,
  Element,
  ...props
}: CustomSingleValueProps<TOption, IsMulti>): ReactNode => (
  <SingleValue {...props}>
    <div id={id} className={styles['inner-single-value']}>
      {Element ? <Element {...props} /> : props.children}
    </div>
  </SingleValue>
);

export const DDSNoOptionsMessage = <TValue, IsMulti extends boolean>(
  props: NoticeProps<TValue, IsMulti>,
) => <NoOptionsMessage {...props}>Ingen treff</NoOptionsMessage>;

export const DDSClearIndicator = <TValue, IsMulti extends boolean>({
  size,
  ...props
}: ClearIndicatorProps<TValue, IsMulti> & { size: InputSize }) => (
  <ClearIndicator {...props}>
    <Icon icon={CloseSmallIcon} iconSize={getIndicatorIconSize(size)} />
  </ClearIndicator>
);

export const DDSMultiValueRemove = <TValue, IsMulti extends boolean>(
  props: MultiValueRemoveProps<TValue, IsMulti>,
) => (
  <MultiValueRemove {...props}>
    <Icon icon={CloseSmallIcon} iconSize="inherit" />
  </MultiValueRemove>
);

export const DDSDropdownIndicator = <TValue, IsMulti extends boolean>(
  props: DropdownIndicatorProps<TValue, IsMulti> & { componentSize: InputSize },
): ReactNode => {
  const { className, componentSize, ...rest } = props;
  return (
    <DropdownIndicator
      {...rest}
      className={cn(className, styles['dropdown-indicator'])}
    >
      <Icon
        icon={ChevronDownIcon}
        iconSize={getIndicatorIconSize(componentSize)}
      />
    </DropdownIndicator>
  );
};

type DDSInputProps<TOption, IsMulti extends boolean> = InputProps<
  TOption,
  IsMulti
> & {
  ariaInvalid: boolean;
  ariaDescribedby?: string;
};

export const DDSInput = <TOption, IsMulti extends boolean>({
  ariaInvalid,
  ariaDescribedby,
  ...props
}: DDSInputProps<TOption, IsMulti>) => (
  <Input
    {...props}
    aria-invalid={ariaInvalid}
    aria-describedby={ariaDescribedby}
  />
);

type DDSControlProps<TValue, IsMulti extends boolean> = ControlProps<
  TValue,
  IsMulti
> & {
  componentSize: InputSize;
  readOnly?: boolean;
  icon?: SvgIcon;
  dataTestId?: string;
};

type CustomInnerDDSControlProps = React.HTMLAttributes<HTMLDivElement> & {
  'data-testid'?: string;
};

export function DDSControl<TValue, IsMulti extends boolean>(
  props: DDSControlProps<TValue, IsMulti>,
) {
  const {
    componentSize,
    readOnly,
    icon,
    dataTestId,
    className,
    children,
    innerProps,
    ...rest
  } = props;

  return (
    <Control
      {...rest}
      innerProps={
        {
          ...innerProps,
          'data-testid': dataTestId ? dataTestId + '-control' : undefined,
        } as CustomInnerDDSControlProps
      }
      className={cn(
        className,
        styles.control,
        rest.isDisabled && styles['control--disabled'],
        readOnly && styles['control--readonly'],
      )}
    >
      {icon && (
        <Icon
          icon={icon}
          iconSize={getFormInputIconSize(componentSize)}
          className={cn(
            inputStyles['input-group__absolute-el'],
            styles[`icon--${componentSize}`],
          )}
        />
      )}
      {children}
    </Control>
  );
}
