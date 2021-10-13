import styled, { css } from 'styled-components';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button, ButtonPurpose } from '../Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import { globalMessageTokens as tokens } from './GlobalMessage.tokens';
import { IconWrapper } from '../../helpers/IconWrapper';
import { Typography } from '../Typography';

const stylingBase = (purpose: GlobalMessagePurpose) => {
  return css`
    ${tokens.container.base}
    ${tokens.container[purpose].base}
  `;
};

const Container = styled.div<{ purpose: GlobalMessagePurpose }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  ${({ purpose }) => stylingBase(purpose)}
`;

const MessageIconWrapper = styled(IconWrapper)`
  margin-right: ${tokens.icon.marginRight};
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div<{ closable?: boolean }>`
  display: flex;
  align-items: center;
  ${tokens.contentContainer.base}
  ${({ closable }) =>
    closable &&
    css`
      ${tokens.contentContainer.withClosable.base}
    `}
`;

export type GlobalMessagePurpose = 'info' | 'warning' | 'danger';

export type GlobalMessageProps = {
  message?: string;
  purpose?: GlobalMessagePurpose;
  closable?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const GlobalMessage = forwardRef<HTMLDivElement, GlobalMessageProps>(
  ({ message, purpose = 'info', closable, children, ...rest }, ref) => {
    const [isClosed, setClosed] = useState(false);
    const buttonPurpose = tokens.button[purpose].purpose as ButtonPurpose;

    return !isClosed ? (
      <Container purpose={purpose} ref={ref} {...rest}>
        <ContentContainer closable={closable}>
          <MessageIconWrapper
            Icon={tokens.icon[purpose].icon}
            color={tokens.icon[purpose].color}
          />
          {children ?? <Typography as="span">{message}</Typography>}
        </ContentContainer>
        <ControlsContainer>
          {closable ? (
            <Button
              Icon={CloseOutlinedIcon}
              purpose={buttonPurpose}
              appearance="borderless"
              onClick={() => setClosed(true)}
              size="small"
            />
          ) : null}
        </ControlsContainer>
      </Container>
    ) : null;
  }
);
