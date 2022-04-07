import { forwardRef, HTMLAttributes, RefObject, useRef } from 'react';
import styled from 'styled-components';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import { useOnClickOutside, useOnKeyDown } from '../../hooks';
import { overflowMenuTokens as tokens } from './OverflowMenu.tokens';

type ContextMenuWrapperProps = { isOpen?: boolean };

export const Container = styled.div<ContextMenuWrapperProps>`
  box-sizing: border-box;
  position: absolute;
  z-index: 3;
  top: 100%;
  right: 0;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  max-height: calc(100vh - 110px);
  transition: visibility 0.4s, opacity 0.2s;
  visibility: ${({ isOpen }) => (!isOpen ? 'hidden' : 'visible')};
  opacity: ${({ isOpen }) => (!isOpen ? 0 : 1)};
  ${tokens.wrapper.base}
  ${scrollbarStyling}
`;

export const ContextMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

type OverflowMenuProps = {
  isOpen?: boolean;
  triggerRef: RefObject<HTMLButtonElement>;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const OverflowMenu = forwardRef<HTMLDivElement, OverflowMenuProps>(
  ({ triggerRef, onClose, children, isOpen, ...rest }, ref) => {
    const contextMenuRef = useRef<HTMLDivElement>(null);

    useOnClickOutside([contextMenuRef.current, triggerRef.current], () => {
      onClose();
    });

    useOnKeyDown(['Esc', 'Escape'], () => {
      if (isOpen) {
        onClose();
        triggerRef.current?.focus();
      }
    });

    useOnKeyDown(['Tab'], () => {
      if (isOpen) {
        onClose();
      }
    });

    const containerProps = {
      isOpen,
      ...rest,
      ref
    };

    return <Container {...containerProps}>{children}</Container>;
  }
);
