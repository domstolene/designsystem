import {
  forwardRef,
  TextareaHTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  getDefaultText,
  OuterInputContainer,
  inputTokens,
  StatefulInput,
  StyledInputProps,
  CommonInputProps,
  renderInputMessage,
} from '../../helpers/Input';
import { useCombinedRef } from '../../hooks';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { scrollbarStyling } from '../ScrollableContainer';
import { Label } from '../Typography';
import { textAreaTokens } from './TextArea.tokens';
import { Property } from 'csstype';

const defaultWidth: Property.Width<string> = '320px';
const { textarea } = textAreaTokens;

export const StyledTextArea = styled(StatefulInput)<StyledInputProps>`
  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${textarea.paddingBottom};
  ${inputTokens.input.sizes.medium.font}
`;

export type TextAreaProps = CommonInputProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      id,
      value,
      defaultValue,
      onChange,
      errorMessage,
      required,
      disabled,
      tip,
      label,
      'aria-required': ariaRequired,
      'aria-describedby': ariaDescribedby,
      className,
      style,
      width = defaultWidth,
      ...rest
    } = props;

    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-textArea`;

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const multiRef = useCombinedRef(ref, textAreaRef);
    const [text, setText] = useState<string>(
      getDefaultText(value, defaultValue)
    );

    useEffect(() => {
      if (textAreaRef && textAreaRef.current) {
        textAreaRef.current.style.height = `${
          textAreaRef.current.scrollHeight + 2
        }px`;
      }
    }, [text]);

    const onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setText(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    const hasErrorMessage = !!errorMessage;
    const hasLabel = !!label;
    const tipId = derivativeIdGenerator(uniqueId, 'tip');
    const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

    const showRequiredStyling = required || !!ariaRequired;

    const containerProps = {
      width,
      className,
      style,
    };

    const textAreaProps = {
      ref: multiRef,
      onChange: onChangeHandler,
      value,
      defaultValue,
      id: uniqueId,
      disabled,
      hasErrorMessage,
      required,
      'aria-required': ariaRequired,
      'aria-describedby': spaceSeparatedIdListGenerator([
        tip ? tipId : undefined,
        errorMessage ? errorMessageId : undefined,
        ariaDescribedby,
      ]),
      'aria-invalid': hasErrorMessage ? true : undefined,
      ...rest,
    };

    return (
      <OuterInputContainer {...containerProps}>
        {hasLabel && (
          <Label showRequiredStyling={showRequiredStyling} htmlFor={uniqueId}>
            {label}
          </Label>
        )}
        <StyledTextArea {...textAreaProps} as="textarea" />
        {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
      </OuterInputContainer>
    );
  }
);
