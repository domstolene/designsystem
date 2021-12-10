import { Styles } from 'react-select';
import styled, { css, CSSObject } from 'styled-components';
import { IconWrapper } from '../../helpers/IconWrapper';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import { Typography } from '../Typography';
import { typographyTokens } from '../Typography/Typography.tokens';
import { selectTokens as tokens } from './Select.tokens';

export const prefix = 'dds-select';

export const Label = styled(Typography)`
  display: block;
  ${tokens.label.base}
`;

type StyledContainerProps = {
  errorMessage?: string;
  isDisabled?: boolean;
  readOnly?: boolean;
  hasLabel: boolean;
  isMulti?: boolean;
};

export const Container = styled.div<StyledContainerProps>`
  transition: 0.2s;
  position: relative;
  ${tokens.container.base}
  ${scrollbarStyling}
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${({ hasLabel, isMulti }) =>
    isMulti
      ? css`
          .${prefix}__value-container {
            ${tokens.valueContainer.isMulti.base}
          }
          .${prefix}__indicators {
            ${tokens.indicatorsContainer.isMulti.base}
          }
        `
      : hasLabel
      ? css`
          .${prefix}__value-container {
            ${tokens.valueContainer.withLabel.base}
          }
          .${prefix}__indicators {
            ${tokens.indicatorsContainer.withLabel.base}
          }
        `
      : css`
          .${prefix}__control {
            ${tokens.input.noLabel.base}
          }
          .${prefix}__value-container {
            ${tokens.valueContainer.noLabel.base}
          }
          .${prefix}__indicators {
            ${tokens.indicatorsContainer.noLabel.base}
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

export const Wrapper = styled.div<{ width?: number | string }>`
  margin: 0;
  width: ${({ width }) => width};
`;

export const SelectedIconWrapper = styled(IconWrapper)`
  margin: ${tokens.option.selected.icon.margin};
`;

export const CustomStyles: Partial<Styles<any, false, any>> = {
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
  multiValue: (provided, state) => {
    const variantStyles: CSSObject = state.selectProps.isDisabled
      ? {
          ...tokens.multiValue.disabled.base
        }
      : {
          ...tokens.multiValue.enabled.base
        };
    return {
      ...provided,
      ...tokens.multiValue.base,
      ...variantStyles
    };
  },
  multiValueLabel: provided => {
    return {
      ...provided,
      ...tokens.multiValueLabel.base
    };
  },
  multiValueRemove: (provided, state) => {
    return state.selectProps.isDisabled
      ? {
          display: 'none'
        }
      : {
          ...provided,
          transition: '0.2s',
          ...tokens.multiValueRemove.base,
          '&:hover': {
            ...tokens.multiValueRemove.hover.base
          }
        };
  },
  menu: provided => {
    return {
      ...provided,
      zIndex: 3,
      transition: '0.2s',
      width: 'calc(100% + 2px)',
      transform: 'translate(-1px)',
      boxShadow: `0 0 0 1px ${tokens.optionsList.base.borderColor}`,
      ...tokens.optionsList.base
    };
  },
  option: (provided, state) => {
    const selectedBase: CSSObject = state.isSelected
      ? { ...tokens.option.selected.base }
      : {};

    const focusedBase: CSSObject = state.isFocused
      ? { ...tokens.option.selected.base }
      : {};

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
  indicatorsContainer: provided => {
    return {
      ...provided
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
