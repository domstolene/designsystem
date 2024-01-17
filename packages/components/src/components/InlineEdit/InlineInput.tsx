import { type InputHTMLAttributes, forwardRef, useId, useRef } from 'react';

import {
  IconWrapper,
  StyledInlineInput,
  defaultWidth,
} from './InlineEdit.styles';
import { type BaseInlineInputProps } from './InlineEdit.types';
import { inlineEditVisuallyHidden } from './InlineEdit.utils';
import { useCombinedRef } from '../../hooks';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { renderInputMessage } from '../../utils/renderInputMessage';
import { InputContainer, OuterInputContainer } from '../helpers';
import { Icon } from '../Icon';
import { EditIcon } from '../Icon/icons';

export type InlineInputProps = BaseInlineInputProps &
  InputHTMLAttributes<HTMLInputElement>;

export const InlineInput = forwardRef<HTMLInputElement, InlineInputProps>(
  (props, ref) => {
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
    const uniqueId = id ?? `${genereatedId}-InlineInput`;
    const hasErrorMessage = !!errorMessage;
    const hasError = !!error;
    const hasErrorState = hasError || hasErrorMessage;
    const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');
    const descId = derivativeIdGenerator(uniqueId, 'desc');

    const inputRef = useRef<HTMLInputElement>(null);
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
          <StyledInlineInput
            {...rest}
            id={uniqueId}
            ref={combinedRef}
            hasErrorMessage={hasErrorState}
            isEditing={isEditing}
            hideIcon={hideIcon}
            aria-describedby={spaceSeparatedIdListGenerator([
              hasErrorMessage ? errorMessageId : undefined,
              descId,
              ariaDescribedby,
            ])}
            aria-invalid={hasErrorState}
          />
        </InputContainer>
        {inlineEditVisuallyHidden(descId, emptiable)}
        {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
      </OuterInputContainer>
    );
  },
);

InlineInput.displayName = 'InlineInput';
