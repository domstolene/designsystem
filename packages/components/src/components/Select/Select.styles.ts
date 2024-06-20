import { type GroupBase, type StylesConfig } from 'react-select';

import {
  type InputSize,
  type InputTypographyTypes,
  dangerInputfield,
  focusInputfield,
  focusVisibleInsetSelect,
  hoverDangerInputfield,
  hoverInputfield,
  inputTypographyTypes,
} from '../helpers';
import { scrollbarStyling } from '../helpers';
import { getFontStyling } from '../Typography';
import { type StaticTypographyType } from '../Typography';

const placeholderTypographyTypes: { [k in InputSize]: StaticTypographyType } = {
  medium: 'supportingStylePlaceholderText01',
  small: 'supportingStylePlaceholderText02',
  tiny: 'supportingStylePlaceholderText03',
};

const multiValueLabelTypographyTypes: {
  [k in InputSize]: StaticTypographyType;
} = {
  medium: 'bodySans01',
  small: 'bodySans01',
  tiny: 'supportingStyleTiny01',
};

const typographyTypes: {
  control: InputTypographyTypes;
  option: InputTypographyTypes;
  placeholder: { [k in InputSize]: StaticTypographyType };
  noOptionsMessage: { [k in InputSize]: StaticTypographyType };
  groupHeading: StaticTypographyType;
  multiValueLabel: { [k in InputSize]: StaticTypographyType };
} = {
  control: inputTypographyTypes,
  option: inputTypographyTypes,
  placeholder: placeholderTypographyTypes,
  noOptionsMessage: placeholderTypographyTypes,
  groupHeading: 'supportingStyleHelperText01',
  multiValueLabel: multiValueLabelTypographyTypes,
};

export const prefix = 'dds-select';

const control = {
  sizes: {
    medium: {
      paddingBlock: 'var(--dds-spacing-x0-75)',
      paddingInline: 'var(--dds-spacing-x0-5) var(--dds-spacing-x0-75)',
    },
    small: {
      paddingBlock: 'var(--dds-spacing-x0-5)',
      paddingInline: 'var(--dds-spacing-x0-5) var(--dds-spacing-x0-75)',
    },
    tiny: {
      paddingBlock: 'var(--dds-spacing-x0-25)',
      paddingInline: 'var(--dds-spacing-x0-5) ',
    },
  },
};

export const getCustomStyles = <TOption>(
  size: InputSize,
  hasError: boolean,
  isReadOnly?: boolean,
): Partial<StylesConfig<TOption, boolean, GroupBase<TOption>>> => ({
  control: (provided, state) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    cursor: 'pointer',
    borderRadius: 'var(--dds-border-radius-1)',
    border: '1px solid',
    borderColor: 'var(--dds-color-border-default)',
    backgroundColor: 'var(--dds-color-surface-default)',
    transition: 'box-shadow 0.2s, border-color 0.2s',
    ...control.sizes[size],
    ...getFontStyling(typographyTypes.control[size]),
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
    ...getFontStyling(typographyTypes.placeholder[size], true),
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
    borderRadius: 'var(--dds-border-radius-1)',
    backgroundColor: 'var(--dds-color-surface-medium)',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    padding: '0 var(--dds-spacing-x0-25)',
    ...getFontStyling(typographyTypes.multiValueLabel[size]),
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
    boxShadow: 'var(--dds-shadow-2-onlight)',
    zIndex: 100,
    transition: '0.2s',
    border: '1px solid var(--dds-color-border-default)',
    backgroundColor: 'var(--dds-color-surface-default)',
    borderRadius: 'var(--dds-border-radius-1)',
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
    ...getFontStyling(typographyTypes.groupHeading),

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
    ...getFontStyling(typographyTypes.option[size], true),
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
    ...getFontStyling(typographyTypes.noOptionsMessage[size]),
    padding: 'var(--dds-spacing-x0-5) var(--dds-spacing-x1)',
    color: 'var(--dds-color-text-medium)',
  }),
  clearIndicator: () =>
    isReadOnly
      ? { display: 'none' }
      : {
          display: 'inline-flex',
          color: 'var(--dds-color-icon-default)',

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
