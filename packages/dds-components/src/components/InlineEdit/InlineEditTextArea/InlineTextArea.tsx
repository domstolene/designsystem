import { useId, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import inputStyles from '../../helpers/Input/Input.module.css';
import { Icon } from '../../Icon';
import { EditIcon } from '../../Icon/icons';
import { renderInputMessage } from '../../InputMessage';
import { Box } from '../../layout';
import { useInlineEditContext } from '../InlineEdit.context';
import styles from '../InlineEdit.module.css';
import { type InlineTextAreaProps } from '../InlineEdit.types';
import {
  inlineEditTextareaCns,
  inlineEditVisuallyHidden,
} from '../InlineEdit.utils';

export const InlineTextArea = ({
  id,
  error,
  errorMessage,
  width = '140px',
  'aria-describedby': ariaDescribedby,
  hideIcon,
  ref,
  ...rest
}: InlineTextAreaProps) => {
  const { onBlur, onChange, onFocus, isEditing, value, emptiable } =
    useInlineEditContext();

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
    <Box position="relative" width={width}>
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
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          id={uniqueId}
          ref={combinedRef}
          aria-describedby={spaceSeparatedIdListGenerator([
            hasErrorMessage ? errorMessageId : undefined,
            descId,
            ariaDescribedby,
          ])}
          className={cn(
            ...inlineEditTextareaCns(hasErrorState, !hideIcon && !isEditing),
          )}
        />
      </div>
      {inlineEditVisuallyHidden(descId, emptiable)}
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </Box>
  );
};

InlineTextArea.displayName = 'InlineTextArea';
