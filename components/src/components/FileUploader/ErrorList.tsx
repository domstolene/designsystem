import styled from 'styled-components';
import { InputMessage } from '../InputMessage';
import { errorsTokens } from './FileUploader.tokens';

type ErrorListProps = {
  errors: {
    id: string | undefined;
    message: string;
  }[];
};

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
