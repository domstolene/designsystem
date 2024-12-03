import utilStyles from '../helpers/styling/utilStyles.module.css';
import { InputMessage } from '../InputMessage';

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
    return (
      <InputMessage
        id={errors[0].id}
        message={errors[0].message}
        messageType="error"
      />
    );
  }

  return (
    <ul className={utilStyles['remove-list-styling']}>
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
    </ul>
  );
};
