import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useState
} from 'react';
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
import scrollbarStyling from '../../helpers/scrollbarStyling';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Paper } from '../../helpers/Paper';
import { WidthProperty, MinWidthProperty, MaxWidthProperty } from 'csstype';

type ContainerProps = {
  placement: DrawerPlacement;
  isOpen: boolean;
  widthProps?: WidthProps;
};

const Container = styled(Paper)<ContainerProps>`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  min-width: 300px;
  max-width: 400px;
  ${({ widthProps }) =>
    widthProps &&
    css`
      ${widthProps}
    `}
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
  overflow-x: auto;
  ${scrollbarStyling}
  ${tokens.contentContainer.base}
`;

const HeaderContainer = styled.div``;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export type DrawerPlacement = 'left' | 'right';
export type WidthProps = {
  minWidth?: MinWidthProperty<string>;
  maxWidth?: MaxWidthProperty<string>;
  width?: WidthProperty<string>;
};

export type DrawerProps = {
  isOpen?: boolean;
  placement?: DrawerPlacement;
  onClose: () => void;
  parentElement?: HTMLElement;
  header?: string | ReactNode;
  widthProps?: WidthProps;
  triggerRef?: RefObject<HTMLElement>;
} & HTMLAttributes<HTMLDivElement>;

let nextUniqueId = 0;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      onClose,
      header,
      isOpen = false,
      placement = 'right',
      parentElement = document.body,
      triggerRef,
      id,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(id ?? `drawer-${nextUniqueId++}`);
    const hasHeader = !!header;
    const headerId = hasHeader ? `${uniqueId}-header` : undefined;

    const drawerRef = useFocusTrap<HTMLDivElement>(isOpen);
    const combinedRef = useCombinedRef(ref, drawerRef);

    useOnKeyDown(['Esc', 'Escape'], () => {
      if (isOpen) {
        triggerRef && triggerRef.current?.focus();
        onClose();
      }
    });

    const elements: (HTMLElement | null)[] = [drawerRef.current as HTMLElement];
    if (triggerRef) elements.push(triggerRef.current);

    useOnClickOutside(elements, () => isOpen && onClose());

    const hasTransitionedIn = useMountTransition(isOpen, 200);

    const containerProps = {
      placement,
      ref: combinedRef,
      isOpen: hasTransitionedIn && isOpen,
      tabIndex: -1,
      role: 'dialog',
      id: uniqueId,
      'aria-labelledby': headerId,
      ...rest
    };

    const headerContainerProps = {
      id: headerId
    };

    return isOpen || hasTransitionedIn
      ? createPortal(
          <Container {...containerProps}>
            <ContentContainer>
              {hasHeader && (
                <HeaderContainer {...headerContainerProps}>
                  {typeof header === 'string' ? (
                    <Typography typographyType="headingSans03">
                      {header}
                    </Typography>
                  ) : (
                    header
                  )}
                </HeaderContainer>
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
