import { GroupBase, StylesConfig } from 'react-select';
import styled, { css } from 'styled-components';
import {
  dangerInputfield,
  focusInputfield,
  hoverDangerInputfield,
  hoverInputfield,
  selection,
} from '../../helpers/styling';
import { focusVisibleLink } from '../../helpers/styling';
import { scrollbarStyling } from '../ScrollableContainer';
import { selectTokens as tokens } from './Select.tokens';
import { Property } from 'csstype';
import { Icon } from '../Icon';
import { InputSize } from '../../helpers';

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
} = tokens;

export const prefix = 'dds-select';

type StyledContainerProps = {
  errorMessage?: string;
  isDisabled?: boolean;
  readOnly?: boolean;
  width?: Property.Width;
  componentSize: InputSize;
};

export const Container = styled.div<StyledContainerProps>`
  margin: 0;
  width: ${({ width }) => width};
  position: relative;

  *::selection {
    ${selection}
  }

  ${({ componentSize }) => css`
    .${prefix}__control {
      padding: ${control.sizes[componentSize].padding};
      ${control.sizes[componentSize].font}
    }
    .${prefix}__option {
      ${option.sizes[componentSize].font}
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
  control: (_provided, state) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: control.borderRadius,
    border: control.border,
    borderColor: control.borderColor,
    backgroundColor: control.backgroundColor,
    padding: state.isMulti ? control.isMulti.padding : control.padding,
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
    ...placeholder.font,
    margin: 0,
  }),
  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (_provided, state) => ({
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
    ...(state.selectProps.isMulti ? tokens.valueContainer.isMulti.base : {}),
    padding: 0,
  }),
  singleValue: () => ({
    gridArea: '1/1/2/3',
    overflow: 'hidden',
    boxSizing: 'border-box',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    margin: multiValue.base.margin,
    borderRadius: multiValue.base.borderRadius,
    backgroundColor: state.selectProps.isDisabled
      ? tokens.multiValue.disabled.backgroundColor
      : tokens.multiValue.enabled.backgroundColor,
  }),
  multiValueLabel: provided => ({
    ...provided,
    padding: multiValueLabel.padding,
    color: multiValueLabel.color,
    ...multiValueLabel.font,
  }),
  multiValueRemove: (_provided, state) =>
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
    color: groupHeading.color,
    ...groupHeading.font,
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
    color: option.base.color,
    backgroundColor: option.base.backgroundColor,
    ...option.base.font,
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
    ...(state.isFocused && focusVisibleLink),
  }),
  noOptionsMessage: () => ({
    padding: noOptionsMessage.padding,
    color: noOptionsMessage.color,
    ...noOptionsMessage.font,
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
