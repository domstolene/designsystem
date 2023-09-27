import { forwardRef, TextareaHTMLAttributes, useId, useRef } from 'react';
import { EditIcon } from '@norges-domstoler/dds-icons';
import { Icon } from '@norges-domstoler/dds-icons';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '@norges-domstoler/dds-core';
import {
  IconWrapper,
  defaultWidth,
  StyledInlineTextArea,
} from './InlineEdit.styles';
import { BaseInlineInputProps } from './InlineEdit.types';
import { inlineEditVisuallyHidden } from './InlineEdit.utils';
import { useCombinedRef } from '@norges-domstoler/dds-core';
import { renderInputMessage } from '../../utils/renderInputMessage';
import {
  OuterInputContainer,
  InputContainer,
} from '@norges-domstoler/dds-form';

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
    width = defaultWidth,
    'aria-describedby': ariaDescribedby,
    emptiable,
    hideIcon,
    ...rest
  } = props;

  const genereatedId = useId();
  const uniqueId = id ?? `${genereatedId}-InlineTextArea`;
  const hasErrorMessage = !!errorMessage;
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');
  const descId = derivativeIdGenerator(uniqueId, 'desc');

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const combinedRef = useCombinedRef(ref, inputRef);

  return (
    <OuterInputContainer width={width}>
      <InputContainer>
        {!isEditing && !hideIcon && (
          <IconWrapper
            onClick={() => {
              inputRef.current?.focus();
            }}
          >
            <Icon icon={EditIcon} iconSize="small" />
          </IconWrapper>
        )}
        <StyledInlineTextArea
          {...rest}
          id={uniqueId}
          ref={combinedRef}
          hasErrorMessage={!!error || hasErrorMessage}
          isEditing={isEditing}
          hideIcon={hideIcon}
          aria-describedby={spaceSeparatedIdListGenerator([
            hasErrorMessage ? errorMessageId : undefined,
            descId,
            ariaDescribedby,
          ])}
        />
      </InputContainer>
      {inlineEditVisuallyHidden(descId, emptiable)}
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </OuterInputContainer>
  );
});

InlineTextArea.displayName = 'InlineTextArea';
