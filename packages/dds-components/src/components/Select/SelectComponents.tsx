import type { JSX } from 'react';
import {
  type ClearIndicatorProps,
  type ControlProps,
  type DropdownIndicatorProps,
  type GroupBase,
  type InputProps,
  type MultiValueRemoveProps,
  type NoticeProps,
  type OptionProps,
  type SingleValueProps,
  components,
} from 'react-select';

import styles from './Select.module.css';
import { cn, getFormInputIconSize } from '../../utils';
import { type InputSize } from '../helpers';
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

export const DDSOption = <TValue, IsMulti extends boolean>(
  props: OptionProps<TValue, IsMulti>,
  componentSize: InputSize,
) => (
  <Option {...props}>
    {props.isSelected && (
      <Icon icon={CheckIcon} iconSize={getFormInputIconSize(componentSize)} />
    )}
    {props.children}
  </Option>
);

export const CustomOption = <TValue, IsMulti extends boolean>(
  props: OptionProps<TValue, IsMulti>,
  Element: (props: OptionProps<TValue, IsMulti>) => JSX.Element,
) => (
  <Option {...props}>
    <Element {...props} />
  </Option>
);

export const CustomSingleValue = <TOption, IsMulti extends boolean>(
  props: SingleValueProps<TOption, IsMulti, GroupBase<TOption>>,
  id?: string,
  Element?: (
    props: SingleValueProps<TOption, IsMulti, GroupBase<TOption>>,
  ) => JSX.Element,
) => (
  <SingleValue {...props}>
    <div id={id} className={styles['inner-single-value']}>
      {Element ? <Element {...props} /> : props.children}
    </div>
  </SingleValue>
);

export const DDSNoOptionsMessage = <TValue, IsMulti extends boolean>(
  props: NoticeProps<TValue, IsMulti>,
) => <NoOptionsMessage {...props}>Ingen treff</NoOptionsMessage>;

export const DDSClearIndicator = <TValue, IsMulti extends boolean>(
  props: ClearIndicatorProps<TValue, IsMulti>,
  size: InputSize,
) => (
  <ClearIndicator {...props}>
    <Icon icon={CloseSmallIcon} iconSize={getIndicatorIconSize(size)} />
  </ClearIndicator>
);

export const DDSMultiValueRemove = <TValue, IsMulti extends boolean>(
  props: MultiValueRemoveProps<TValue, IsMulti>,
) => (
  <MultiValueRemove {...props}>
    <Icon icon={CloseSmallIcon} iconSize="small" />
  </MultiValueRemove>
);

export const DDSDropdownIndicator = <TValue, IsMulti extends boolean>(
  props: DropdownIndicatorProps<TValue, IsMulti>,
  size: InputSize,
) => {
  const { className, ...rest } = props;
  return (
    <DropdownIndicator
      {...rest}
      className={cn(className, styles['dropdown-indicator'])}
    >
      <Icon icon={ChevronDownIcon} iconSize={getIndicatorIconSize(size)} />
    </DropdownIndicator>
  );
};

export const DDSInput = <TOption, IsMulti extends boolean>(
  props: InputProps<TOption, IsMulti>,
  ariaInvalid: boolean,
  ariaDescribedby?: string,
) => (
  <Input
    {...props}
    aria-invalid={ariaInvalid}
    aria-describedby={ariaDescribedby}
  />
);

export const DDSControl = <TValue, IsMulti extends boolean>(
  props: ControlProps<TValue, IsMulti>,
  componentSize: InputSize,
  readOnly?: boolean,
  icon?: SvgIcon,
  dataTestId?: string,
) => {
  const { className, ...rest } = props;

  return (
    <div
      data-testid={
        dataTestId ? ((dataTestId + '-control') as string) : undefined
      }
    >
      <Control
        {...rest}
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
              inputStyles['input-group__absolute-element'],
              styles[`icon--${componentSize}`],
            )}
          />
        )}
        {props.children}
      </Control>
    </div>
  );
};
