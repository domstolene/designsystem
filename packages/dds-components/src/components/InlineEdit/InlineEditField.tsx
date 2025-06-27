import { cloneElement, useId, useRef } from 'react';

import { useCombinedRef } from './../../hooks';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from './../../utils';
import inputStyles from './../helpers/Input/Input.module.css';
import { Icon } from './../Icon';
import { ChevronDownIcon, CloseSmallIcon, EditIcon } from './../Icon/icons';
import { renderInputMessage } from './../InputMessage';
import { Box } from './../layout';
import { useInlineEditContext } from './InlineEdit.context';
import styles from './InlineEdit.module.css';
import {
  type EditElement,
  type InlineEditFieldProps,
} from './InlineEdit.types';
import { inlineEditVisuallyHidden } from './InlineEdit.utils';
import { createTexts, useTranslation } from '../../i18n';
import { createClearChangeEvent } from '../../utils/createClearChangeEvent';
import { InlineIconButton } from '../helpers/InlineIconButton';

export function InlineEditField<TElement extends EditElement>({
  id,
  error,
  errorMessage,
  width = '140px',
  hideIcon,
  ref,
  'aria-describedby': ariaDescribedby,
  renderInput,
  elementType,
  ...props
}: InlineEditFieldProps<TElement>) {
  const { onBlur, onChange, onFocus, isEditing, value, emptiable } =
    useInlineEditContext();

  const { t } = useTranslation();

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-InlineEdit`;
  const hasErrorMessage = !!errorMessage;
  const hasErrorState = !!error || hasErrorMessage;
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');
  const descId = derivativeIdGenerator(uniqueId, 'desc');

  const inputRef = useRef<TElement>(null);
  const combinedRef = useCombinedRef(ref, inputRef);

  const clearInput = () => {
    const clearChangeEvent =
      createClearChangeEvent<HTMLSelectElement>(uniqueId);
    onChange?.(clearChangeEvent);
  };

  const describedBy = spaceSeparatedIdListGenerator([
    hasErrorMessage ? errorMessageId : undefined,
    descId,
    ariaDescribedby,
  ]);

  const inputElement = renderInput({
    ref: combinedRef,
    id: uniqueId,
    'aria-describedby': describedBy,
    hasError: hasErrorState,
    ...props,
  });

  const clonedInput = cloneElement(inputElement, {
    value,
    onChange,
    onBlur,
    onFocus,
  });

  return (
    <Box position="relative" width={width}>
      {isEditing?.toString()}
      <div className={inputStyles['input-group']}>
        {!isEditing && !hideIcon && (
          <span
            onClick={() => inputRef.current?.focus()}
            className={styles['icon-wrapper']}
          >
            <Icon icon={EditIcon} iconSize="small" />
          </span>
        )}
        {clonedInput}
        {elementType === 'select' && (
          <>
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
          </>
        )}
      </div>
      {inlineEditVisuallyHidden(descId, emptiable)}
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </Box>
  );
}

const texts = createTexts({
  clearSelect: {
    no: 'Tøm nedtrekksliste',
    nb: 'Tøm nedtrekksliste',
    nn: 'Tøm nedtrekksliste',
    en: 'Clear selection',
  },
});
