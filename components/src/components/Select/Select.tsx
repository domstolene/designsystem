import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import React, { forwardRef, HTMLAttributes, useState } from 'react';
import {
  components,
  default as ReactSelect,
  OptionProps,
  Props as ReactSelectProps,
  Styles
} from 'react-select';
import { NoticeProps } from 'react-select/src/components/Menu';
import { Option } from 'react-select/src/filters';
import styled, { css, CSSObject } from 'styled-components';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import { selectTokens as tokens } from './Select.tokens';
import { IconWrapper } from '../../helpers/IconWrapper';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import { Typography } from '../Typography';
import { typographyTokens } from '../Typography/Typography.tokens';
import * as CSS from 'csstype';

const prefix = 'dds-select';

const Label = styled(Typography)`
  display: block;
  ${tokens.label.base}
`;

type StyledContainerProps = {
  errorMessage?: string;
  isDisabled?: boolean;
  readOnly?: boolean;
  label?: string;
};

const Container = styled.div<StyledContainerProps>`
  transition: 0.2s;
  position: relative;
  ${tokens.container.base}
  ${scrollbarStyling}
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${({ label }) =>
    label
      ? css`
          ${tokens.container.withLabel.base}
        `
      : css`
          ${tokens.container.noLabel.base}
          .${prefix}__control {
            ${tokens.input.noLabel.base}
          }
        `}
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

  ${({ isDisabled }) =>
    isDisabled &&
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

const Wrapper = styled.div<{ width?: CSS.WidthProperty<string> }>`
  margin: 0;
  width: ${({ width }) => width};
`;

const SelectedIconWrapper = styled(IconWrapper)`
  margin: ${tokens.option.selected.icon.margin};
`;

const { Option: DdsOption, NoOptionsMessage } = components;

const IconOption = (props: OptionProps<any, any>) => (
  <DdsOption {...props}>
    {props.isSelected && (
      <SelectedIconWrapper Icon={CheckOutlinedIcon} iconSize="inline" />
    )}
    {props.data.label}
  </DdsOption>
);

const NoOptionsMessageCustom = (props: NoticeProps<any, any>) => (
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
      top: tokens.optionsList.spaceTop,
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
  required?: boolean;
  readOnly?: boolean;
  errorMessage?: string;
  tip?: string;
  width?: CSS.WidthProperty<string>;
  className?: string;
  style?: React.CSSProperties;
} & ReactSelectProps &
  HTMLAttributes<HTMLDivElement>;

let nextUniqueId = 0;

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      id,
      label,
      errorMessage,
      tip,
      required,
      readOnly,
      value,
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

    const containerProps = {
      errorMessage,
      isDisabled,
      readOnly,
      label,
      className,
      style
    };

    const wrapperProps = {
      width,
      ...rest
    };

    const reactSelectProps: ReactSelectProps = {
      isDisabled: isDisabled || readOnly,
      isClearable: value ? false : isClearable,
      value,
      placeholder,
      inputId: uniqueId,
      name: uniqueId,
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
      ...rest
    };

    return (
      <Wrapper ref={ref} {...wrapperProps}>
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
          <ReactSelect {...reactSelectProps} />
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
