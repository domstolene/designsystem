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
import { focusVisible } from '../../helpers/styling';
import { scrollbarStyling } from '../../helpers/styling';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Paper } from '../../helpers';
import { Property } from 'csstype';

type ContainerProps = {
  placement: DrawerPlacement;
  isOpen: boolean;
  widthProps?: WidthProps;
  size: DrawerSize;
};

const Container = styled(Paper)<ContainerProps>`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  min-width: 300px;
  ${({ size }) => css`
    ${tokens.container.size[size].base}
  `}
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
  transition: 0.5s;
  ${tokens.container.base}
  &:focus-visible, &.focus-visible {
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

export type DrawerSize = 'small' | 'large';
export type DrawerPlacement = 'left' | 'right';
export type WidthProps = {
  minWidth?: Property.MinWidth<string>;
  maxWidth?: Property.MaxWidth<string>;
  width?: Property.Width<string>;
};

export type DrawerProps = {
  /**Størrelsen på `<Drawer />`. */
  size?: DrawerSize;
  /** Plasseringen til `<Drawer />`. */
  placement?: DrawerPlacement;
  /**Header for `<Drawer />`. Har default styling hvis verdien er en string. */
  header?: string | ReactNode;
  /**Spesifiserer om `<Drawer />` skal legges vises. **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk. */
  isOpen?: boolean;
  /**Funksjon kjørt ved lukking. **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk. */
  onClose?: () => void;
  /**Spesifiserer hvilken DOM node `<Drawer />` skal ha som forelder via React portal. Brukes med f.eks `document.getElementById("id")` (skaper ikke ny DOM node). */
  parentElement?: HTMLElement;
  /**Custom props for breddehåndtering ved behov. */
  widthProps?: WidthProps;
  /**Ref til elementet som åpner `<Drawer />`.  **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk. */
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
      size = 'small',
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
        onClose && onClose();
      }
    });

    const elements: (HTMLElement | null)[] = [drawerRef.current as HTMLElement];
    if (triggerRef) elements.push(triggerRef.current);

    useOnClickOutside(elements, () => isOpen && onClose && onClose());

    const hasTransitionedIn = useMountTransition(isOpen, 500);

    const containerProps = {
      placement,
      ref: combinedRef,
      isOpen: hasTransitionedIn && isOpen,
      tabIndex: -1,
      role: 'dialog',
      id: uniqueId,
      'aria-labelledby': headerId,
      size,
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
              data-testid="drawer-close-btn"
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
