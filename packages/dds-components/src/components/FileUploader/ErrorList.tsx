import { StylelessList } from '../helpers';
import { InputMessage, renderInputMessage } from '../InputMessage';

interface ErrorListProps {
  errors: Array<{
    id: string | undefined;
    message: string;
  }>;
}

export const ErrorList = (props: ErrorListProps) => {
  const { errors } = props;

  if (errors.length < 1) {
    return null;
  }

  if (errors.length === 1) {
    return renderInputMessage({
      errorMessage: errors[0].message,
      errorMessageId: errors[0].id,
    });
  }

  return (
    <StylelessList>
      {errors.map(({ id, message }) => {
        return (
          <li>
            <InputMessage
              key={id}
              id={id}
              message={message}
              messageType="error"
            />
          </li>
        );
      })}
    </StylelessList>
  );
};
