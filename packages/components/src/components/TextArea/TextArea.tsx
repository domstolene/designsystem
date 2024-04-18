import { type Property } from 'csstype';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';

import styles from './TextArea.module.css';
import { type TextAreaProps } from './TextArea.types';
import { useCombinedRef } from '../../hooks';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { getDefaultText, inputTypographyTypes } from '../helpers';
import inputStyles from '../helpers/Input/Input.module.css';
import { focusable } from '../helpers/styling/focus.module.css';
import { scrollbar } from '../helpers/styling/utilStyles.module.css';
import { renderInputMessage } from '../InputMessage';
import { Label, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

const defaultWidth: Property.Width<string> = '320px';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      id,
      value,
      defaultValue,
      onChange,
      errorMessage,
      required = false,
      disabled,
      tip,
      label,
      'aria-required': ariaRequired = false,
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
      getDefaultText(value, defaultValue),
    );

    useEffect(() => {
      if (textAreaRef?.current) {
        textAreaRef.current.style.height = `${
          textAreaRef.current.scrollHeight + 2
        }px`;
      }
    }, [text]);

    const onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
      event: React.ChangeEvent<HTMLTextAreaElement>,
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
      <div
        className={cn(className, inputStyles.container)}
        style={{ ...style, width }}
      >
        {hasLabel && (
          <Label showRequiredStyling={showRequiredStyling} htmlFor={uniqueId}>
            {label}
          </Label>
        )}
        <textarea
          {...textAreaProps}
          className={cn(
            inputStyles.input,
            inputStyles['input--stateful'],
            styles.textarea,
            scrollbar,
            typographyStyles[getTypographyCn(inputTypographyTypes['medium'])],
            focusable,
          )}
        />
        {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
