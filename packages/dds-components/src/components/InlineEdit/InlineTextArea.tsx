import { type TextareaHTMLAttributes, forwardRef, useId, useRef } from 'react';

import styles from './InlineEdit.module.css';
import { type BaseInlineInputProps } from './InlineEdit.types';
import { inlineEditVisuallyHidden } from './InlineEdit.utils';
import { useCombinedRef } from '../../hooks';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import inputStyles from '../helpers/Input/Input.module.css';
import { focusable } from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { EditIcon } from '../Icon/icons';
import { renderInputMessage } from '../InputMessage';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type InlineTextAreaProps = BaseInlineInputProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InlineTextArea = forwardRef<
  HTMLTextAreaElement,
  InlineTextAreaProps
>((props, ref) => {
  const {
    id,
    error,
    errorMessage,
    isEditing,
    width = '140px',
    'aria-describedby': ariaDescribedby,
    emptiable,
    hideIcon,
    ...rest
  } = props;

  const genereatedId = useId();
  const uniqueId = id ?? `${genereatedId}-InlineTextArea`;
  const hasErrorMessage = !!errorMessage;
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');
  const hasError = !!error;
  const hasErrorState = hasError || hasErrorMessage;

  const descId = derivativeIdGenerator(uniqueId, 'desc');

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const combinedRef = useCombinedRef(ref, inputRef);

  return (
    <div className={styles.container} style={{ width }}>
      <div className={inputStyles['input-group']}>
        {!isEditing && !hideIcon && (
          <span
            onClick={() => {
              inputRef.current?.focus();
            }}
            className={styles['icon-wrapper']}
          >
            <Icon icon={EditIcon} iconSize="small" />
          </span>
        )}
        <textarea
          {...rest}
          id={uniqueId}
          ref={combinedRef}
          aria-describedby={spaceSeparatedIdListGenerator([
            hasErrorMessage ? errorMessageId : undefined,
            descId,
            ariaDescribedby,
          ])}
          className={cn(
            styles['inline-input'],
            !hideIcon && styles['inline-input--with-icon'],
            !hideIcon &&
              isEditing &&
              styles['inline-input--with-icon--is-editing'],
            styles['inline-textarea'],
            inputStyles['input--stateful'],
            hasErrorState && inputStyles['input--stateful-danger'],
            typographyStyles['body-medium'],
            utilStyles.scrollbar,
            focusable,
          )}
        />
      </div>
      {inlineEditVisuallyHidden(descId, emptiable)}
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </div>
  );
});

InlineTextArea.displayName = 'InlineTextArea';
