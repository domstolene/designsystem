import React, { HTMLAttributes, ReactNode, useId } from 'react';
import { Property } from 'csstype';
import {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  default as ReactSelect,
  GroupBase,
  InputProps,
  NoticeProps,
  OptionProps,
  Props as ReactSelectProps,
  SelectInstance,
  SingleValueProps,
  MultiValueRemoveProps,
  ControlProps,
} from 'react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  CloseSmallIcon,
} from '@norges-domstoler/dds-icons';
import { WithRequiredIf } from '@norges-domstoler/dds-core';
import {
  derivativeIdGenerator,
  searchFilter,
  spaceSeparatedIdListGenerator,
} from '@norges-domstoler/dds-core';
import { Icon } from '@norges-domstoler/dds-icons';
import {
  Container,
  getCustomStyles,
  InnerSingleValue,
  prefix,
  StyledIcon,
} from './Select.styles';
import { Label } from '@norges-domstoler/dds-typography';
import { SvgIcon } from '@norges-domstoler/dds-icons';
import { getFormInputIconSize } from '../../utils/icon';
import { renderInputMessage } from '../../utils/renderInputMessage';
import { InputSize } from '@norges-domstoler/dds-form';

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

export interface SelectOption<TValue = unknown> {
  label: string | number;
  value: TValue;
}

export const createSelectOptions = <TValue extends string | number>(
  ...args: TValue[]
): SelectOption<TValue>[] => args.map(v => ({ label: v, value: v }));

const DDSOption = <TValue, IsMulti extends boolean>(
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

const CustomOption = <TValue, IsMulti extends boolean>(
  props: OptionProps<TValue, IsMulti>,
  Element: (props: OptionProps<TValue, IsMulti>) => JSX.Element,
) => (
  <Option {...props}>
    <Element {...props} />
  </Option>
);

const CustomSingleValue = <TOption, IsMulti extends boolean>(
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

const DDSNoOptionsMessage = <TValue, IsMulti extends boolean>(
  props: NoticeProps<TValue, IsMulti>,
) => <NoOptionsMessage {...props}>Ingen treff</NoOptionsMessage>;

const DDSClearIndicator = <TValue, IsMulti extends boolean>(
  props: ClearIndicatorProps<TValue, IsMulti>,
  size: InputSize,
) => (
  <ClearIndicator {...props}>
    <Icon icon={CloseSmallIcon} iconSize={getFormInputIconSize(size)} />
  </ClearIndicator>
);

const DDSMultiValueRemove = <TValue, IsMulti extends boolean>(
  props: MultiValueRemoveProps<TValue, IsMulti>,
) => (
  <MultiValueRemove {...props}>
    <Icon icon={CloseSmallIcon} iconSize="small" />
  </MultiValueRemove>
);

const DDSDropdownIndicator = <TValue, IsMulti extends boolean>(
  props: DropdownIndicatorProps<TValue, IsMulti>,
  size: InputSize,
) => (
  <DropdownIndicator {...props}>
    <Icon icon={ChevronDownIcon} iconSize={getFormInputIconSize(size)} />
  </DropdownIndicator>
);

const DDSInput = <TOption, IsMulti extends boolean>(
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

const DDSControl = <TValue, IsMulti extends boolean>(
  props: ControlProps<TValue, IsMulti>,
  componentSize: InputSize,
  icon?: SvgIcon,
) => (
  <Control {...props}>
    {icon && (
      <StyledIcon icon={icon} iconSize={getFormInputIconSize(componentSize)} />
    )}
    {props.children}
  </Control>
);

const defaultWidth: Property.Width<string> = '320px';

const getPlaceholder = (
  placeholder?: ReactNode,
  isMulti?: boolean,
): ReactNode =>
  placeholder
    ? placeholder
    : isMulti
      ? '-- Velg en eller flere --'
      : '-- Velg fra listen --';

type WrappedReactSelectProps<
  TOption extends SelectOption<TValue>,
  IsMulti extends boolean,
  Group extends GroupBase<TOption>,
  TValue = unknown,
> = WithRequiredIf<
  TOption extends SelectOption ? false : true,
  ReactSelectProps<TOption, IsMulti, Group>,
  'getOptionLabel' | 'getOptionValue'
>;

export type SelectProps<
  TOption extends SelectOption<TValue>,
  IsMulti extends boolean,
  TValue = unknown,
> = {
  /**Ledetekst for nedtrekkslisten. */
  label?: string;
  /**Størrelsen på komponenten. */
  componentSize?: InputSize;
  /**Ikonet som vises i komponenten. */
  icon?: SvgIcon;
  /**Nedtrekkslisten blir disabled og får readOnly styling. */
  readOnly?: boolean;
  /**Meldingen som vises ved valideringsfeil. */
  errorMessage?: string;
  /**Hjelpetekst. */
  tip?: string;
  /**Custom bredde ved behov. */
  width?: Property.Width<string>;
  /** CSS klassenavn. */
  className?: string;
  /** Inline styling. */
  style?: React.CSSProperties;
  customOptionElement?: (
    props: OptionProps<TOption, IsMulti, GroupBase<TOption>>,
  ) => JSX.Element;
  customSingleValueElement?: (
    props: SingleValueProps<TOption, IsMulti, GroupBase<TOption>>,
  ) => JSX.Element;
} & Pick<HTMLAttributes<HTMLInputElement>, 'aria-required'> &
  WrappedReactSelectProps<TOption, IsMulti, GroupBase<TOption>>;

type ForwardRefType<TOption, IsMulti extends boolean> = React.ForwardedRef<
  SelectInstance<TOption, IsMulti, GroupBase<TOption>>
>;

const SelectInner = <
  TOption extends SelectOption<TValue>,
  IsMulti extends boolean = false,
  TValue = unknown,
>(
  props: SelectProps<TOption, IsMulti>,
  ref: ForwardRefType<TOption, IsMulti>,
) => {
  const {
    id,
    label,
    componentSize = 'medium',
    errorMessage,
    tip,
    required,
    'aria-required': ariaRequired,
    readOnly,
    options,
    isMulti,
    value,
    icon,
    defaultValue,
    width = defaultWidth,
    closeMenuOnSelect,
    className,
    style,
    isDisabled,
    isClearable = true,
    placeholder,
    customOptionElement,
    customSingleValueElement,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-select`;

  const singleValueId = !isMulti ? `${uniqueId}-singleValue` : undefined;
  const hasLabel = !!label;
  const hasErrorMessage = !!errorMessage;
  const showRequiredStyling = !!(required || ariaRequired);

  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

  const containerProps = {
    $width: width,
    $componentSize: componentSize,
    $errorMessage: errorMessage,
    $isDisabled: isDisabled,
    $readOnly: readOnly,
    $isMulti: isMulti,
    className,
    style,
  };

  const reactSelectProps: ReactSelectProps<
    TOption,
    IsMulti,
    GroupBase<TOption>
  > = {
    options,
    value,
    defaultValue,
    isDisabled: !!isDisabled || readOnly,
    isClearable,
    placeholder: getPlaceholder(placeholder, isMulti),
    closeMenuOnSelect: closeMenuOnSelect
      ? closeMenuOnSelect
      : isMulti
        ? false
        : true,
    isMulti,
    inputId: uniqueId,
    name: uniqueId,
    classNamePrefix: prefix,
    styles: getCustomStyles<TOption>(componentSize),
    filterOption: (option, inputValue) => {
      const { label } = option;
      return searchFilter(label, inputValue) || inputValue === '';
    },
    components: {
      Option: customOptionElement
        ? props => CustomOption(props, customOptionElement)
        : props => DDSOption(props, componentSize),
      NoOptionsMessage: DDSNoOptionsMessage,
      Input: props =>
        DDSInput(
          { ...props, 'aria-required': ariaRequired },
          hasErrorMessage,
          spaceSeparatedIdListGenerator([
            singleValueId,
            tip ? tipId : undefined,
            errorMessage ? errorMessageId : undefined,
          ]),
        ),
      SingleValue: props =>
        CustomSingleValue(props, singleValueId, customSingleValueElement),
      ClearIndicator: props => DDSClearIndicator(props, componentSize),
      DropdownIndicator: props => DDSDropdownIndicator(props, componentSize),
      MultiValueRemove: DDSMultiValueRemove,
      Control: props => DDSControl(props, componentSize, icon),
    },
    'aria-invalid': hasErrorMessage ? true : undefined,
    required,
    ...rest,
  };

  return (
    <Container {...containerProps}>
      {hasLabel && (
        <Label htmlFor={uniqueId} showRequiredStyling={showRequiredStyling}>
          {label}
        </Label>
      )}
      <ReactSelect {...reactSelectProps} ref={ref} />
      {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </Container>
  );
};

export const Select = React.forwardRef(SelectInner) as typeof SelectInner;

// @ts-expect-error TODO fix Select type
Select.displayName = 'Select';
