import styled, { css } from 'styled-components';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button, ButtonPurpose } from '../Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import { localMessageTokens as tokens } from './localMessageTokens';
import { IconWrapper } from '../../helpers/IconWrapper';
import * as CSS from 'csstype';
import { Typography } from '../Typography';
import { typographyTokens } from '../Typography/typographyTokens';

const stylingBase = (purpose: LocalMessagePurpose) => {
  return css`
    ${tokens.container.base}
    ${tokens.container[purpose].base}
  `;
};

const Container = styled.div<{
  purpose: LocalMessagePurpose;
  width: CSS.WidthProperty<string>;
  layout?: LocalMessageLayout;
}>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'vertical' ? 'column' : 'row')};

  ${({ layout }) =>
    layout === 'horisontal' &&
    css`
      align-items: center;
      justify-content: space-between;
    `};
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${({ purpose }) => stylingBase(purpose)}
  width: ${({ width }) => width};
`;

const MessageIconWrapper = styled(IconWrapper)`
  margin-right: ${tokens.icon.marginRight};
`;

const ContentContainer = styled.div<{
  closable?: boolean;
  layout: LocalMessageLayout;
}>`
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

const TopContainer = styled.div<{ closable?: boolean }>`
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
  width?: CSS.WidthProperty<string>;
  layout?: LocalMessageLayout;
} & HTMLAttributes<HTMLDivElement>;

export const LocalMessage = forwardRef<HTMLDivElement, LocalMessageProps>(
  (
    {
      message,
      purpose = 'info',
      closable,
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
      purpose: purpose,
      width: width,
      layout: layout,
      ref: ref,
      ...rest
    };

    const contentContainerProps = {
      layout: layout,
      closable: closable
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
        onClick={() => setClosed(true)}
        size="small"
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
