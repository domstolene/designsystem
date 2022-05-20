import styled, { css } from 'styled-components';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { IconWrapper } from '../../components/IconWrapper';
import { inputMessageTokens as tokens } from './InputMessage.tokens';
import * as CSS from 'csstype';
import { Typography } from '../../components/Typography';
import { forwardRef, HTMLAttributes } from 'react';

const InputMessageWrapper = styled.div<{
  messageType: MessageType;
  maxWidth?: CSS.Property.MaxWidth<string>;
}>`
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
    max-width: ${({ maxWidth }) => maxWidth};

  svg {
    margin-right: ${tokens.icon.spaceRight};
    position: relative;
  }
`;

type MessageType = 'error' | 'tip';

type InputMessageProps = {
  message: string;
  messageType: MessageType;
  maxWidth?: CSS.Property.MaxWidth<string>;
  messageId?: string;
} & HTMLAttributes<HTMLDivElement>;

export const InputMessage = forwardRef<HTMLDivElement, InputMessageProps>(
  (
    {
      message,
      messageType,
      maxWidth = tokens.defaultMaxWidth,
      messageId,
      ...rest
    },
    ref
  ) => {
    const wrapperProps = { ref, messageType, maxWidth, ...rest };

    const isError = messageType === 'error';

    return (
      <InputMessageWrapper {...wrapperProps}>
        {isError && (
          <IconWrapper Icon={ReportProblemOutlinedIcon} iconSize="inline" />
        )}
        <Typography
          typographyType={
            isError ? 'supportingStyleLabel01' : 'supportingStyleHelperText01'
          }
          as="span"
          id={messageId}
          bold={isError ? true : undefined}
          color={isError ? tokens.error.base.color : undefined}
        >
          {message}
        </Typography>
      </InputMessageWrapper>
    );
  }
);
