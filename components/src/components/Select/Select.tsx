import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import * as CSS from 'csstype';
import React, { useState } from 'react';
import {
  components,
  default as ReactSelect,
  GroupBase,
  NoticeProps,
  OptionProps,
  Props as ReactSelectProps,
  SelectInstance
} from 'react-select';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import {
  Container,
  CustomStyles,
  Label,
  prefix,
  SelectedIconWrapper,
  Wrapper
} from './Select.styles';
import { selectTokens as tokens } from './Select.tokens';

const { Option: DdsOption, NoOptionsMessage } = components;

const IconOption = (props: OptionProps<any, any>) => (
  <DdsOption {...props}>
    {props.isSelected && (
      <SelectedIconWrapper Icon={CheckOutlinedIcon} iconSize="inline" />
    )}
    {props.children}
  </DdsOption>
);

const NoOptionsMessageCustom = (props: NoticeProps<any, any>) => (
  <NoOptionsMessage {...props}>Ingen treff</NoOptionsMessage>
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

export type SelectOption = {
  label: string;
  value: string | number;
  data?: unknown;
};

export type SelectProps<IsMulti extends boolean> = {
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  errorMessage?: string;
  tip?: string;
  width?: CSS.WidthProperty<string>;
  className?: string;
  style?: React.CSSProperties;
} & ReactSelectProps<SelectOption, IsMulti, GroupBase<SelectOption>>;

let nextUniqueId = 0;

type ForwardRefType<IsMulti extends boolean> = React.ForwardedRef<
  SelectInstance<SelectOption, IsMulti, GroupBase<SelectOption>>
>;

const SelectInner = <IsMulti extends boolean = false>(
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
  }: SelectProps<IsMulti>,
  ref: ForwardRefType<IsMulti>
) => {
  const [uniqueId] = useState<string>(id ?? `select-${nextUniqueId++}`);

  const hasLabel = !!label;

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
    SelectOption,
    IsMulti,
    GroupBase<SelectOption>
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
    styles: CustomStyles,
    filterOption: (option: SelectOption, inputValue: string) => {
      const { label } = option;
      return searchFilter(label, inputValue) || inputValue === '';
    },
    components: {
      Option: IconOption,
      NoOptionsMessage: NoOptionsMessageCustom
    },
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
        <InputMessage messageType="error" message={errorMessage} />
      )}

      {tip && !errorMessage && <InputMessage messageType="tip" message={tip} />}
    </Wrapper>
  );
};

export const Select = React.forwardRef(SelectInner) as typeof SelectInner;
