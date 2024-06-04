import { type GroupBase, type StylesConfig } from 'react-select';

import { selectTokens as tokens, typographyTypes } from './Select.tokens';
import {
  type InputSize,
  dangerInputfield,
  focusInputfield,
  focusVisibleInsetSelect,
  hoverDangerInputfield,
  hoverInputfield,
} from '../helpers';
import { scrollbarStyling } from '../helpers';
import { getFontStyling } from '../Typography';

const {
  control,
  menu,
  groupHeading,
  option,
  dropdownIndicator,
  loadingIndicator,
  clearIndicator,
  multiValue,
  multiValueLabel,
  multiValueRemove,
  noOptionsMessage,

  valueContainer,
} = tokens;

export const prefix = 'dds-select';

function getContainerControlPadding(
  componentSize: InputSize,
  isMulti: boolean | undefined,
) {
  return isMulti
    ? control.isMulti.sizes[componentSize].padding
    : control.sizes[componentSize].padding;
}

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
    borderRadius: control.borderRadius,
    border: control.border,
    borderColor: control.borderColor,
    backgroundColor: control.backgroundColor,
    transition: 'box-shadow 0.2s, border-color 0.2s',
    padding: getContainerControlPadding(size, state.selectProps.isMulti),
    ...(state.selectProps.isDisabled && {
      borderColor: control.disabled.borderColor,
      backgroundColor: control.disabled.backgroundColor,
    }),
    ...getFontStyling(typographyTypes.control[size], true),

    '&:hover': {
      ...hoverInputfield,
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
    ...(isReadOnly && {
      borderColor: control.readOnly.borderColor,
      backgroundColor: control.readOnly.backgroundColor,
      paddingTop: control.readOnly.paddingTop,
      paddingLeft: 0,
      boxShadow: 'none',
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
    color: dropdownIndicator.base.color,
    '&:hover': {
      ...(state.selectProps.isDisabled && {
        color: dropdownIndicator.base.color,
      }),
    },
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    ...(state.selectProps.isMulti && {
      gap: valueContainer.isMulti.gap,
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
    borderRadius: multiValue.borderRadius,
    backgroundColor: tokens.multiValue.backgroundColor,
  }),
  multiValueLabel: provided => ({
    ...provided,
    padding: multiValueLabel.padding,
    ...getFontStyling(typographyTypes.multiValueLabel[size]),
    color: multiValueLabel.color,
  }),
  multiValueRemove: (provided, state) =>
    state.selectProps.isDisabled
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
          color: multiValueRemove.base.color,
          padding: multiValueRemove.base.padding,
          borderTopRightRadius: multiValueRemove.base.borderTopRightRadius,
          borderBottomRightRadius:
            multiValueRemove.base.borderBottomRightRadius,
        },
  menu: provided => ({
    ...provided,
    zIndex: 100,
    transition: '0.2s',
    width: 'calc(100% + 2px)',
    transform: 'translate(-1px)',
    boxShadow: ` 0 0 0 1px ${menu.borderColor}`,
    border: menu.border,
    borderColor: menu.borderColor,
    backgroundColor: menu.backgroundColor,
    borderRadius: menu.borderRadius,
    marginTop: menu.marginTop,
    marginBottom: menu.marginBottom,
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
    color: groupHeading.color,
    padding: groupHeading.padding,
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
    gap: option.base.gap,
    padding: option.base.padding,
    backgroundColor: option.base.backgroundColor,
    ...getFontStyling(typographyTypes.option[size], true),
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'color 0.2s, background-color 0.2s',
    },
    '&:hover': {
      color: option.hover.color,
      backgroundColor: option.hover.backgroundColor,
    },
    ...(state.isSelected && {
      color: option.selected.color,
      backgroundColor: option.selected.backgroundColor,
    }),
    ...(state.isFocused && {
      ...focusVisibleInsetSelect,
    }),
  }),
  noOptionsMessage: () => ({
    ...getFontStyling(typographyTypes.noOptionsMessage[size]),
    padding: noOptionsMessage.padding,
    color: noOptionsMessage.color,
  }),
  clearIndicator: () => ({
    display: 'inline-flex',
    color: clearIndicator.base.color,
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'background-color 0.2s',
    },
    '&:hover': {
      backgroundColor: clearIndicator.hover.backgroundColor,
    },
  }),
  loadingIndicator: provided => ({
    ...provided,
    padding: 0,
    color: loadingIndicator.color,
  }),
});
