import { forwardRef, InputHTMLAttributes, useId } from 'react';
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
import {
  getInlineEditInputStyling,
  IconWrapper,
  defaultWidth,
} from './InlineEdit.styles';
import { BaseInlineInputProps } from './InlineEdit.types';
import { inlineEditVisuallyHidden } from './InlineEdit.utils';

type StyledInlineInputProps = {
  isEditing?: boolean;
};

const StyledInlineInput = styled(StatefulInput)<StyledInlineInputProps>`
  ${({ isEditing }) => getInlineEditInputStyling(isEditing)}
`;

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
      ...rest
    } = props;

    const genereatedId = useId();
    const uniqueId = id ?? `${genereatedId}-InlineInput`;
    const hasErrorMessage = !!errorMessage;
    const hasError = !!error;
    const hasErrorState = hasError || hasErrorMessage;
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
          <StyledInlineInput
            {...rest}
            id={uniqueId}
            ref={ref}
            hasErrorMessage={hasErrorState}
            isEditing={isEditing}
            aria-describedby={spaceSeparatedIdListGenerator([
              errorMessageId,
              descId,
              ariaDescribedby,
            ])}
            aria-invalid={hasErrorState}
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
  }
);
