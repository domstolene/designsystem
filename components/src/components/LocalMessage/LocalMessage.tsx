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
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${({ purpose }) => stylingBase(purpose)}
  width: ${({ width }) => width};
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

export type LocalMessagePurpose =
  | 'info'
  | 'warning'
  | 'danger'
  | 'confidential'
  | 'success'
  | 'tips';

export type LocalMessageProps = {
  message?: string;
  purpose?: LocalMessagePurpose;
  closable?: boolean;
  width?: CSS.WidthProperty<string>;
} & HTMLAttributes<HTMLDivElement>;

export const LocalMessage = forwardRef<HTMLDivElement, LocalMessageProps>(
  (
    {
      message,
      purpose = 'info',
      closable,
      width = tokens.container.defaultWidth,
      children,
      ...rest
    },
    ref
  ) => {
    const [isClosed, setClosed] = useState(false);
    const buttonPurpose = tokens.button[purpose].purpose as ButtonPurpose;

    return !isClosed ? (
      <Container purpose={purpose} width={width} ref={ref} {...rest}>
        <ContentContainer closable={closable}>
          <MessageIconWrapper
            Icon={tokens.icon[purpose].icon}
            color={tokens.icon[purpose].color}
          />
          {children ?? <Typography as="span">{message}</Typography>}
        </ContentContainer>
        {closable && (
          <ControlsContainer>
            <Button
              Icon={CloseOutlinedIcon}
              purpose={buttonPurpose}
              appearance="borderless"
              onClick={() => setClosed(true)}
              size="small"
            />
          </ControlsContainer>
        )}
      </Container>
    ) : null;
  }
);
