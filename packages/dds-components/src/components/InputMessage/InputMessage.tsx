import styles from './InputMessage.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Icon } from '../Icon';
import { ErrorIcon } from '../Icon/icons';
import { Typography } from '../Typography/Typography/Typography';

export type InputMessageType = 'error' | 'tip';

export type InputMessageProps = BaseComponentProps<
  HTMLDivElement,
  {
    /** Meldingen som vises til brukeren. */
    message?: string;
    /** Formålet med meldingen. Påvirker styling.
     * @default "error"
     */
    messageType: InputMessageType;
  }
>;

export const InputMessage = ({
  message,
  messageType,
  id,
  className,
  htmlProps,
  children,
  ...rest
}: InputMessageProps) => {
  const isError = messageType === 'error';

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, styles.container, isError && styles['container--error']),
        htmlProps,
        rest,
      )}
    >
      {isError && (
        <Icon icon={ErrorIcon} iconSize="small" className={styles.icon} />
      )}
      <Typography
        typographyType={isError ? 'bodySmall' : 'bodyXsmall'}
        color={isError ? 'textDefault' : 'textSubtle'}
        as="span"
      >
        {message ?? children}
      </Typography>
    </div>
  );
};

InputMessage.displayName = 'InputMessage';

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
