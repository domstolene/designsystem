import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { forwardRef, useState } from 'react';
import { localMessageTokens as tokens } from './LocalMessage.tokens';
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
const { container, icon, purposeVariants } = tokens;

type ContainerProps = Pick<
  LocalMessageProps,
  'purpose' | 'width' | 'layout' | 'closable'
>;

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: grid;
  grid-template-areas: ${({ layout, closable }) =>
    getGridTemplateAreas(layout, closable)};
  grid-template-columns: ${({ layout, closable }) =>
    getGridTemplateColumns(layout, closable)};
  box-shadow: ${container.base.boxShadow};
  border: ${container.base.border};
  border-radius: ${container.base.borderRadius};
  padding: ${container.base.padding};
  gap: ${container.base.gap};
  align-items: center;
  ${getFontStyling(defaultTypographyType, true)}

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

function getGridTemplateAreas(
  layout: LocalMessageProps['layout'],
  closeable: LocalMessageProps['closable']
) {
  if (closeable) {
    if (layout === 'horisontal') {
      return '"icon text closeButton"';
    }
    return '"icon closeButton" "text text"';
  } else {
    if (layout === 'horisontal') {
      return '"icon text"';
    }
    return '"icon icon" "text text"';
  }
}

function getGridTemplateColumns(
  layout: LocalMessageProps['layout'],
  closable: LocalMessageProps['closable']
) {
  if (closable) {
    return layout === 'horisontal'
      ? 'min-content 1fr min-content'
      : '1fr min-content';
  }
  return layout === 'horisontal' ? 'min-content 1fr' : '1fr';
}

const MessageIconWrapper = styled(Icon)`
  grid-area: icon;
`;

const TextContainer = styled.div`
  grid-area: text;
`;

const CloseButton = styled(Button)<Pick<LocalMessageProps, 'layout'>>`
  grid-area: closeButton;
  margin: -${container.base.padding} 0;
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
      closable,
      ref,
    };

    if (isClosed) {
      return <></>;
    }

    return (
      <Container {...containerProps}>
        <MessageIconWrapper
          icon={purposeVariants[purpose].icon}
          color={icon[purpose].color}
        />
        <TextContainer>
          {children ?? <Typography as="span">{message}</Typography>}
        </TextContainer>
        {closable && (
          <CloseButton
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
      </Container>
    );
  }
);

LocalMessage.displayName = 'LocalMessage';
