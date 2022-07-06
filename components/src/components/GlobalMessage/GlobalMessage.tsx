import styled, { css } from 'styled-components';
import { Button, ButtonPurpose } from '../Button';
import { forwardRef, useState } from 'react';
import { globalMessageTokens as tokens } from './GlobalMessage.tokens';
import { Icon, IconName } from '../Icon';
import { Typography } from '../Typography';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

type ContainerProps = Pick<GlobalMessageProps, 'purpose'>;

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  ${({ purpose }) =>
    purpose &&
    css`
      ${tokens.container.base}
      ${tokens.container[purpose].base}
    `}
`;

const MessageIconWrapper = styled(Icon)`
  margin-right: ${tokens.icon.marginRight};
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

type ContentContainerProps = Pick<GlobalMessageProps, 'closable'>;

const ContentContainer = styled.div<ContentContainerProps>`
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

export type GlobalMessageProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Meldingen som vises til brukeren. Brukes kun når meldingen er en `string`. */
    message?: string;
    /**Formålet med meldingen. Påvirker styling. */
    purpose?: GlobalMessagePurpose;
    /**Indikerer om meldingen skal være lukkbar. */
    closable?: boolean;
    /**Ekstra logikk å kjøre når meldingen lukkes. */
    onClose?: () => void;
  }
>;

export const GlobalMessage = forwardRef<HTMLDivElement, GlobalMessageProps>(
  (props, ref) => {
    const {
      message,
      purpose = 'info',
      closable,
      onClose,
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
      ref,
      purpose
    };

    return !isClosed ? (
      <Container {...containerProps}>
        <ContentContainer closable={closable}>
          <MessageIconWrapper
            iconName={tokens.icon[purpose].icon as IconName}
            color={tokens.icon[purpose].color}
          />
          {children ?? <Typography as="span">{message}</Typography>}
        </ContentContainer>
        <ControlsContainer>
          {closable && (
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
          )}
        </ControlsContainer>
      </Container>
    ) : null;
  }
);
