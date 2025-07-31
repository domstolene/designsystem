import {
  type ComponentPropsWithRef,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import styles from './TextArea.module.css';
import { useCombinedRef } from '../../hooks';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { renderCharCounter } from '../helpers/CharCounter';
import {
  type CommonInputProps,
  getDefaultText,
  getInputWidth,
} from '../helpers/Input';
import inputStyles from '../helpers/Input/Input.module.css';
import { focusable } from '../helpers/styling/focus.module.css';
import { scrollbar } from '../helpers/styling/utilStyles.module.css';
import { renderInputMessage } from '../InputMessage';
import { Box } from '../layout';
import { Label } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type TextAreaProps = CommonInputProps & {
  /** Spesifiserer om tegntelleren skal vises ved bruk av `maxLength` attributt.
   * @default true
   */
  withCharacterCounter?: boolean;
} & ComponentPropsWithRef<'textarea'>;

export const TextArea = ({
  id,
  value,
  defaultValue,
  onChange,
  errorMessage,
  required = false,
  tip,
  label,
  readOnly,
  'aria-required': ariaRequired = false,
  'aria-describedby': ariaDescribedby,
  maxLength,
  withCharacterCounter = true,
  className,
  style,
  width,
  ref,
  ...rest
}: TextAreaProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-textArea`;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const multiRef = useCombinedRef(ref, textAreaRef);
  const [text, setText] = useState<string>(getDefaultText(value, defaultValue));

  useEffect(() => {
    if (textAreaRef?.current) {
      const el = textAreaRef.current;
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight + 2}px`;
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
  const hasMessage = hasErrorMessage || !!tip;
  const hasLabel = !!label;
  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');
  const characterCounterId = derivativeIdGenerator(
    uniqueId,
    'characterCounter',
  );

  const showRequiredStyling = required || !!ariaRequired;
  const inputWidth = getInputWidth(width);

  return (
    <div className={cn(className, inputStyles.container)} style={{ ...style }}>
      {hasLabel && (
        <Label
          showRequiredStyling={showRequiredStyling}
          htmlFor={uniqueId}
          className={inputStyles.label}
          readOnly={readOnly}
        >
          {label}
        </Label>
      )}
      <Box
        as="textarea"
        width={inputWidth}
        ref={multiRef}
        id={uniqueId}
        onChange={onChangeHandler}
        value={value}
        defaultValue={defaultValue}
        maxLength={maxLength}
        required={required}
        readOnly={readOnly}
        aria-required={ariaRequired}
        aria-describedby={spaceSeparatedIdListGenerator([
          tip ? tipId : undefined,
          errorMessage ? errorMessageId : undefined,
          maxLength && withCharacterCounter ? characterCounterId : undefined,
          ariaDescribedby,
        ])}
        aria-invalid={hasErrorMessage ? true : undefined}
        className={cn(
          inputStyles.input,
          inputStyles['input--stateful'],
          hasErrorMessage && inputStyles['input--stateful-danger'],
          styles.textarea,
          scrollbar,
          typographyStyles['body-medium'],
          focusable,
        )}
        {...rest}
      />
      <Box
        display="flex"
        justifyContent={
          withCharacterCounter
            ? hasMessage
              ? 'space-between'
              : 'flex-end'
            : undefined
        }
        width={withCharacterCounter ? inputWidth : undefined}
      >
        {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
        {renderCharCounter(
          characterCounterId,
          withCharacterCounter,
          text.length,
          maxLength,
        )}
      </Box>
    </div>
  );
};

TextArea.displayName = 'TextArea';
