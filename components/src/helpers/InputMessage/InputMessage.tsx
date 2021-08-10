import styled, { css } from 'styled-components';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { IconWrapper } from '../IconWrapper';
import { inputMessageTokens as tokens } from './inputMessageTokens';
import * as CSS from 'csstype';

const InputMessageWrapper = styled.div<{
  messageType: MessageType;
  messageSize?: MessageSize;
  maxWidth?: CSS.Property.MaxWidth<string>;
}>`
  display: flex;
  align-items: center;
  width: fit-content;
  word-break: break-word;
  ${tokens.base}
  ${({ messageType, messageSize }) =>
    messageSize &&
    messageType &&
    css`
      ${tokens[messageType].base}
      ${tokens[messageType][messageSize].base}
    `}
    max-width: ${({ maxWidth }) => maxWidth};

  svg {
    margin-right: ${tokens.icon.spaceRight};
    position: relative;
  }
`;

type MessageType = 'error' | 'tip';

type MessageSize = 'small' | 'medium';

type Props = {
  message: string;
  messageType: MessageType;
  messageSize?: MessageSize;
  maxWidth?: CSS.Property.MaxWidth<string>;
};

function InputMessage({ message, messageType, messageSize, maxWidth }: Props) {
  const wrapperProps = { messageType, messageSize, maxWidth };
  return (
    <InputMessageWrapper {...wrapperProps}>
      {messageType === 'error' && (
        <IconWrapper Icon={ReportProblemOutlinedIcon} iconSize="inline" />
      )}
      <div>{message}</div>
    </InputMessageWrapper>
  );
}

InputMessage.defaultProps = {
  maxWidth: tokens.defaultMaxWidth,
  messageSize: 'medium'
};

export default InputMessage;
