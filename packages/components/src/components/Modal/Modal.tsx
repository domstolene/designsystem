import { forwardRef, ReactNode, RefObject, useEffect, useId } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { modalTokens as tokens } from './Modal.tokens';
import { createPortal } from 'react-dom';

import {
  handleElementWithBackdropMount,
  handleElementWithBackdropUnmount,
  Backdrop,
} from './Backdrop';
import {
  useFocusTrap,
  useCombinedRef,
  useOnClickOutside,
  useOnKeyDown,
  useMountTransition,
} from '../../hooks';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { focusVisible, Paper, selection } from '../helpers';
import { CloseIcon } from '../Icon/icons';
import { Typography } from '../Typography';

const { container, contentContainer } = tokens;

const Container = styled(Paper)`
  display: flex;
  flex-direction: column-reverse;
  min-width: 200px;
  padding: ${container.padding};
  &::selection,
  *::selection {
    ${selection}
  }
  :focus-visible,
  &.focus-visible {
    ${focusVisible}
  }
`;
const ContentContainer = styled.div`
  display: grid;
  padding-right: ${contentContainer.paddingRight};
  gap: ${contentContainer.gap};
`;
const HeaderContainer = styled.div``;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export type ModalProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Spesifiserer om modal skal vises. */
    isOpen?: boolean;
    /**Funksjon kjørt ved lukking; Settes hvis modal skal være lukkbar. Legger en lukkeknapp i hjørnet og kjøres ved Esc-trykk, lukkeknappklikk og museklikk utenfor. */
    onClose?: () => void;
    /**Spesifiserer hvilken DOM node `<Modal />` skal ha som forelder via React portal. Brukes med f.eks `document.getElementById("id")` (skaper ikke ny DOM node). */
    parentElement?: HTMLElement;
    /**Tittel/header i modal. Setter `aria-labelledby`. */
    header?: string | ReactNode;
    /**Ref som brukes til returnering av fokus. */
    triggerRef?: RefObject<HTMLElement>;
    /**Ref som skal motta fokus når Modal åpnes. Hvis utelatt blir Modal fokusert. */
    initialFocusRef?: RefObject<HTMLElement>;
  }
>;

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    isOpen = false,
    parentElement = document.body,
    children,
    header,
    onClose,
    id,
    triggerRef,
    initialFocusRef,
    className,
    htmlProps,
    ...rest
  } = props;
  const generatedId = useId();
  const modalId = id ?? `${generatedId}-modal`;
  const headerId = `${modalId}-header`;

  const modalRef = useFocusTrap<HTMLDivElement>(isOpen, initialFocusRef);
  const combinedRef = useCombinedRef(ref, modalRef);
  const handleClose = () => {
    if (onClose && isOpen) {
      triggerRef && triggerRef.current?.focus();
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      handleElementWithBackdropMount(document.body);
    } else {
      handleElementWithBackdropUnmount(document.body);
    }

    return () => handleElementWithBackdropUnmount(document.body);
  }, [isOpen]);

  useOnClickOutside(modalRef.current, () => handleClose());

  useOnKeyDown(['Escape', 'Esc'], () => handleClose());

  const hasTransitionedIn = useMountTransition(isOpen, 200);

  return isOpen || hasTransitionedIn
    ? createPortal(
        <Backdrop isOpen={hasTransitionedIn && isOpen}>
          <Container
            {...getBaseHTMLProps(id, className, htmlProps, rest)}
            ref={combinedRef}
            role="dialog"
            aria-modal
            aria-hidden={!isOpen}
            tabIndex={-1}
            aria-labelledby={headerId}
            id={modalId}
            elevation={4}
          >
            <ContentContainer>
              {header && (
                <HeaderContainer id={headerId}>
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
            {onClose && (
              <StyledButton
                size="small"
                appearance="borderless"
                purpose="secondary"
                icon={CloseIcon}
                onClick={handleClose}
                aria-label="Lukk dialog"
              />
            )}
          </Container>
        </Backdrop>,
        parentElement,
      )
    : null;
});

Modal.displayName = 'Modal';
