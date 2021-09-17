import styled, { css } from 'styled-components';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { IconWrapper } from '../IconWrapper';
import { inputMessageTokens as tokens } from './inputMessageTokens';
import * as CSS from 'csstype';
import { Typography } from '../../components/Typography';

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

type MessageSize = 'small' | 'medium';

type Props = {
  message: string;
  messageType: MessageType;
  maxWidth?: CSS.Property.MaxWidth<string>;
};

function InputMessage({
  message,
  messageType,
  maxWidth = tokens.defaultMaxWidth
}: Props) {
  const wrapperProps = { messageType, maxWidth };

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
        as="div"
        bold={isError ? true : undefined}
        color={isError ? tokens.error.base.color : undefined}
      >
        {message}
      </Typography>
    </InputMessageWrapper>
  );
}

export default InputMessage;
