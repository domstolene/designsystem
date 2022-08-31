import { GroupBase, StylesConfig } from 'react-select';
import styled, { css, CSSObject } from 'styled-components';
import { scrollbarStyling } from '../ScrollableContainer';
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
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-color 0.2s, background-color 0.2s;
  }
  position: relative;
  ${tokens.container.base}

  *::selection {
    ${typographyTokens.selection.base}
  }

  ${({ hasLabel, isMulti }) =>
    isMulti && hasLabel
      ? css`
          .${prefix}__value-container {
            ${tokens.valueContainer.isMulti.withLabel.base}
          }
          .${prefix}__indicators {
            ${tokens.indicatorsContainer.isMulti.withLabel.base}
          }
        `
      : isMulti && !hasLabel
      ? css`
          .${prefix}__control {
            ${tokens.input.isMulti.noLabel.base}
          }
          .${prefix}__value-container {
            ${tokens.valueContainer.isMulti.noLabel.base}
          }
          .${prefix}__indicators {
            ${tokens.indicatorsContainer.isMulti.noLabel.base}
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
    ${Label} {
      ${tokens.label.hover.base}
    }
  }
  &:focus-within {
    ${tokens.container.focus.base}
    ${Label} {
      ${tokens.label.focus.base}
    }
  }
  ${({ errorMessage }) =>
    errorMessage &&
    css`
      ${tokens.container.danger.base}
      &:hover {
        ${tokens.container.danger.hover.base}
      }
      &:focus-within {
        ${tokens.container.danger.focus.base}
      }
    `}

  .${prefix}__menu-list {
    ${scrollbarStyling.webkit}
    ${scrollbarStyling.firefox as CSSObject}
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

export const getCustomStyles = <TOption>(): Partial<
  StylesConfig<TOption, boolean, GroupBase<TOption>>
> => ({
  control: () => ({
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    ...tokens.input.base,
  }),
  placeholder: provided => ({
    ...provided,
    ...tokens.placeholder.base,
    margin: 0,
  }),
  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided, state) => ({
    display: 'inline-flex',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'color 0.2s, transform 0.2s',
    },
    ...tokens.dropdownIndicator.base,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    ...(state.selectProps.isMulti ? tokens.valueContainer.isMulti.base : {}),
    padding: 0,
  }),
  singleValue: provided => ({
    ...provided,
    margin: 0,
  }),
  multiValue: (provided, state) => ({
    ...provided,
    ...tokens.multiValue.base,
    ...(state.selectProps.isDisabled
      ? tokens.multiValue.disabled.base
      : tokens.multiValue.enabled.base),
  }),
  multiValueLabel: provided => ({
    ...provided,
    ...tokens.multiValueLabel.base,
  }),
  multiValueRemove: (provided, state) =>
    state.selectProps.isDisabled
      ? {
          display: 'none',
        }
      : {
          ...provided,
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'color 0.2s, background-color 0.2s',
          },
          ...tokens.multiValueRemove.base,
          svg: {
            ...tokens.multiValueRemove.icon.base,
          },
          '&:hover': {
            ...tokens.multiValueRemove.hover.base,
          },
          '&:focus': {
            backgroundColor: 'blue',
          },
        },
  menu: provided => ({
    ...provided,
    zIndex: 3,
    transition: '0.2s',
    width: 'calc(100% + 2px)',
    transform: 'translate(-1px)',
    boxShadow: `inset 0 0 0 1px ${tokens.menu.base.borderColor}`,
    ...tokens.menu.base,
  }),
  menuList: provided => ({
    ...provided,
    paddingLeft: '1px',
    paddingRight: '1px',
  }),
  option: (provided, state) => ({
    ...provided,
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'color 0.2s, background-color 0.2s',
    },
    ...tokens.option.base,
    '&:hover': {
      ...tokens.option.hover.base,
    },
    ...(state.isSelected || state.isFocused ? tokens.option.selected.base : {}),
  }),
  noOptionsMessage: () => ({
    ...tokens.noOptionsMessage.base,
  }),
  clearIndicator: () => ({
    display: 'inline-flex',
    ...tokens.clearIndicator.base,
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'color 0.2s',
    },
    '&:hover': {
      ...tokens.clearIndicator.hover.base,
    },
  }),
  loadingIndicator: provided => ({
    ...provided,
    ...tokens.loadingIndicator.base,
  }),
});
