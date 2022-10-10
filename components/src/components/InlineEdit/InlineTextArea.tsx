import { forwardRef, TextareaHTMLAttributes, useId } from 'react';
import styled from 'styled-components';
import { EditIcon } from '../../icons/tsx';
import { Icon } from '../Icon';
import { InputMessage } from '../InputMessage';
import {
  InputContainer,
  OuterInputContainer,
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
  const errorMessageId = derivativeIdGenerator(
    uniqueId,
    'errorMessage',
    errorMessage
  );
  const descId = derivativeIdGenerator(uniqueId, 'desc', true);

  return (
    <OuterInputContainer width={width}>
      <InputContainer>
        {!isEditing && (
          <IconWrapper>
            <Icon icon={EditIcon} iconSize="small" />
          </IconWrapper>
        )}
        <StyledInlineTextArea
          {...rest}
          as="textarea"
          id={uniqueId}
          ref={ref}
          hasErrorMessage={!!error || hasErrorMessage}
          isEditing={isEditing}
          aria-describedby={spaceSeparatedIdListGenerator([
            errorMessageId,
            descId,
            ariaDescribedby,
          ])}
        />
      </InputContainer>
      {descId && inlineEditVisuallyHidden(descId, emptiable)}
      {hasErrorMessage && (
        <InputMessage
          messageType="error"
          message={errorMessage}
          id={errorMessageId}
        />
      )}
    </OuterInputContainer>
  );
});
