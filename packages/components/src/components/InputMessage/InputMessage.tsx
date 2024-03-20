import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { inputMessageTokens as tokens } from './InputMessage.tokens';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { Icon } from '../Icon';
import { ErrorIcon } from '../Icon/icons';
import { Typography } from '../Typography/Typography/Typography';

interface WrapperProps {
  messageType: InputMessageType;
}

const InputMessageWrapper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'messageType',
})<WrapperProps>`
  display: flex;
  width: fit-content;
  word-break: break-word;
  max-width: 100%;
  ${({ messageType }) =>
    messageType === 'error' &&
    css`
      background-color: ${tokens.message.error.backgroundColor};
      padding: ${tokens.message.error.padding};
      gap: ${tokens.message.error.gap};
    `}
  svg {
    margin-top: ${tokens.icon.marginTop};
  }
`;

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

    const wrapperProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref,
      messageType,
    };

    const isError = messageType === 'error';

    return (
      <InputMessageWrapper {...wrapperProps}>
        {isError && (
          <Icon
            icon={ErrorIcon}
            iconSize="small"
            color={tokens.message.error.icon.color}
          />
        )}
        <Typography
          typographyType={
            isError ? 'bodySans01' : 'supportingStyleHelperText01'
          }
          as="span"
        >
          {message}
        </Typography>
      </InputMessageWrapper>
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
