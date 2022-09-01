import { Property } from 'csstype';
import React, { useId } from 'react';
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
} from 'react-select';
import { RequiredMarker } from '../../helpers';
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
  Label,
  prefix,
  Wrapper,
} from './Select.styles';
import { selectTokens as tokens } from './Select.tokens';

const {
  Option: DdsOption,
  NoOptionsMessage,
  Input,
  SingleValue,
  ClearIndicator,
  DropdownIndicator,
  MultiValueRemove,
} = components;

export type SelectOption<TValue = unknown> = {
  label: string | number;
  value: TValue;
};

export const createSelectOptions = <TValue extends string | number>(
  ...args: TValue[]
): SelectOption<TValue>[] => args.map(v => ({ label: v, value: v }));

const IconOption = <TValue, IsMulti extends boolean>(
  props: OptionProps<TValue, IsMulti>
) => (
  <DdsOption {...props}>
    {props.isSelected && <Icon icon={CheckIcon} iconSize="medium" />}
    {props.children}
  </DdsOption>
);

const CustomOption = <TValue, IsMulti extends boolean>(
  props: OptionProps<TValue, IsMulti>,
  Element: (props: OptionProps<TValue, IsMulti>) => JSX.Element
) => (
  <DdsOption {...props}>
    <Element {...props} />
  </DdsOption>
);

const CustomSingleValue = <TOption, IsMulti extends boolean>(
  props: SingleValueProps<TOption, IsMulti, GroupBase<TOption>>,
  Element: (
    props: SingleValueProps<TOption, IsMulti, GroupBase<TOption>>
  ) => JSX.Element
) => (
  <SingleValue {...props}>
    <Element {...props} />
  </SingleValue>
);

const NoOptionsMessageCustom = <TValue, IsMulti extends boolean>(
  props: NoticeProps<TValue, IsMulti>
) => <NoOptionsMessage {...props}>Ingen treff</NoOptionsMessage>;

const CustomClearIndicator = <TValue, IsMulti extends boolean>(
  props: ClearIndicatorProps<TValue, IsMulti>
) => (
  <ClearIndicator {...props}>
    <Icon icon={CloseSmallIcon} iconSize="medium" />
  </ClearIndicator>
);

const CustomMultiValueRemove = <TValue, IsMulti extends boolean>(
  props: MultiValueRemoveProps<TValue, IsMulti>
) => (
  <MultiValueRemove {...props}>
    <Icon icon={CloseSmallIcon} iconSize="medium" />
  </MultiValueRemove>
);

const CustomDropdownIndicator = <TValue, IsMulti extends boolean>(
  props: DropdownIndicatorProps<TValue, IsMulti>
) => (
  <DropdownIndicator {...props}>
    <Icon icon={ChevronDownIcon} iconSize="medium" />
  </DropdownIndicator>
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
    errorMessage,
    tip,
    required,
    readOnly,
    options,
    isMulti,
    value,
    defaultValue,
    width = tokens.container.defaultWidth,
    closeMenuOnSelect,
    className,
    style,
    isDisabled,
    isClearable = true,
    placeholder = '-- Velg fra listen --',
    customOptionElement,
    customSingleValueElement,
    ...rest
  }: SelectProps<TOption, IsMulti>,
  ref: ForwardRefType<TOption, IsMulti>
) => {
  const generatedId = useId();
  const [uniqueId] = id ?? `${generatedId}-select`;

  const hasLabel = !!label;
  const hasErrorMessage = !!errorMessage;
  const tipId = derivativeIdGenerator(uniqueId, 'tip', tip);
  const errorMessageId = derivativeIdGenerator(
    uniqueId,
    'errorMessage',
    errorMessage
  );

  const CustomInput = (props: InputProps<TOption, IsMulti>) => (
    <Input
      {...props}
      aria-describedby={spaceSeparatedIdListGenerator([tipId, errorMessageId])}
    />
  );

  const wrapperProps = {
    width,
  };

  const containerProps = {
    errorMessage,
    isDisabled,
    isMulti,
    readOnly,
    hasLabel,
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
    placeholder,
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
        : IconOption,
      NoOptionsMessage: NoOptionsMessageCustom,
      Input: CustomInput,
      SingleValue: customSingleValueElement
        ? props => CustomSingleValue(props, customSingleValueElement)
        : SingleValue,
      ClearIndicator: CustomClearIndicator,
      DropdownIndicator: CustomDropdownIndicator,
      MultiValueRemove: CustomMultiValueRemove,
    },
    'aria-invalid': hasErrorMessage ? true : undefined,
    ...rest,
  };

  return (
    <Wrapper {...wrapperProps}>
      <Container {...containerProps}>
        {label && (
          <Label
            htmlFor={uniqueId}
            forwardedAs="label"
            typographyType="supportingStyleLabel01"
          >
            {label} {required && <RequiredMarker />}
          </Label>
        )}
        <ReactSelect {...reactSelectProps} ref={ref} />
      </Container>

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
    </Wrapper>
  );
};

export const Select = React.forwardRef(SelectInner) as typeof SelectInner;
