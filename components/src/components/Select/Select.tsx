import { Property } from 'csstype';
import React, { ReactNode, useId } from 'react';
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
import { InputSize, RequiredMarker } from '../../helpers';
import { CheckIcon, ChevronDownIcon, CloseSmallIcon } from '../../icons/tsx';
import { WithRequiredIf } from '../../types/utils';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Icon } from '../Icon';
import { InputMessage } from '../InputMessage';
import {
  Container,
  getCustomStyles,
  InnerSingleValue,
  prefix,
  StyledIcon,
} from './Select.styles';
import { Label } from '../Typography';
import { SvgIcon } from '../../icons/utils';
import { getFormInputIconSize } from '../../helpers/Input/Input.utils';

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

export type SelectOption<TValue = unknown> = {
  label: string | number;
  value: TValue;
};

export const createSelectOptions = <TValue extends string | number>(
  ...args: TValue[]
): SelectOption<TValue>[] => args.map(v => ({ label: v, value: v }));

const DDSOption = <TValue, IsMulti extends boolean>(
  props: OptionProps<TValue, IsMulti>
) => (
  <Option {...props}>
    {props.isSelected && <Icon icon={CheckIcon} iconSize="medium" />}
    {props.children}
  </Option>
);

const CustomOption = <TValue, IsMulti extends boolean>(
  props: OptionProps<TValue, IsMulti>,
  Element: (props: OptionProps<TValue, IsMulti>) => JSX.Element
) => (
  <Option {...props}>
    <Element {...props} />
  </Option>
);

const CustomSingleValue = <TOption, IsMulti extends boolean>(
  props: SingleValueProps<TOption, IsMulti, GroupBase<TOption>>,
  id?: string,
  Element?: (
    props: SingleValueProps<TOption, IsMulti, GroupBase<TOption>>
  ) => JSX.Element
) => (
  <SingleValue {...props}>
    <InnerSingleValue id={id}>
      {Element ? <Element {...props} /> : props.children}
    </InnerSingleValue>
  </SingleValue>
);

const DDSNoOptionsMessage = <TValue, IsMulti extends boolean>(
  props: NoticeProps<TValue, IsMulti>
) => <NoOptionsMessage {...props}>Ingen treff</NoOptionsMessage>;

const DDSClearIndicator = <TValue, IsMulti extends boolean>(
  props: ClearIndicatorProps<TValue, IsMulti>,
  size: InputSize
) => (
  <ClearIndicator {...props}>
    <Icon icon={CloseSmallIcon} iconSize={getFormInputIconSize(size)} />
  </ClearIndicator>
);

const DDSMultiValueRemove = <TValue, IsMulti extends boolean>(
  props: MultiValueRemoveProps<TValue, IsMulti>
) => (
  <MultiValueRemove {...props}>
    <Icon icon={CloseSmallIcon} iconSize="small" />
  </MultiValueRemove>
);

const DDSDropdownIndicator = <TValue, IsMulti extends boolean>(
  props: DropdownIndicatorProps<TValue, IsMulti>,
  size: InputSize
) => (
  <DropdownIndicator {...props}>
    <Icon icon={ChevronDownIcon} iconSize={getFormInputIconSize(size)} />
  </DropdownIndicator>
);

const DDSInput = <TOption, IsMulti extends boolean>(
  props: InputProps<TOption, IsMulti>,
  ariaInvalid: boolean,
  ariaDescribedby?: string
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
  icon?: SvgIcon
) => (
  <Control {...props}>
    {icon && (
      <StyledIcon icon={icon} iconSize={getFormInputIconSize(componentSize)} />
    )}
    {props.children}
  </Control>
);

function escapeRegexCharacters(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function searchFilter(text: string, search: string): boolean {
  // Søkeordet er enten først i teksten, eller så har det mellomrom, bindestrek eller start-parentes før seg.
  const searchFilterRegex = new RegExp(
    `(?:^|[\\s-(])${escapeRegexCharacters(search.toLowerCase())}`
  );
  return searchFilterRegex.test(text.toLowerCase());
}

const defaultWidth: Property.Width<string> = '320px';

const getPlaceholder = (
  placeholder?: ReactNode,
  isMulti?: boolean
): ReactNode =>
  placeholder
    ? placeholder
    : isMulti
    ? '-- Velg en eller flere --'
    : '-- Velg fra listen --';

type WrappedReactSelectProps<
  TOption extends Record<string, unknown>,
  IsMulti extends boolean,
  Group extends GroupBase<TOption>
> = WithRequiredIf<
  TOption extends SelectOption ? false : true,
  ReactSelectProps<TOption, IsMulti, Group>,
  'getOptionLabel' | 'getOptionValue'
>;

export type SelectProps<
  TOption extends Record<string, unknown>,
  IsMulti extends boolean
> = {
  /**Ledetekst for nedtrekkslisten. */
  label?: string;
  /**Gir required styling. **OBS!** støtter ikke DOM `required` attributt.   */
  required?: boolean;
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
    props: OptionProps<TOption, IsMulti, GroupBase<TOption>>
  ) => JSX.Element;
  customSingleValueElement?: (
    props: SingleValueProps<TOption, IsMulti, GroupBase<TOption>>
  ) => JSX.Element;
} & WrappedReactSelectProps<TOption, IsMulti, GroupBase<TOption>>;

type ForwardRefType<TOption, IsMulti extends boolean> = React.ForwardedRef<
  SelectInstance<TOption, IsMulti, GroupBase<TOption>>
>;

const SelectInner = <
  TOption extends Record<string, unknown>,
  IsMulti extends boolean = false
>(
  {
    id,
    label,
    componentSize = 'medium',
    errorMessage,
    tip,
    required,
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
  }: SelectProps<TOption, IsMulti>,
  ref: ForwardRefType<TOption, IsMulti>
) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-select`;

  const singleValueId = !isMulti ? `${uniqueId}-singleValue` : undefined;
  const hasLabel = !!label;
  const hasErrorMessage = !!errorMessage;
  const tipId = derivativeIdGenerator(uniqueId, 'tip', tip);
  const errorMessageId = derivativeIdGenerator(
    uniqueId,
    'errorMessage',
    errorMessage
  );

  const containerProps = {
    width,
    componentSize,
    errorMessage,
    isDisabled,
    readOnly,
    isMulti,
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
    isDisabled: isDisabled || readOnly,
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
    styles: getCustomStyles<TOption>(),
    filterOption: (option, inputValue) => {
      const { label } = option;
      return searchFilter(label, inputValue) || inputValue === '';
    },
    components: {
      Option: customOptionElement
        ? props => CustomOption(props, customOptionElement)
        : DDSOption,
      NoOptionsMessage: DDSNoOptionsMessage,
      Input: props =>
        DDSInput(
          props,
          hasErrorMessage,
          spaceSeparatedIdListGenerator([singleValueId, tipId, errorMessageId])
        ),
      SingleValue: props =>
        CustomSingleValue(props, singleValueId, customSingleValueElement),
      ClearIndicator: props => DDSClearIndicator(props, componentSize),
      DropdownIndicator: props => DDSDropdownIndicator(props, componentSize),
      MultiValueRemove: DDSMultiValueRemove,
      Control: props => DDSControl(props, componentSize, icon),
    },
    'aria-invalid': hasErrorMessage ? true : undefined,
    ...rest,
  };

  return (
    <Container {...containerProps}>
      {hasLabel && (
        <Label htmlFor={uniqueId}>
          {label} {required && <RequiredMarker />}
        </Label>
      )}
      <ReactSelect {...reactSelectProps} ref={ref} />

      {errorMessage && (
        <InputMessage
          messageType="error"
          id={errorMessageId}
          message={errorMessage}
        />
      )}

      {tip && !errorMessage && (
        <InputMessage messageType="tip" id={tipId} message={tip} />
      )}
    </Container>
  );
};

export const Select = React.forwardRef(SelectInner) as typeof SelectInner;
