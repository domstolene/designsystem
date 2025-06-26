import { useId, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { createTexts, useTranslation } from '../../../i18n';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import { createClearChangeEvent } from '../../../utils/createClearChangeEvent';
import { InlineIconButton } from '../../helpers/InlineIconButton';
import inputStyles from '../../helpers/Input/Input.module.css';
import { Icon } from '../../Icon';
import { ChevronDownIcon, CloseSmallIcon, EditIcon } from '../../Icon/icons';
import { renderInputMessage } from '../../InputMessage';
import { Box } from '../../layout';
import { useInlineEditContext } from '../InlineEdit.context';
import styles from '../InlineEdit.module.css';
import { type InlineSelectProps } from '../InlineEdit.types';
import { inlineEditVisuallyHidden, inlineSelectCns } from '../InlineEdit.utils';

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
  const { t } = useTranslation();
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

  const clearInput = () => {
    const clearChangeEvent =
      createClearChangeEvent<HTMLSelectElement>(uniqueId);
    onChange?.(clearChangeEvent);
  };

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
            ...inlineSelectCns(hasErrorState, !hideIcon && !isEditing, !!value),
          )}
        />
        {!!value && emptiable && (
          <InlineIconButton
            aria-label={t(texts.clearSelect)}
            onClick={clearInput}
            icon={CloseSmallIcon}
            size="small"
            className={styles['clear-button']}
          />
        )}
        <Icon
          icon={ChevronDownIcon}
          iconSize="small"
          className={styles.chevron}
        />
      </div>
      {inlineEditVisuallyHidden(descId, emptiable)}
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </Box>
  );
};

InlineSelect.displayName = 'InlineSelect';

const texts = createTexts({
  clearSelect: {
    no: 'Tøm nedtrekksliste',
    nb: 'Tøm nedtrekksliste',
    nn: 'Tøm nedtrekksliste',
    en: 'Clear selection',
  },
});
