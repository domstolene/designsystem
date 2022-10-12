import { IconSize } from '../../components/Icon';
import { InputMessage } from '../../components/InputMessage';
import { InputSize } from './Input.types';

export const getFormInputIconSize = (componentSize: InputSize): IconSize => {
  switch (componentSize) {
    case 'medium':
      return 'medium';
    case 'small':
      return 'small';
    case 'tiny':
      return 'small';
  }
};

export function getDefaultText(
  value?: string | number | readonly string[],
  defaultValue?: string | number | readonly string[]
): string {
  if (typeof value === 'string') {
    return value;
  }

  if (typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}

export const renderInputMessage = (
  tip?: string,
  tipId?: string,
  errorMessage?: string,
  errorMessageId?: string
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
