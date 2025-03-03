import { type Properties } from 'csstype';
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
import { getDefaultText, renderCharCounter } from '../helpers';
import { type CommonInputProps } from '../helpers';
import inputStyles from '../helpers/Input/Input.module.css';
import { focusable } from '../helpers/styling/focus.module.css';
import { scrollbar } from '../helpers/styling/utilStyles.module.css';
import { renderInputMessage } from '../InputMessage';
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
  const characterCounterId = derivativeIdGenerator(
    uniqueId,
    'characterCounter',
  );

  const showRequiredStyling = required || !!ariaRequired;

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-text-area-width' as any]: width ?? 'var(--dds-input-default-width)',
  };

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
      <textarea
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
        style={styleVariables}
        {...rest}
      />
      <div className={styles['message-container']}>
        {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
        {renderCharCounter(
          characterCounterId,
          withCharacterCounter,
          text.length,
          maxLength,
        )}
      </div>
    </div>
  );
};

TextArea.displayName = 'TextArea';
