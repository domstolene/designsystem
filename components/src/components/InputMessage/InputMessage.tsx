import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { inputMessageTokens as tokens } from './InputMessage.tokens';
import { Typography } from '../../components/Typography';
import { forwardRef } from 'react';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { ErrorIcon } from '../../icons/tsx';

type WrapperProps = {
  messageType: InputMessageType;
};

const InputMessageWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  word-break: break-word;
  ${tokens.base}
  ${({ messageType }) =>
    messageType &&
    css`
      ${tokens[messageType].base}
    `}
  svg {
    margin-right: ${tokens.icon.spaceRight};
    position: relative;
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
          color={isError ? tokens.error.base.color : undefined}
        >
          {message}
        </Typography>
      </InputMessageWrapper>
    );
  }
);
