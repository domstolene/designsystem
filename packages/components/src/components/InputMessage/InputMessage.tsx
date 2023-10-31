import styled, { css } from 'styled-components';
import { Icon } from '@norges-domstoler/dds-icons';
import { inputMessageTokens as tokens } from './InputMessage.tokens';
import { Typography } from '@norges-domstoler/dds-typography';
import { forwardRef } from 'react';
import {
  BaseComponentProps,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';

import { ErrorIcon } from '@norges-domstoler/dds-icons';

type WrapperProps = {
  messageType: InputMessageType;
};

const InputMessageWrapper = styled.div<WrapperProps>`
  display: flex;
  width: fit-content;
  word-break: break-word;
  max-width: 100%;
  ${({ messageType }) =>
    messageType === 'error'
      ? css`
          color: ${tokens.message.error.color};
          background-color: ${tokens.message.error.backgroundColor};
          padding: ${tokens.message.error.padding};
          gap: ${tokens.message.error.gap};
        `
      : ''}
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
        {isError && <Icon icon={ErrorIcon} iconSize="inherit" />}
        <Typography
          typographyType={
            isError ? 'supportingStyleLabel01' : 'supportingStyleHelperText01'
          }
          as="span"
          bold={isError ? true : undefined}
          color={isError ? tokens.message.error.color : undefined}
        >
          {message}
        </Typography>
      </InputMessageWrapper>
    );
  },
);

InputMessage.displayName = 'InputMessage';
