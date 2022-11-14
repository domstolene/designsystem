import { forwardRef, TextareaHTMLAttributes, useId } from 'react';
import { EditIcon } from '../../icons/tsx';
import { Icon } from '../Icon';
import {
  InputContainer,
  OuterInputContainer,
  renderInputMessage,
} from '../../helpers';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import {
  IconWrapper,
  defaultWidth,
  StyledInlineTextArea,
} from './InlineEdit.styles';
import { BaseInlineInputProps } from './InlineEdit.types';
import { inlineEditVisuallyHidden } from './InlineEdit.utils';

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

  return (
    <OuterInputContainer width={width}>
      <InputContainer>
        {!isEditing && !hideIcon && (
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
