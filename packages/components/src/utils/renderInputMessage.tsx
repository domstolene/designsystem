import { InputMessage } from '../components/InputMessage';

export const renderInputMessage = (
  tip?: string,
  tipId?: string,
  errorMessage?: string,
  errorMessageId?: string,
) => (
  <>
    {errorMessage && errorMessageId && (
      <InputMessage
        message={errorMessage}
        messageType="error"
        id={errorMessageId}
      />
    )}
    {tip && tipId && !errorMessage && (
      <InputMessage message={tip} messageType="tip" id={tipId} />
    )}
  </>
);
