import styled, { css } from 'styled-components';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { IconWrapper } from '../IconWrapper';
import { inputMessageTokens as tokens } from './InputMessage.tokens';
import { Typography } from '../../components/Typography';
import { forwardRef } from 'react';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

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
    const { message, messageType, id, htmlProps, ...rest } = props;

    const wrapperProps = {
      ...getBaseHTMLProps(id, htmlProps, rest),
      ref,
      messageType
    };

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
          bold={isError ? true : undefined}
          color={isError ? tokens.error.base.color : undefined}
        >
          {message}
        </Typography>
      </InputMessageWrapper>
    );
  }
);
