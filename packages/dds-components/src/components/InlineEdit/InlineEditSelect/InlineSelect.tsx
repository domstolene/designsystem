import { useId, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import inputStyles from '../../helpers/Input/Input.module.css';
import focusStyles from '../../helpers/styling/focus.module.css';
import { Icon } from '../../Icon';
import { ChevronDownIcon, EditIcon } from '../../Icon/icons';
import { renderInputMessage } from '../../InputMessage';
import { Box } from '../../layout';
import selectStyles from '../../Select/NativeSelect/NativeSelect.module.css';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import { useInlineEditContext } from '../InlineEdit.context';
import styles from '../InlineEdit.module.css';
import { type InlineSelectProps } from '../InlineEdit.types';
import { inlineEditVisuallyHidden } from '../InlineEdit.utils';

export const InlineSelect = ({
  id,
  error,
  errorMessage,
  width = '140px',
  'aria-describedby': ariaDescribedby,
  hideIcon,
  ref,
  ...rest
}: InlineSelectProps) => {
  const { onBlur, onChange, onFocus, isEditing, value, emptiable } =
    useInlineEditContext();

  const genereatedId = useId();
  const uniqueId = id ?? `${genereatedId}-InlineSelect`;
  const hasErrorMessage = !!errorMessage;
  const hasError = !!error;
  const hasErrorState = hasError || hasErrorMessage;
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');
  const descId = derivativeIdGenerator(uniqueId, 'desc');

  const inputRef = useRef<HTMLSelectElement>(null);
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
        <select
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
          aria-invalid={hasErrorState}
          className={cn(
            styles['inline-input'],
            styles['inline-select'],
            !hideIcon && !isEditing && styles['inline-input--with-icon'],
            typographyStyles['body-medium'],
            hasErrorState && inputStyles['input--stateful-danger'],
            focusStyles['focusable-focus'],
          )}
        />
        <Icon
          icon={ChevronDownIcon}
          iconSize="small"
          className={selectStyles.icon}
        />
      </div>
      {inlineEditVisuallyHidden(descId, emptiable)}
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </Box>
  );
};

InlineSelect.displayName = 'InlineSelect';
