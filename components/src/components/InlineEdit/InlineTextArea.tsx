import { forwardRef, TextareaHTMLAttributes, useId, useRef } from 'react';
import styled from 'styled-components';
import { EditIcon } from '../../icons/tsx';
import { Icon } from '../Icon';
import {
  InputContainer,
  OuterInputContainer,
  renderInputMessage,
  StatefulInput,
} from '../../helpers';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { scrollbarStyling } from '../ScrollableContainer';
import {
  getInlineEditInputStyling,
  IconWrapper,
  defaultWidth,
} from './InlineEdit.styles';
import { BaseInlineInputProps } from './InlineEdit.types';
import { inlineEditVisuallyHidden } from './InlineEdit.utils';
import { useCombinedRef } from '../../hooks';

type StyledInlineTextAreaProps = {
  isEditing?: boolean;
};

const StyledInlineTextArea = styled(StatefulInput)<StyledInlineTextAreaProps>`
  ${({ isEditing }) => getInlineEditInputStyling(isEditing)}
  resize: vertical;
  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox}
`;

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
        {!isEditing && (
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
          as="textarea"
          id={uniqueId}
          ref={combinedRef}
          hasErrorMessage={!!error || hasErrorMessage}
          isEditing={isEditing}
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
