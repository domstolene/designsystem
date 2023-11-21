import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { forwardRef, useState } from 'react';
import {
  globalMessageTokens as tokens,
  purposeVariants,
  typographyType,
} from './GlobalMessage.tokens';
import { Icon } from '@norges-domstoler/dds-icons';
import { Typography } from '@norges-domstoler/dds-typography';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { CloseIcon } from '@norges-domstoler/dds-icons';
import { getFontStyling } from '@norges-domstoler/dds-typography';

const { container, contentContainer, icon } = tokens;

const Container = styled.div<{
  $purpose: GlobalMessagePurpose;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: ${container.padding};
  border-bottom: ${container.borderBottom};
  ${getFontStyling(typographyType, true)}
  ${({ $purpose }) => css`
    border-color: ${container[$purpose].borderColor};
    background-color: ${container[$purpose].backgroundColor};
  `}
`;

const MessageIconWrapper = styled(Icon)`
  margin-right: ${icon.marginRight};
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div<{
  $closable: GlobalMessageProps['closable'];
}>`
  display: flex;
  align-items: center;
  padding-top: ${contentContainer.paddingTop};
  padding-bottom: ${contentContainer.paddingBottom};
  padding-right: ${({ $closable }) =>
    $closable
      ? contentContainer.withClosable.paddingRight
      : contentContainer.paddingRight};
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

    return !isClosed ? (
      <Container
        ref={ref}
        $purpose={purpose}
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
      >
        <ContentContainer $closable={closable}>
          <MessageIconWrapper
            icon={purposeVariants[purpose].icon}
            color={icon[purpose].color}
          />
          {children ?? <Typography as="span">{message}</Typography>}
        </ContentContainer>
        <ControlsContainer>
          {closable && (
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
          )}
        </ControlsContainer>
      </Container>
    ) : null;
  },
);

GlobalMessage.displayName = 'GlobalMessage';
