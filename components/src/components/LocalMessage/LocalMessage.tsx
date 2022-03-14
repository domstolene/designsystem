import styled, { css } from 'styled-components';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button, ButtonPurpose } from '../Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import { localMessageTokens as tokens } from './LocalMessage.tokens';
import { IconWrapper } from '../../helpers/IconWrapper';
import * as CSS from 'csstype';
import { Typography } from '../Typography';
import { typographyTokens } from '../Typography/Typography.tokens';

type ContainerProps = Pick<LocalMessageProps, 'purpose' | 'width' | 'layout'>;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'vertical' ? 'column' : 'row')};
  box-sizing: border-box;
  ${({ layout }) =>
    layout === 'horisontal' &&
    css`
      align-items: center;
      justify-content: space-between;
    `};
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${({ purpose }) =>
    purpose &&
    css`
      ${tokens.container.base}
      ${tokens.container[purpose].base}
    `}
  width: ${({ width }) => width};
`;

const MessageIconWrapper = styled(IconWrapper)`
  margin-right: ${tokens.icon.marginRight};
`;

type ContentContainerProps = Pick<LocalMessageProps, 'closable' | 'layout'>;

const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  align-items: center;
  ${tokens.contentContainer.base}
  ${({ layout }) =>
    layout === 'vertical'
      ? css`
          ${tokens.contentContainer.vertical.base}
        `
      : ''}
  ${({ closable }) =>
    closable &&
    css`
      ${tokens.contentContainer.withClosable.base}
    `}
`;

type TopContainerProps = Pick<LocalMessageProps, 'closable'>;

const TopContainer = styled.div<TopContainerProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tokens.topContainer.base}
  ${({ closable }) =>
    closable &&
    css`
      ${tokens.topContainer.withClosable.base}
    `}
`;

export type LocalMessagePurpose =
  | 'info'
  | 'warning'
  | 'danger'
  | 'confidential'
  | 'success'
  | 'tips';

export type LocalMessageLayout = 'horisontal' | 'vertical';

export type LocalMessageProps = {
  message?: string;
  purpose?: LocalMessagePurpose;
  closable?: boolean;
  onClose?: () => void;
  width?: CSS.WidthProperty<string>;
  layout?: LocalMessageLayout;
} & HTMLAttributes<HTMLDivElement>;

export const LocalMessage = forwardRef<HTMLDivElement, LocalMessageProps>(
  (
    {
      message,
      purpose = 'info',
      closable,
      onClose,
      width = tokens.container.defaultWidth,
      layout = 'horisontal',
      children,
      ...rest
    },
    ref
  ) => {
    const [isClosed, setClosed] = useState(false);
    const buttonPurpose = tokens.button[purpose].purpose as ButtonPurpose;

    const containerProps = {
      purpose,
      width,
      layout,
      ref,
      ...rest
    };

    const contentContainerProps = {
      layout,
      closable
    };

    const messageIconWrapper = (
      <MessageIconWrapper
        Icon={tokens.icon[purpose].icon}
        color={tokens.icon[purpose].color}
      />
    );

    const content = children ?? <Typography as="span">{message}</Typography>;

    const closeButton = closable && (
      <Button
        Icon={CloseOutlinedIcon}
        purpose={buttonPurpose}
        appearance="borderless"
        onClick={() => {
          setClosed(true);
          onClose && onClose();
        }}
        size="small"
        aria-label="Lukk melding"
      />
    );

    return !isClosed ? (
      <Container {...containerProps}>
        {layout === 'horisontal' ? (
          <>
            <ContentContainer {...contentContainerProps}>
              {messageIconWrapper} {content}
            </ContentContainer>
            {closeButton}
          </>
        ) : (
          <>
            <TopContainer closable={closable}>
              {messageIconWrapper} {closeButton}
            </TopContainer>
            <ContentContainer {...contentContainerProps}>
              {content}
            </ContentContainer>
          </>
        )}
      </Container>
    ) : null;
  }
);
