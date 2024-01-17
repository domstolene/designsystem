import styled from 'styled-components';

import { errorsTokens } from './FileUploader.tokens';
import { InputMessage } from '../InputMessage';

interface ErrorListProps {
  errors: {
    id: string | undefined;
    message: string;
  }[];
}

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${errorsTokens.gap};
`;

export const ErrorList = (props: ErrorListProps) => {
  const { errors } = props;

  if (errors.length < 1) {
    return null;
  }

  return (
    <MessageContainer>
      {errors.map(({ id, message }) => {
        return (
          <InputMessage
            key={id}
            id={id}
            message={message}
            messageType="error"
          />
        );
      })}
    </MessageContainer>
  );
};
