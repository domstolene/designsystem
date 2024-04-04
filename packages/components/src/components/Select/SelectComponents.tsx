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

import { InnerSingleValue, StyledIcon } from './Select.styles';
import { getFormInputIconSize } from '../../utils';
import { type InputSize } from '../helpers';
import { Icon, type SvgIcon } from '../Icon';
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
    <InnerSingleValue id={id}>
      {Element ? <Element {...props} /> : props.children}
    </InnerSingleValue>
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
    <Icon icon={CloseSmallIcon} iconSize={getFormInputIconSize(size)} />
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
) => (
  <DropdownIndicator {...props}>
    <Icon icon={ChevronDownIcon} iconSize={getFormInputIconSize(size)} />
  </DropdownIndicator>
);

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
  icon?: SvgIcon,
  dataTestId?: string,
) => (
  <div
    data-testid={dataTestId ? ((dataTestId + '-control') as string) : undefined}
  >
    <Control {...props}>
      {icon && (
        <StyledIcon
          icon={icon}
          iconSize={getFormInputIconSize(componentSize)}
        />
      )}
      {props.children}
    </Control>
  </div>
);
