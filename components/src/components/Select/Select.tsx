import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Property } from 'csstype';
import React, { useState } from 'react';
import {
  components,
  default as ReactSelect,
  GroupBase,
  InputProps,
  NoticeProps,
  OptionProps,
  Props as ReactSelectProps,
  SelectInstance
} from 'react-select';
import { InputMessage } from '../InputMessage';
import { RequiredMarker } from '../../helpers';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator
} from '../../utils';
import {
  Container,
  getCustomStyles,
  Label,
  prefix,
  SelectedIconWrapper,
  Wrapper
} from './Select.styles';
import { selectTokens as tokens } from './Select.tokens';
import { WithRequiredIf } from '../../types/utils';

const { Option: DdsOption, NoOptionsMessage, Input } = components;

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
    {props.isSelected && (
      <SelectedIconWrapper Icon={CheckOutlinedIcon} iconSize="inline" />
    )}
    {props.children}
  </DdsOption>
);

const NoOptionsMessageCustom = <TValue, IsMulti extends boolean>(
  props: NoticeProps<TValue, IsMulti>
) => <NoOptionsMessage {...props}>Ingen treff</NoOptionsMessage>;

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
} & WrappedReactSelectProps<TOption, IsMulti, GroupBase<TOption>>;

let nextUniqueId = 0;

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
    ...rest
  }: SelectProps<TOption, IsMulti>,
  ref: ForwardRefType<TOption, IsMulti>
) => {
  const [uniqueId] = useState<string>(id ?? `select-${nextUniqueId++}`);

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
    width
  };

  const containerProps = {
    errorMessage,
    isDisabled,
    isMulti,
    readOnly,
    hasLabel,
    className,
    style
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
      Option: IconOption,
      NoOptionsMessage: NoOptionsMessageCustom,
      Input: CustomInput
    },
    'aria-invalid': hasErrorMessage ? true : undefined,
    ...rest
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
