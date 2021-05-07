import React, { forwardRef, HTMLAttributes, useState } from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { default as ReactSelect, components, Styles } from 'react-select';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import { selectTokens as tokens } from './selectTokens';
import CheckOutlinedIcon  from '@material-ui/icons/CheckOutlined';
import InlineIconWrapper from '../../helpers/InlineIconWrapper';
import scrollbarStyling from '../../helpers/scrollbarStyling';

const prefix = 'dds-select';

const Label = styled.label`
    display: block;
    ${tokens.label.base}
`;

const Container = styled.div<{errorMessage?: string, width?: string, disabled?: boolean, readOnly?: boolean}>`
    transition: 0.2s;
    position: relative;
    width: ${({width}) => width ? width : tokens.container.base.width};
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
    ${({errorMessage}) => errorMessage && css`
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

    ${({disabled}) => disabled && css`
        cursor: not-allowed;
        ${tokens.container.disabled.base}
    `}
    ${({readOnly}) => readOnly && css`
        ${tokens.container.readOnly.base}
        .${prefix}__dropdown-indicator {
            color: transparent
        }
    `}

    .${prefix}__menu-list {
      ${scrollbarStyling}
    }
    .${prefix}__selected-icon {
        margin: ${tokens.option.selected.icon.margin};
    }
    &:hover .${prefix}__dropdown-indicator, &:focus-within .${prefix}__dropdown-indicator {
        color: ${tokens.container.focus.base.borderColor}
    }
`;

const Wrapper = styled.div`
    margin: 0;
`;

const { Option, NoOptionsMessage } = components;

const IconOption = (props: any) => (
  <Option {...props}>
    { props.isSelected && <InlineIconWrapper Icon={CheckOutlinedIcon} className={`${prefix}__selected-icon`} /> }
    {props.data.label}
  </Option>
)

const NoOptionsMessageCustom = (props: any) => (
  <NoOptionsMessage {...props}>
    Ingen treff
  </NoOptionsMessage>
)

const customStyles: Partial<Styles<any, false, any>> = {
    placeholder: () => {
        return {
            ...tokens.placeholder.base
        }
    },
    indicatorSeparator: () => {
        return {
            backgroundColor: 'transparent'
        }
    },
    dropdownIndicator: (provided, state) => {
        return {
            display: 'flex',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
            transition: '0.2s',
            ...tokens.dropdownIndicator.base,
        }
    },
    control: (provided, state) => {
        return {
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            border: state.isFocused ? "none" : "none",
            boxShadow: state.isFocused ? "none" : "none",
            ...tokens.input.base
        }
    },
    valueContainer: (provided) => {
        return {
            ...provided,
            padding: 0
        }
    },
    singleValue: (provided) => {
        return {
            ...provided,
            margin: 0
        }
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
        }
    },
    option: (provided, state) => {
        let selectedBase: CSSObject = {};
        if(state.isSelected) selectedBase = {...tokens.option.selected.base}
        return {
            display: 'flex',
            alignItems: 'center',
            ...tokens.option.base,
            '&:hover': {
                ...tokens.option.hover.base
            },
            ...selectedBase
        }
    },
    noOptionsMessage: () => {
        return {
            ...tokens.noOptionsMessage.base
        }
    },
    clearIndicator: () => {
        return {
            display: 'flex',
            ...tokens.clearIndicator.base,
            '&:hover': {
                ...tokens.clearIndicator.hover.base
            }
        }
    },
    // indicatorsContainer: () => {
    //     return {
    //         display: 'flex'
    //     }
    // }
    input: () => {
        return {
      margin: '0 2px',
      padding: 0
    }
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

} & HTMLAttributes<HTMLSelectElement>

let nextUniqueId = 0;

export const Select = forwardRef<any, SelectProps>(
    ({id, label, placeholder, errorMessage, items, tip, required, disabled, readOnly, width, ...rest}, ref) => {

        const options: { value: string; label: string; }[] = [];
        items.forEach((e) => {
            options.push({value: e, label: e});
        })

        const [uniqueId] = useState<string>(id ?? `select-${nextUniqueId++}`);

        const containerProps = {
            errorMessage,
            width,
            disabled,
            readOnly
        }

        const inputProps = {
            options,
            placeholder,
            required,
            isDisabled: disabled || readOnly,
            isClearable: true,
            inputId: uniqueId,
            classNamePrefix: prefix,
            styles: customStyles,
            // menuIsOpen: true
        }

        return (
            <Wrapper>
                <Container {...containerProps}>
                    <Label htmlFor={uniqueId}>
                        {label} {required && <RequiredMarker />}
                    </Label>
                    <ReactSelect
                    ref={ref}
                    components={{ Option: IconOption, NoOptionsMessage: NoOptionsMessageCustom }}
                    {...inputProps}
                    filterOption={(option, inputValue) => {
                        const { label } = option;
                        return searchFilter(label, inputValue) || inputValue === '';
                    }}
                    />
                </Container>
                {errorMessage ?
                <InputMessage messageType={'error'} message={errorMessage} />
                : tip ?
                <InputMessage messageType={'tip'} message={tip} />
                : ''
                }
            </Wrapper>
        );
});

Select.defaultProps = {
    placeholder: '-- Velg fra listen --',
    required: false,
    disabled: false
}