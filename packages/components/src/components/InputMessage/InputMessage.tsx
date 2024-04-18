import { forwardRef } from 'react';

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
    message: string;
    /** Formålet med meldingen. Påvirker styling. */
    messageType: InputMessageType;
  }
>;

export const InputMessage = forwardRef<HTMLDivElement, InputMessageProps>(
  (props, ref) => {
    const { message, messageType, id, className, htmlProps, ...rest } = props;

    const isError = messageType === 'error';

    return (
      <div
        {...getBaseHTMLProps(
          id,
          cn(className, styles.container, styles[`container--${messageType}`]),
          htmlProps,
          rest,
        )}
        ref={ref}
      >
        {isError && (
          <Icon icon={ErrorIcon} iconSize="small" className={styles.icon} />
        )}
        <Typography
          typographyType={
            isError ? 'bodySans01' : 'supportingStyleHelperText01'
          }
          as="span"
        >
          {message}
        </Typography>
      </div>
    );
  },
);

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
