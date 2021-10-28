import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import * as CSS from 'csstype';
import React, { forwardRef, useState } from 'react';
import {
  components,
  default as ReactSelect,
  OptionProps,
  Props as ReactSelectProps
} from 'react-select';
import { NoticeProps } from 'react-select/src/components/Menu';
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

export type SelectProps = {
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  errorMessage?: string;
  tip?: string;
  width?: CSS.WidthProperty<string>;
  className?: string;
  style?: React.CSSProperties;
} & ReactSelectProps<SelectOption>;

let nextUniqueId = 0;

export const Select = forwardRef<ReactSelect<SelectOption>, SelectProps>(
  (
    {
      id,
      label,
      errorMessage,
      tip,
      required,
      readOnly,
      options,
      value,
      defaultValue,
      width = tokens.container.defaultWidth,
      className,
      style,
      isDisabled,
      isClearable = true,
      placeholder = '-- Velg fra listen --',
      ...rest
    }: SelectProps,
    ref
  ) => {
    const [uniqueId] = useState<string>(id ?? `select-${nextUniqueId++}`);

    const wrapperProps = {
      width
    };

    const containerProps = {
      errorMessage,
      isDisabled,
      readOnly,
      label,
      className,
      style
    };

    const reactSelectProps: ReactSelectProps<SelectOption> = {
      options: options,
      value: value,
      defaultValue: defaultValue,
      isDisabled: isDisabled || readOnly,
      isClearable: isClearable,
      placeholder: placeholder,
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

        {tip && !errorMessage && (
          <InputMessage messageType="tip" message={tip} />
        )}
      </Wrapper>
    );
  }
);
