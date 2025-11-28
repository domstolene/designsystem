import { type GroupBase, type StylesConfig } from 'react-select';

import { focusVisible, focusVisibleTransitionValue } from '../helpers';
import { scrollbarStyling } from '../helpers';
import { type InputSize } from '../helpers/Input';

interface StaticSelectTypography {
  font: string;
  letterSpacing: string;
  fontStyle?: string;
}

type SelectTypography = Record<InputSize, StaticSelectTypography>;

const optionTypography: SelectTypography = {
  medium: {
    font: 'var(--dds-font-body-medium)',
    letterSpacing: 'var(--dds-font-body-medium-letter-spacing)',
  },
  small: {
    font: 'var(--dds-font-body-small)',
    letterSpacing: 'var(--dds-font-body-small-letter-spacing)',
  },
  xsmall: {
    font: 'var(--dds-font-body-xsmall)',
    letterSpacing: 'var(--dds-font-body-xsmall-letter-spacing)',
  },
};

const multiValueLabelTypography: SelectTypography = {
  medium: {
    font: 'var(--dds-font-body-small)',
    letterSpacing: 'var(--dds-font-body-small-letter-spacing)',
  },
  small: {
    font: 'var(--dds-font-body-small)',
    letterSpacing: 'var(--dds-font-body-small-letter-spacing)',
  },
  xsmall: {
    font: 'var(--dds-font-body-xsmall)',
    letterSpacing: 'var(--dds-font-body-xsmall-letter-spacing)',
  },
};

const groupHeadingTypography: StaticSelectTypography = {
  font: 'var(--dds-font-heading-xsmall)',
  letterSpacing: 'var(--dds-font-heading-xsmall-letter-spacing)',
};

const typography = {
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
        'calc(var(--dds-spacing-x0-75) + var(--dds-icon-size-medium) + var(--dds-spacing-md-icon-text-gap))',
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
        'calc(var(--dds-spacing-x0-75) + var(--dds-icon-size-medium) + var(--dds-spacing-sm-icon-text-gap))',
    },
  },
  xsmall: {
    base: {
      paddingBlock: 'var(--dds-spacing-x0-25)',
      paddingLeft: 'var(--dds-spacing-x0-5)',
      ...optionTypography.xsmall,
    },
    hasIcon: {
      paddingLeft:
        'calc(var(--dds-spacing-x0-5) + var(--dds-icon-size-small) + var(--dds-spacing-xs-icon-text-gap))',
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
    transition: `box-shadow 0.2s, border-color 0.2s, ${focusVisibleTransitionValue}`,
    paddingRight: 'var(--dds-spacing-x0-5)',
    ...control[size].base,
    ...(hasIcon && control[size].hasIcon),
    '&:hover': {
      ...(!isReadOnly && {
        borderColor: 'var(--dds-color-border-action-hover)',
        boxShadow: '0 0 0 1px var(--dds-color-border-action-hover)',
      }),
    },
    ...(hasError && {
      borderColor: 'var(--dds-color-border-danger)',
      boxShadow: '0 0 0 1px var(--dds-color-border-danger)',
      '&:hover': {
        borderColor: 'var(--dds-color-border-danger)',
        boxShadow: '0 0 0 1px var(--dds-color-border-danger)',
      },
    }),
    '&:focus-within': {
      ...focusVisible,
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
    marginBlock: '-2px',
  }),
  multiValueLabel: (provided, state) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    padding:
      'var(--dds-spacing-x0-125) 0 var(--dds-spacing-x0-125) var(--dds-spacing-x0-25)',
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
          borderEndEndRadius: 'var(--dds-border-radius-surface)',
          borderStartEndRadius: 'var(--dds-border-radius-surface)',
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'color 0.2s, background-color 0.2s, box-shadow 0.2s',
          },
          color: 'var(--dds-color-icon-default)',
          padding: '0 var(--dds-spacing-x0-25)',
          fontSize: 'var(--dds-font-size-x1-125)',
          '&:hover': {
            backgroundColor: 'var(--dds-color-surface-hover-default)',
          },
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
    color: 'var(--dds-color-text-default)',
    padding:
      'var(--dds-spacing-x0-75) var(--dds-spacing-x0-75) 0 var(--dds-spacing-x0-75)',
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
    gap: 'var(--dds-spacing-x0-25)',
    padding: 'var(--dds-spacing-x0-75)',
    backgroundColor: 'var(--dds-color-surface-default)',
    ...typography.option.medium,
    color: 'var(--dds-color-text-default)',
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'color 0.2s, background-color 0.2s',
    },
    '&:hover': {
      color: 'var(--dds-color-text-default)',
      backgroundColor: 'var(--dds-color-surface-hover-subtle)',
    },
    ...(state.isSelected && {
      backgroundColor: 'var(--dds-color-surface-selected-default)',
    }),
    // egen stil siden react-select bruker focus-state og hover-styling samtidig; ikke nødvendig hvis de kan skilles.
    ...(state.isFocused && {
      outline: 'var(--dds-color-border-action-hover) 2px solid',
      outlineOffset: 'calc(var(--dds-spacing-x0-125) * -1)',
    }),
  }),
  noOptionsMessage: () => ({
    ...typography.option[size],
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
