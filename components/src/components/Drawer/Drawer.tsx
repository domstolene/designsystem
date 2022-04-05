import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { Typography } from '../Typography';
import {
  useCombinedRef,
  useMountTransition,
  useOnClickOutside,
  useOnKeyDown,
  useFocusTrap
} from '../../hooks';
import { drawerTokens as tokens } from './Drawer.tokens';
import { focusVisible } from '../../helpers/styling/focusVisible';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Paper } from '../../helpers/Paper';

type ContainerProps = {
  placement: Placement;
  isOpen: boolean;
};

const Container = styled(Paper)<ContainerProps>`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  min-width: 200px;
  z-index: 50;
  ${({ placement, isOpen }) =>
    placement === 'left'
      ? css`
          left: 0;
          transform: ${isOpen ? 'translate(0px)' : 'translateX(-100%)'};
        `
      : placement === 'right'
      ? css`
          right: 0;
          transform: ${isOpen ? 'translate(0px)' : 'translateX(100%)'};
        `
      : ''}
  transition: 0.2s;
  ${tokens.container.base}
  &:focus-visible {
    ${focusVisible}
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${tokens.contentContainer.base}
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

type Placement = 'left' | 'right';

export type DrawerProps = {
  isOpen?: boolean;
  withBackdrop?: boolean;
  placement?: Placement;
  onClose: () => void;
  parentElement?: HTMLElement;
  header?: string | ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      onClose,
      header,
      isOpen = false,
      placement = 'right',
      parentElement = document.body,
      ...rest
    },
    ref
  ) => {
    const drawerRef = useFocusTrap<HTMLDivElement>(isOpen);

    const combinedRef = useCombinedRef(ref, drawerRef);
    const handleClose = () => isOpen && onClose && onClose();

    useOnKeyDown(['Esc', 'Escape'], () => handleClose());

    useOnClickOutside(drawerRef.current, () => handleClose());

    const hasTransitionedIn = useMountTransition(isOpen, 200);

    const containerProps = {
      placement,
      ref: combinedRef,
      isOpen: hasTransitionedIn && isOpen,
      tabIndex: -1,
      ...rest
    };

    const hasHeader = !!header;

    return isOpen || hasTransitionedIn
      ? createPortal(
          <Container {...containerProps}>
            <ContentContainer>
              {!hasHeader ? null : typeof header === 'string' ? (
                <Typography typographyType="headingSans03">{header}</Typography>
              ) : (
                header
              )}
              {children}
            </ContentContainer>
            <StyledButton
              size="small"
              purpose="secondary"
              appearance="borderless"
              onClick={onClose}
              aria-label="Lukk"
              Icon={CloseOutlinedIcon}
            />
          </Container>,
          parentElement
        )
      : null;
  }
);
