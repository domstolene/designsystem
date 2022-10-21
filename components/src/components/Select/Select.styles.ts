import { GroupBase, StylesConfig } from 'react-select';
import styled, { css } from 'styled-components';
import {
  dangerInputfield,
  focusInputfield,
  hoverDangerInputfield,
  hoverInputfield,
  selection,
} from '../../helpers/styling';
import { scrollbarStyling } from '../ScrollableContainer';
import { selectTokens as tokens, typographyTypes } from './Select.tokens';
import { Property } from 'csstype';
import { Icon } from '../Icon';
import { InputSize } from '../../helpers';
import { getFontStyling } from '../Typography/Typography.utils';

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
  placeholder,
  icon,
  valueContainer,
  inputContainer,
} = tokens;

export const prefix = 'dds-select';

type StyledContainerProps = {
  errorMessage?: string;
  isDisabled?: boolean;
  readOnly?: boolean;
  width?: Property.Width;
  componentSize: InputSize;
  isMulti?: boolean;
};

export const Container = styled.div<StyledContainerProps>`
  margin: 0;
  width: ${({ width }) => width};
  position: relative;

  *::selection {
    ${selection}
  }

  ${({ componentSize, isMulti }) => css`
    .${prefix}__control {
      padding: ${isMulti && componentSize === 'tiny'
        ? control.sizes.small.padding
        : isMulti && componentSize !== 'tiny'
        ? control.isMulti.sizes[componentSize].padding
        : control.sizes[componentSize].padding};
      ${getFontStyling(typographyTypes.control[componentSize], true)}
    }
    .${prefix}__option {
      ${getFontStyling(typographyTypes.option[componentSize], true)}
    }
    .${prefix}__placeholder {
      ${getFontStyling(typographyTypes.placeholder[componentSize])}
    }
    .${prefix}__menu-notice--no-options {
      ${getFontStyling(typographyTypes.noOptionsMessage[componentSize])}
    }
  `}

  ${({ errorMessage }) =>
    errorMessage &&
    css`
      .${prefix}__control {
        ${dangerInputfield}
      }
      .${prefix}__control:hover {
        ${hoverDangerInputfield}
      }
      .${prefix}__control:focus-within {
        ${focusInputfield}
      }
    `}

  &:hover
    .${prefix}__dropdown-indicator,
    &:focus-within
    .${prefix}__dropdown-indicator {
    color: ${dropdownIndicator.hover.color};
  }

  ${({ isDisabled, readOnly }) =>
    readOnly
      ? css`
          .${prefix}__control {
            border-color: ${control.readOnly.borderColor};
            background-color: ${control.readOnly.backgroundColor};
          }
          .${prefix}__dropdown-indicator,
            &:hover
            .${prefix}__dropdown-indicator {
            color: ${dropdownIndicator.readOnly.color};
          }
        `
      : isDisabled
      ? css`
          cursor: not-allowed;
          .${prefix}__control {
            border-color: ${control.disabled.borderColor};
            background-color: ${control.disabled.backgroundColor};
          }
          &:hover .${prefix}__dropdown-indicator {
            color: ${dropdownIndicator.base.color};
          }
        `
      : ''}
`;

export const InnerSingleValue = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  max-width: 100%;
`;

export const StyledIcon = styled(Icon)`
  margin-right: ${icon.marginRight};
`;

export const getCustomStyles = <TOption>(): Partial<
  StylesConfig<TOption, boolean, GroupBase<TOption>>
> => ({
  control: () => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: control.borderRadius,
    border: control.border,
    borderColor: control.borderColor,
    backgroundColor: control.backgroundColor,
    transition: 'box-shadow 0.2s, border-color 0.2s',

    '&:hover': {
      ...hoverInputfield,
    },
    '&:focus-within': {
      ...focusInputfield,
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: placeholder.color,
    margin: 0,
  }),
  input: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: 0,
    ...(state.isMulti && {
      minHeight: inputContainer.isMulti.minHeight,
    }),
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
  multiValue: (provided, state) => ({
    boxSizing: 'border-box',
    minWidth: 0,
    display: 'flex',
    borderRadius: multiValue.base.borderRadius,
    backgroundColor: state.selectProps.isDisabled
      ? tokens.multiValue.disabled.backgroundColor
      : tokens.multiValue.enabled.backgroundColor,
  }),
  multiValueLabel: provided => ({
    ...provided,
    padding: multiValueLabel.padding,
    ...getFontStyling(typographyTypes.multiValueLabel),
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
          '&:hover': {
            boxShadow: multiValueRemove.hover.boxShadow,
          },
        },
  menu: provided => ({
    ...provided,
    zIndex: 3,
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
    ...scrollbarStyling.webkit,
    ...scrollbarStyling.firefox,
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: option.base.gap,
    padding: option.base.padding,
    backgroundColor: option.base.backgroundColor,
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'color 0.2s, background-color 0.2s',
    },
    '&:hover': {
      color: option.hover.color,
      backgroundColor: option.hover.backgroundColor,
    },
    ...(state.isSelected && {
      backgroundColor: option.selected.backgroundColor,
    }),
    ...(state.isFocused && {
      color: option.focus.color,
      backgroundColor: option.focus.backgroundColor,
    }),
  }),
  noOptionsMessage: () => ({
    padding: noOptionsMessage.padding,
    color: noOptionsMessage.color,
  }),
  clearIndicator: () => ({
    display: 'inline-flex',
    color: clearIndicator.base.color,
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'color 0.2s',
    },
    '&:hover': {
      color: clearIndicator.hover.color,
    },
  }),
  loadingIndicator: provided => ({
    ...provided,
    padding: 0,
    color: loadingIndicator.color,
  }),
});
