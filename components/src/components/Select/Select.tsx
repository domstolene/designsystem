import React, { forwardRef, HTMLAttributes, useState } from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { default as ReactSelect, components, Styles } from 'react-select';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import { selectTokens as tokens } from './selectTokens';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { IconWrapper } from '../../helpers/IconWrapper';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import { Option } from 'react-select/src/filters';

const prefix = 'dds-select';

const Label = styled.label`
  display: block;
  ${tokens.label.base}
`;

type StyledContainerProps = {
  errorMessage?: string;
  width?: string;
  disabled?: boolean;
  readOnly?: boolean;
};

const Container = styled.div<StyledContainerProps>`
  transition: 0.2s;
  position: relative;
  width: ${({ width }) => width};
  ${tokens.container.base}
  ${scrollbarStyling}
    &:hover {
    ${tokens.container.hover.base}
    box-shadow: 0 0 0 1px ${tokens.container.hover.base.borderColor};
    ${Label} {
      ${tokens.label.hover.base}
    }
  }
  &:focus-within {
    ${tokens.container.focus.base}
    box-shadow: 0 0 0 1px ${tokens.container.focus.base.borderColor};
    ${Label} {
      ${tokens.label.focus.base}
    }
  }
  ${({ errorMessage }) =>
    errorMessage &&
    css`
      ${tokens.container.danger.base}
      box-shadow: 0 0 0 1px ${tokens.container.danger.base.borderColor};
      &:hover {
        ${tokens.container.danger.hover.base}
        box-shadow: 0 0 0 1px ${tokens.container.danger.hover.base.borderColor};
      }
      &:focus-within {
        ${tokens.container.danger.focus.base}
        box-shadow: 0 0 0 1px ${tokens.container.danger.focus.base.borderColor};
      }
    `}

  .${prefix}__menu-list {
    ${scrollbarStyling}
  }
  &:hover
    .${prefix}__dropdown-indicator,
    &:focus-within
    .${prefix}__dropdown-indicator {
    ${tokens.dropdownIndicator.hover.base}
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      ${tokens.container.disabled.base}
      &:hover {
        box-shadow: none;
        ${tokens.container.disabled.base}
        ${Label} {
          ${tokens.label.base}
        }
        &:hover .${prefix}__dropdown-indicator {
          ${tokens.dropdownIndicator.base}
        }
      }
    `}
  ${({ readOnly }) =>
    readOnly &&
    css`
      ${tokens.container.readOnly.base}
      &:hover {
        box-shadow: none;
        ${tokens.container.readOnly.base}
        ${Label} {
          ${tokens.label.base}
        }
      }
      .${prefix}__dropdown-indicator, &:hover .${prefix}__dropdown-indicator {
        ${tokens.dropdownIndicator.readOnly.base}
      }
    `}
`;

const Wrapper = styled.div`
  margin: 0;
`;

const SelectedIconWrapper = styled(IconWrapper)`
  margin: ${tokens.option.selected.icon.margin};
`;

const { Option: DdsOption, NoOptionsMessage } = components;

const IconOption = (props: any) => (
  <DdsOption {...props}>
    {props.isSelected && (
      <SelectedIconWrapper Icon={CheckOutlinedIcon} iconSize="inline" />
    )}
    {props.data.label}
  </DdsOption>
);

const NoOptionsMessageCustom = (props: any) => (
  <NoOptionsMessage {...props}>Ingen treff</NoOptionsMessage>
);

const customStyles: Partial<Styles<any, false, any>> = {
  placeholder: () => {
    return {
      ...tokens.placeholder.base
    };
  },
  indicatorSeparator: () => {
    return {
      backgroundColor: 'transparent'
    };
  },
  dropdownIndicator: (provided, state) => {
    return {
      display: 'flex',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
      transition: '0.2s',
      ...tokens.dropdownIndicator.base
    };
  },
  control: () => {
    return {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      ...tokens.input.base
    };
  },
  valueContainer: provided => {
    return {
      ...provided,
      padding: 0
    };
  },
  singleValue: provided => {
    return {
      ...provided,
      margin: 0
    };
  },
  menu: () => {
    return {
      position: 'relative',
      zIndex: 3,
      transition: '0.2s',
      width: 'calc(100% + 2px)',
      transform: 'translate(-1px)',
      top: '14px',
      boxShadow: `0 0 0 1px ${tokens.optionsList.base.borderColor}`,
      ...tokens.optionsList.base
    };
  },
  option: (provided, state) => {
    let selectedBase: CSSObject = {};
    let focusedBase: CSSObject = {};
    if (state.isSelected) selectedBase = { ...tokens.option.selected.base };
    if (state.isFocused) focusedBase = { ...tokens.option.selected.base };
    return {
      display: 'flex',
      alignItems: 'center',
      transition: '0.2s',
      ...tokens.option.base,
      '&:hover': {
        ...tokens.option.hover.base
      },
      ...selectedBase,
      ...focusedBase
    };
  },
  noOptionsMessage: () => {
    return {
      ...tokens.noOptionsMessage.base
    };
  },
  clearIndicator: () => {
    return {
      display: 'flex',
      ...tokens.clearIndicator.base,
      '&:hover': {
        ...tokens.clearIndicator.hover.base
      }
    };
  },
  input: () => {
    return {};
  }
};

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

export type SelectProps = {
  label?: string;
  items: string[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  errorMessage?: string;
  tip?: string;
  width?: string;
  loading?: boolean;
  value?: string | null;
  defaultValue?: string | null;
  className?: string;
  style?: React.CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

let nextUniqueId = 0;

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      id,
      label,
      placeholder = '-- Velg fra listen --',
      errorMessage,
      items,
      tip,
      required,
      disabled,
      readOnly,
      width = tokens.container.defaultWidth,
      loading,
      value,
      defaultValue,
      className,
      style,
      onChange,
      ...rest
    },
    ref
  ) => {
    const options: { value: string; label: string }[] = [];
    items.forEach(e => {
      options.push({ value: e, label: e });
    });

    const [uniqueId] = useState<string>(id ?? `select-${nextUniqueId++}`);

    const containerProps = {
      errorMessage,
      width,
      disabled,
      readOnly,
      className,
      style
    };

    const inputProps: { [k: string]: any } = {
      options,
      placeholder,
      required,
      isDisabled: disabled || readOnly,
      isClearable: true,
      inputId: uniqueId,
      name: uniqueId,
      isLoading: loading,
      classNamePrefix: prefix,
      styles: customStyles,
      filterOption: (option: Option, inputValue: string) => {
        const { label } = option;
        return searchFilter(label, inputValue) || inputValue === '';
      },
      components: {
        Option: IconOption,
        NoOptionsMessage: NoOptionsMessageCustom
      },
      onChange
      // menuIsOpen brukes til testing når listen med alternativer skal alltid være åpen
      // menuIsOpen: true
    };

    if (value !== undefined && inputProps?.value !== value) {
      if (value === null || value === '') {
        inputProps.value = null;
      } else {
        inputProps.value = { value: value, label: value };
      }
    }

    if (
      defaultValue !== undefined &&
      inputProps?.defaultValue !== defaultValue
    ) {
      if (defaultValue === null || defaultValue === '') {
        inputProps.defaultValue = null;
      } else {
        inputProps.defaultValue = { value: defaultValue, label: defaultValue };
      }
    }

    return (
      <Wrapper ref={ref} {...rest}>
        <Container {...containerProps}>
          <Label htmlFor={uniqueId}>
            {label} {required && <RequiredMarker />}
          </Label>
          <ReactSelect {...inputProps} />
        </Container>
        {errorMessage ? (
          <InputMessage messageType={'error'} message={errorMessage} />
        ) : tip ? (
          <InputMessage messageType={'tip'} message={tip} />
        ) : (
          ''
        )}
      </Wrapper>
    );
  }
);
