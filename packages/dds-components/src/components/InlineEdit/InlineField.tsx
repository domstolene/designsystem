import { type Ref, useId, useRef } from 'react';

import { useCombinedRef } from '../../hooks';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import inputStyles from '../helpers/Input/Input.module.css';
import { Icon, type SvgIcon } from '../Icon';
import { ChevronDownIcon, EditIcon } from '../Icon/icons';
import { renderInputMessage } from '../InputMessage';
import { Box } from '../layout';
import { useInlineEditContext } from './InlineEdit.context';
import styles from './InlineEdit.module.css';
import {
  type EditElementTag,
  type ElementFromTag,
  type InlineEditHTMLProps,
  type InlineFieldProps,
} from './InlineEdit.types';
import {
  inlineEditVisuallyHidden,
  inlineInputCns,
  inlineSelectCns,
  inlineTextareaCns,
} from './InlineEdit.utils';
import { useTranslation } from '../../i18n';
import { commonTexts } from '../../i18n/commonTexts';
import { createClearChangeEvent } from '../../utils/createClearChangeEvent';
import { ClearButton } from '../helpers/ClearButton/ClearButton';
import utilStyles from '../helpers/styling/utilStyles.module.css';

export function InlineField<T extends EditElementTag>(
  props: InlineFieldProps<T>,
) {
  const {
    elementType,
    id,
    error,
    errorMessage,
    width = '140px',
    hideIcon,
    ref,
    className,
    'aria-describedby': ariaDescribedby,
    ...rest
  } = props;

  const { onBlur, onChange, onFocus, isEditing, value, emptiable } =
    useInlineEditContext();
  const { t } = useTranslation();

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-InlineEdit`;
  const hasErrorMessage = !!errorMessage;
  const hasErrorState = !!error || hasErrorMessage;
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');
  const descId = derivativeIdGenerator(uniqueId, 'desc');
  const hasValue = !!value;

  const inputRef = useRef<ElementFromTag<T>>(null);
  const combinedRef = useCombinedRef<ElementFromTag<T>>(ref, inputRef);

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

  const commonProps = {
    id: uniqueId,
    'aria-describedby': describedBy,
    'aria-invalid': hasErrorState,
    value,
    onBlur,
    onChange,
    onFocus,
  };

  const cnArgs = [hasErrorState, !isEditing && !hideIcon];
  const iconSize = 'component';
  function makeIcon(icon: SvgIcon, className: string) {
    return (
      <Icon
        iconSize={iconSize}
        icon={icon}
        className={cn(
          className,
          elementType === 'textarea'
            ? styles['edit-icon-textarea']
            : utilStyles['center-absolute-y'],
        )}
      />
    );
  }

  const renderElement = () => {
    switch (elementType) {
      case 'input':
        return (
          <input
            {...(rest as InlineEditHTMLProps<'input'>)}
            ref={combinedRef as Ref<HTMLInputElement>}
            {...commonProps}
            className={cn(className, ...inlineInputCns(...cnArgs))}
          />
        );
      case 'textarea':
        return (
          <textarea
            {...(rest as InlineEditHTMLProps<'textarea'>)}
            ref={combinedRef as Ref<HTMLTextAreaElement>}
            {...commonProps}
            className={cn(className, ...inlineTextareaCns(...cnArgs))}
          />
        );
      case 'select':
        return (
          <>
            <select
              {...(rest as InlineEditHTMLProps<'select'>)}
              ref={combinedRef as Ref<HTMLSelectElement>}
              {...commonProps}
              className={cn(className, ...inlineSelectCns(...cnArgs, hasValue))}
            />
            {hasValue && emptiable && (
              <ClearButton
                aria-label={t(commonTexts.clearSelect)}
                onClick={clearInput}
                size={iconSize}
                className={styles['clear-button']}
              />
            )}
            {makeIcon(ChevronDownIcon, styles.chevron)}
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Box position="relative" width={width}>
      <div className={inputStyles['input-group']}>
        {!isEditing && !hideIcon && makeIcon(EditIcon, styles['edit-icon'])}
        {renderElement()}
      </div>
      {inlineEditVisuallyHidden(descId, emptiable)}
      {renderInputMessage({ errorMessage, errorMessageId })}
    </Box>
  );
}
