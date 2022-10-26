import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { forwardRef, useState } from 'react';
import {
  purposeVariants,
  localMessageTokens as tokens,
} from './LocalMessage.tokens';
import { Icon } from '../Icon';
import { Property } from 'csstype';
import { Typography } from '../Typography';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { CloseIcon } from '../../icons/tsx';
import { selection } from '../../helpers/styling';
import {
  defaultTypographyType,
  getFontStyling,
} from '../Typography/Typography.utils';

const defaultWidth: Property.Width<string> = '400px';
const { container, contentContainer, topContainer } = tokens;

type ContainerProps = Pick<LocalMessageProps, 'purpose' | 'width' | 'layout'>;

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'vertical' ? 'column' : 'row')};
  box-shadow: ${container.base.boxShadow};
  border: ${container.base.border};
  padding: ${container.base.padding};
  border-radius: ${container.base.borderRadius};
  ${getFontStyling(defaultTypographyType, true)}

  ${({ layout }) =>
    layout === 'horisontal' &&
    css`
      align-items: center;
      justify-content: space-between;
    `};
  *::selection {
    ${selection}
  }
  ${({ purpose }) =>
    purpose &&
    css`
      border-color: ${container.purpose[purpose].borderColor};
      background-color: ${container.purpose[purpose].backgroundColor};
    `}
  width: ${({ width }) => width};
`;

const MessageIconWrapper = styled(Icon)`
  margin-right: ${tokens.icon.marginRight};
`;

type ContentContainerProps = Pick<LocalMessageProps, 'closable' | 'layout'>;

const ContentContainer = styled.div<ContentContainerProps>`
  padding-top: ${contentContainer.paddingTop};
  padding-right: ${({ closable }) =>
    closable
      ? contentContainer.withClosable.paddingRight
      : contentContainer.paddingRight};

  ${({ layout }) =>
    layout === 'vertical'
      ? css`
          padding-bottom: ${contentContainer.vertical.paddingBottom};
        `
      : css`
          display: flex;
          align-items: center;
          padding-bottom: ${contentContainer.paddingBottom};
        `};
`;

type TopContainerProps = Pick<LocalMessageProps, 'closable'>;

const TopContainer = styled.div<TopContainerProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ closable }) =>
    closable ? topContainer.withClosable.paddingTop : topContainer.paddingTop};
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
      width = defaultWidth,
      layout = 'horisontal',
      children,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const [isClosed, setClosed] = useState(false);

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      purpose,
      width,
      layout,
      ref,
    };

    const contentContainerProps = {
      layout,
      closable,
    };

    const messageIconWrapper = (
      <MessageIconWrapper
        icon={purposeVariants[purpose].icon}
        color={tokens.icon[purpose].color}
      />
    );

    const content = children ?? <Typography as="span">{message}</Typography>;

    const closeButton = closable && (
      <Button
        icon={CloseIcon}
        purpose={purposeVariants[purpose].closeButtonPurpose}
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
