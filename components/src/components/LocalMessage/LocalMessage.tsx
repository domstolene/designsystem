import styled, { css } from 'styled-components';
import { Button, ButtonPurpose } from '../Button';
import { forwardRef, useState } from 'react';
import { localMessageTokens as tokens } from './LocalMessage.tokens';
import { Icon, IconName } from '../Icon';
import { Property } from 'csstype';
import { Typography } from '../Typography';
import { typographyTokens } from '../Typography/Typography.tokens';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

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

const MessageIconWrapper = styled(Icon)`
  margin-right: ${tokens.icon.marginRight};
`;

type ContentContainerProps = Pick<LocalMessageProps, 'closable' | 'layout'>;

const ContentContainer = styled.div<ContentContainerProps>`
  ${tokens.contentContainer.base}
  ${({ layout }) =>
    layout === 'vertical'
      ? css`
          ${tokens.contentContainer.vertical.base}
        `
      : css`
          display: flex;
          align-items: center;
        `}
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

export type LocalMessageProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Meldingen som vises til brukeren. Brukes kun når meldingen er string. */
    message?: string;
    /**Formålet med meldingen. Påvirker styling. */
    purpose?: LocalMessagePurpose;
    /** Indikerer om meldingen skal være lukkbar.*/
    closable?: boolean;
    /**Ekstra logikk å kjøre når meldingen lukkes. */
    onClose?: () => void;
    /**Layoutet i komponenten. Ved kompleks innhold anbefales `layout='vertical'`. */
    layout?: LocalMessageLayout;
    /**Custom bredde ved behov. */
    width?: Property.Width<string>;
  }
>;

export const LocalMessage = forwardRef<HTMLDivElement, LocalMessageProps>(
  (props, ref) => {
    const {
      message,
      purpose = 'info',
      closable,
      onClose,
      width = tokens.container.defaultWidth,
      layout = 'horisontal',
      children,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const [isClosed, setClosed] = useState(false);
    const buttonPurpose = tokens.button[purpose].purpose as ButtonPurpose;

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      purpose,
      width,
      layout,
      ref
    };

    const contentContainerProps = {
      layout,
      closable
    };

    const messageIconWrapper = (
      <MessageIconWrapper
        iconName={tokens.icon[purpose].icon as IconName}
        color={tokens.icon[purpose].color}
      />
    );

    const content = children ?? <Typography as="span">{message}</Typography>;

    const closeButton = closable && (
      <Button
        icon="close"
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
