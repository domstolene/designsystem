import React, { useState, useEffect, useRef, InputHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { inputTokens as tokens} from './textInputTokens';
import RequiredMarker from '../../helpers/RequiredMarker';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import CharCounter from './CharCounter';

const InputStyling = (readOnly?: boolean, errorMessage?: string, label?: string, disabled?:boolean) => {
    return css`
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin: 0;
        transition: box-shadow 0.2s, border-color 0.2s, background-color 0.2s;
        ${tokens.base}
        ${tokens.font}
        ${ label ? css`
            ${tokens.withLabel.base}
        `
        : css`
            ${tokens.noLabel.base}
        `
        };
        &:hover:enabled {
            ${tokens.hover.base}

        }
        &:focus:enabled, &:active:enabled {
            ${tokens.focus.base}
            outline: none;
        }
        &:hover:enabled ~ label, &:focus:enabled ~ label {
            color: ${tokens.focusColor};
        }

        ${disabled && css`
            cursor: not-allowed;
            ${tokens.disabled.base}
            `
        }
        ${errorMessage  && css`
            ${tokens.error.base}
            &:hover:enabled {
                ${tokens.error.hover.base}
            }
            &:focus:enabled, &:active:enabled {
                ${tokens.error.focus.base}
            }
        `}
        ${readOnly && css`
            ${tokens.readOnly.base}
        `}
    `;
}

const Label = styled.label<{multiline: boolean, disabled: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    transition: color 0.2s, background-color 0.2s;
    ${tokens.label.font}
    ${tokens.label.base}
    ${({multiline}) => multiline && css`
        margin: 1px;
        width: calc(100% - 20px);
        ${tokens.label.multiline.base}
    `}
    ${({disabled, multiline}) => (disabled && multiline) && css`
      background-color: ${tokens.disabled.base.backgroundColor};
    `}
`;

const InputFieldWrapper = styled.div<{width?: string}>`
    display: flex;
    flex-direction: column;
    width: ${({width}) => width ? width : tokens.wrapper.base.width};
`;

const InputFieldContainer = styled.div<{multiline?: boolean, label?: string}>`
    position: relative;
    width: 100%;
    ${({multiline}) => multiline && css`
    display: inline-block;
    `}
    height: ${({multiline, label}) => {
        if(multiline) {
            if(label) {
                return tokens.container.multiline.withLabel.height;
            }
            return tokens.container.multiline.noLabel.height;
        }
        if(label) return  tokens.container.singleline.withLabel.height;
        return tokens.container.singleline.noLabel.height;
        }};
`;

const Input = styled.input<{ readOnly?: boolean, errorMessage?: string, label?: string, disabled?: boolean}>`
    ${({label, disabled, readOnly, errorMessage}) => InputStyling(readOnly, errorMessage, label, disabled )}
`;

const TextArea = styled.textarea<{ disabled?: boolean, readOnly?: boolean, errorMessage?: string, label?: string}>`
   ${({label, disabled, readOnly, errorMessage}) => InputStyling(readOnly, errorMessage,label, disabled)}
   resize: vertical;
   height: auto;
   ${scrollbarStyling}
   min-height: ${({label}) => label ? tokens.container.multiline.withLabel.height : tokens.container.multiline.noLabel.height };
   ${tokens.multiline.base}
   ${({label}) => label ? css`
    ${tokens.multiline.withLabel.base}
    `
    : css`
    ${tokens.multiline.noLabel.base}
    `}

   &:hover:enabled ~ label {
        background-color: ${({errorMessage}) => errorMessage ? tokens.error.hover.base.backgroundColor : tokens.hover.base.backgroundColor};
    }
`;

const FlexContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;

let nextUniqueId = 0;

export type TextInputProps = {
    label?: string;
    readOnly: boolean;
    disabled: boolean;
    required: boolean;
    multiline: boolean;
    tip?: string;
    maxCharCount?: number;
    width?: string;
    errorMessage?: string;
    className?: string;
    style?: React.CSSProperties;
} & InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLTextAreaElement>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({label, disabled, readOnly, errorMessage, tip, required, maxCharCount, multiline, onChange, id, width, type = 'text', className, style, ...rest}, ref) => {

        const textAreaRef = useRef<HTMLTextAreaElement>(null);
        const [text, setText] = useState("");
        const [textAreaHeight, setTextAreaHeight] = useState("auto");
        const [parentHeight, setParentHeight] = useState("auto");

        useEffect(() => {
            if(textAreaRef && textAreaRef.current) {
                setParentHeight(`${textAreaRef.current.scrollHeight}px`);
                setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
            }
        }, [text]);

        const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value);

            if (onChange) {
                onChange(event);
            }
        }

        const onChangeHandlerMultiline: React.ChangeEventHandler<HTMLTextAreaElement> = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setTextAreaHeight("auto");
            if(textAreaRef && textAreaRef.current) {
                setParentHeight(`${textAreaRef.current.scrollHeight}px`);
            }

            setText(event.target.value);

            if (onChange) {
                onChange(event);
            }
        };

        const [uniqueId] = useState<string>(id ?? `checkbox-${nextUniqueId++}`);

        const generalInputProps = {
            label,
            errorMessage,
            disabled: disabled || readOnly,
            readOnly,
            required
        }

        const wrapperProps = {
            className,
            style,
            width
        }

        return (
            <InputFieldWrapper {...wrapperProps}>
                <InputFieldContainer
                    style={multiline ? { minHeight: parentHeight } : {}}
                    multiline={multiline}
                    label={label}
                >
                    {multiline ?
                        <TextArea ref={textAreaRef}
                            style={{height: textAreaHeight}}
                            id={uniqueId}
                            onChange={onChangeHandlerMultiline}
                            {...generalInputProps}
                            {...rest}
                        />
                        :
                        <Input
                            ref={ref}
                            id={uniqueId}
                            onChange={onChangeHandler}
                            type={type}
                            {...generalInputProps}
                            {...rest}
                        />
                    }
                    {label &&
                    <Label multiline={multiline} disabled={disabled} htmlFor={uniqueId}>
                        {label} {required && <RequiredMarker />}
                    </Label>
                    }
                </InputFieldContainer>
                <FlexContainer>
                    {errorMessage ?
                        <InputMessage message={errorMessage} messageType={'error'} />
                        : tip ?
                        <InputMessage message={tip} messageType={'tip'} />
                        : ''
                    }
                    {(maxCharCount && Number.isInteger(maxCharCount) && maxCharCount > 0)  ?
                        <CharCounter current={text.length} max={maxCharCount} />
                        : ''
                    }
                </FlexContainer>
            </InputFieldWrapper>
        );
    }
);

TextInput.defaultProps = {
    disabled: false,
    readOnly: false,
    required: false,
    multiline: false
}

export default TextInput;