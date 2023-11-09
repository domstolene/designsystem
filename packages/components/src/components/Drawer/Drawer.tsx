import { forwardRef, ReactNode, RefObject, useId } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { Typography } from '@norges-domstoler/dds-typography';
import {
  useCombinedRef,
  useMountTransition,
  useOnClickOutside,
  useOnKeyDown,
  useFocusTrap,
  Paper,
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { Property } from 'csstype';
import { CloseIcon } from '@norges-domstoler/dds-icons';

import { drawerTokens as tokens } from './Drawer.tokens';
import { ScrollableContainer } from '../ScrollableContainer';
import { focusVisible } from '@norges-domstoler/dds-form';

const { container, contentContainer } = tokens;

const getMaxWidth = (size: DrawerSize): Property.MaxWidth => {
  if (size === 'large') return '800px';
  else if (size === 'medium') return '600px';
  else return '400px';
};

interface ContainerProps {
  placement: DrawerPlacement;
  isOpen: boolean;
  widthProps?: WidthProps;
  size: DrawerSize;
}

const Container = styled(Paper)<ContainerProps>`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  min-width: 300px;
  z-index: 100;
  padding: ${container.padding};

  ${({ size }) => css`
    max-width: ${getMaxWidth(size)};
  `}

  ${({ widthProps }) =>
    widthProps &&
    css`
      min-width: ${widthProps.minWidth};
      max-width: ${widthProps.maxWidth};
      width: ${widthProps.width};
    `}

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

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.5s;
  }

  &:focus-visible,
  &.focus-visible {
    ${focusVisible}
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${contentContainer.gap};
  padding: ${contentContainer.padding};
`;

const HeaderContainer = styled.div``;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export type DrawerSize = 'small' | 'medium' | 'large';
export type DrawerPlacement = 'left' | 'right';
export interface WidthProps {
  minWidth?: Property.MinWidth<string>;
  maxWidth?: Property.MaxWidth<string>;
  width?: Property.Width<string>;
}

export type DrawerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
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
  }
>;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    children,
    onClose,
    header,
    isOpen = false,
    placement = 'right',
    parentElement = document.body,
    size = 'small',
    triggerRef,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-drawer`;
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
    ...getBaseHTMLProps(uniqueId, className, htmlProps, rest),
    placement,
    ref: combinedRef,
    isOpen: hasTransitionedIn && isOpen,
    tabIndex: -1,
    role: 'dialog',
    'aria-labelledby': headerId,
    size,
  };

  const headerContainerProps = {
    id: headerId,
  };

  return isOpen || hasTransitionedIn
    ? createPortal(
        <Container {...containerProps} elevation={4}>
          <ScrollableContainer>
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
          </ScrollableContainer>
          <StyledButton
            data-testid="drawer-close-btn"
            size="small"
            purpose="secondary"
            appearance="borderless"
            onClick={onClose}
            aria-label="Lukk"
            icon={CloseIcon}
          />
        </Container>,
        parentElement,
      )
    : null;
});

Drawer.displayName = 'Drawer';
