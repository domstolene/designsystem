import { type GroupBase, type StylesConfig } from 'react-select';

import {
  type InputSize,
  dangerInputfield,
  focusInputfield,
  focusVisibleInsetSelect,
  hoverDangerInputfield,
  hoverInputfield,
} from '../helpers';
import { scrollbarStyling } from '../helpers';

type SelectTypography = Record<
  InputSize,
  { font: string; letterSpacing: string; fontStyle?: string }
>;

const placeholderTypography: SelectTypography = {
  medium: {
    font: 'var(--dds-font-supporting-style-placeholdertext-01)',
    letterSpacing:
      'var(--dds-font-supporting-style-placeholdertext-01-letter-spacing)',
    fontStyle: 'var(--dds-font-supporting-style-placeholdertext-01-font-style)',
  },
  small: {
    font: 'var(--dds-font-supporting-style-placeholdertext-02)',
    letterSpacing:
      'var(--dds-font-supporting-style-placeholdertext-02-letter-spacing)',
    fontStyle: 'var(--dds-font-supporting-style-placeholdertext-02-font-style)',
  },
  tiny: {
    font: 'var(--dds-font-supporting-style-placeholdertext-03)',
    letterSpacing:
      'var(--dds-font-supporting-style-placeholdertext-03-letter-spacing)',
    fontStyle: 'var(--dds-font-supporting-style-placeholdertext-03-font-style)',
  },
};

const optionTypography: SelectTypography = {
  medium: {
    font: 'var(--dds-font-body-sans-02)',
    letterSpacing: 'var(--dds-font-body-sans-02-letter-spacing)',
  },
  small: {
    font: 'var(--dds-font-body-sans-01)',
    letterSpacing: 'var(--dds-font-body-sans-01-letter-spacing)',
  },
  tiny: {
    font: 'var(--dds-font-supporting-style-tiny-01)',
    letterSpacing: 'var(--dds-font-supporting-style-tiny-01-letter-spacing)',
  },
};

const multiValueLabelTypography: SelectTypography = {
  medium: {
    font: 'var(--dds-font-body-sans-01)',
    letterSpacing: 'var(--dds-font-body-sans-01-letter-spacing)',
  },
  small: {
    font: 'var(--dds-font-body-sans-01)',
    letterSpacing: 'var(--dds-font-body-sans-01-letter-spacing)',
  },
  tiny: {
    font: 'var(--dds-font-supporting-style-tiny-01)',
    letterSpacing: 'var(--dds-font-supporting-style-tiny-01-letter-spacing)',
  },
};

const groupHeadingTypography = {
  font: 'var(--dds-font-supporting-style-helpertext-01)',
  letterSpacing:
    'var(--dds-font-supporting-style-helpertext-01-letter-spacing)',
};

const typography = {
  placeholder: placeholderTypography,
  noOptionsMessage: placeholderTypography,
  option: optionTypography,
  multiValueLabel: multiValueLabelTypography,
  groupHeading: groupHeadingTypography,
};

export const prefix = 'dds-select';

const control = {
  medium: {
    base: {
      paddingBlock: 'var(--dds-spacing-x0-75)',
      paddingLeft: 'var(--dds-spacing-x0-75)',
      ...optionTypography.medium,
    },
    hasIcon: {
      paddingLeft:
        'calc(var(--dds-spacing-x0-75) + var(--dds-icon-size-medium) + var(--dds-spacing-x0-5))',
    },
  },
  small: {
    base: {
      paddingBlock: 'var(--dds-spacing-x0-5)',
      paddingLeft: 'var(--dds-spacing-x0-75)',
      ...optionTypography.small,
    },
    hasIcon: {
      paddingLeft:
        'calc(var(--dds-spacing-x0-75) + var(--dds-icon-size-medium) + var(--dds-spacing-x0-5))',
    },
  },
  tiny: {
    base: {
      paddingBlock: 'var(--dds-spacing-x0-25)',
      paddingLeft: 'var(--dds-spacing-x0-5)',
      ...optionTypography.tiny,
    },
    hasIcon: {
      paddingLeft:
        'calc(var(--dds-spacing-x0-5) + var(--dds-icon-size-small) + var(--dds-spacing-x0-5))',
    },
  },
};

export const getCustomStyles = <TOption>(
  size: InputSize,
  hasError: boolean,
  hasIcon: boolean,
  isReadOnly?: boolean,
): Partial<StylesConfig<TOption, boolean, GroupBase<TOption>>> => ({
  control: (provided, state) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    cursor: 'pointer',
    borderRadius: 'var(--dds-border-radius-input)',
    border: '1px solid',
    borderColor: 'var(--dds-color-border-default)',
    backgroundColor: 'var(--dds-color-surface-default)',
    transition: 'box-shadow 0.2s, border-color 0.2s',
    paddingRight: 'var(--dds-spacing-x0-5)',
    ...control[size].base,
    ...(hasIcon && control[size].hasIcon),
    '&:hover': {
      ...(!isReadOnly && hoverInputfield),
    },
    ...(hasError && {
      ...dangerInputfield,
      '&:hover': {
        ...hoverDangerInputfield,
      },
    }),
    '&:focus-within': {
      ...focusInputfield,
    },
    ...(state.selectProps.isDisabled && {
      borderColor: 'var(--dds-color-border-subtle)',
      backgroundColor: 'var(--dds-color-surface-field-disabled)',
      color: 'var(--dds-color-text-subtle)',
      pointerEvents: 'none',
    }),
    ...(isReadOnly && {
      borderColor: 'var(--dds-color-border-default)',
      backgroundColor: 'var(--dds-color-surface-field-disabled)',
      color: 'var(--dds-color-text-medium)',
      boxShadow: 'none',
      cursor: 'default',
    }),
  }),
  placeholder: provided => ({
    ...provided,
    ...typography.placeholder[size],
    color: 'var(--dds-color-text-subtle)',
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
    padding: 0,
    color: 'var(--dds-color-icon-default)',
    ...(state.selectProps.isDisabled && {
      color: 'var(--dds-color-icon-subtle)',
    }),
    ...(isReadOnly && { color: 'var(--dds-color-icon-subtle)' }),
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    ...(state.selectProps.isMulti && {
      gap: 'var(--dds-spacing-x0-25)',
    }),
    padding: 0,
  }),

  singleValue: () => ({
    gridArea: '1/1/2/3',
    overflow: 'hidden',
    boxSizing: 'border-box',
  }),
  multiValue: () => ({
    boxSizing: 'border-box',
    minWidth: 0,
    display: 'flex',
    borderRadius: 'var(--dds-border-radius-surface)',
    backgroundColor: 'var(--dds-color-surface-medium)',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    padding: '0 var(--dds-spacing-x0-25)',
    ...typography.multiValueLabel[size],
    color: 'var(--dds-color-text-default)',
    ...(state.selectProps.isDisabled && {
      color: 'var(--dds-color-text-subtle)',
    }),
    ...(isReadOnly && {
      color: 'var(--dds-color-text-medium)',
    }),
  }),
  multiValueRemove: (provided, state) =>
    state.selectProps.isDisabled || isReadOnly
      ? {
          display: 'none',
        }
      : {
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'color 0.2s, background-color 0.2s, box-shadow 0.2s',
          },
          color: 'var(--dds-color-icon-default)',

          padding: '0 var(--dds-spacing-x0-25)',
        },
  menu: () => ({
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    boxShadow: 'var(--dds-shadow-2)',
    zIndex: 100,
    transition: '0.2s',
    border: '1px solid var(--dds-color-border-default)',
    backgroundColor: 'var(--dds-color-surface-default)',
    borderRadius: 'var(--dds-border-radius-surface)',
    marginBlock: 'var(--dds-spacing-x0-25)',
  }),
  menuPortal: provided => ({
    ...provided,
    zIndex: 99999,
  }),
  group: () => ({
    boxSizing: 'border-box',
  }),
  groupHeading: () => ({
    ...typography.groupHeading,
    color: 'var(--dds-color-text-medium)',
    paddingInline: 'var(--dds-spacing-x0-75)',
    paddingBlock: 'var(--dds-spacing-x0-125) var(--dds-spacing-x0-5)',
  }),
  menuList: () => ({
    maxHeight: '300px',
    overflowY: 'auto',
    position: 'relative',
    boxSizing: 'border-box',
    ...scrollbarStyling,
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--dds-spacing-x0-5)',
    padding: 'var(--dds-spacing-x0-75)',
    backgroundColor: 'var(--dds-color-surface-default)',
    ...typography.option[size],
    color: 'var(--dds-color-text-default)',
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'color 0.2s, background-color 0.2s',
    },
    '&:hover': {
      color: 'var(--dds-color-text-default)',
      backgroundColor: 'var(--dds-color-surface-hover-default)',
    },
    ...(state.isFocused && {
      ...focusVisibleInsetSelect,
    }),
  }),
  noOptionsMessage: () => ({
    ...typography.noOptionsMessage[size],
    padding: 'var(--dds-spacing-x0-5) var(--dds-spacing-x1)',
    color: 'var(--dds-color-text-medium)',
  }),
  clearIndicator: () =>
    isReadOnly
      ? { display: 'none' }
      : {
          display: 'inline-flex',
          color: 'var(--dds-color-icon-default)',
          borderRadius: 'var(--dds-border-radius-button)',

          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'background-color 0.2s',
          },
          '&:hover': {
            backgroundColor: 'var(--dds-color-surface-hover-default)',
          },
        },
  loadingIndicator: provided => ({
    ...provided,
    padding: 0,
    color: 'var(--dds-color-icon-default)',
  }),
});
