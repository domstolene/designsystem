import { forwardRef, ReactNode, RefObject, useEffect, useId } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { modalTokens as tokens } from './Modal.tokens';
import { useFocusTrap } from '../../hooks';
import { useCombinedRef, useOnClickOutside, useOnKeyDown } from '../../hooks';
import { createPortal } from 'react-dom';
import { Typography } from '../Typography';
import {
  Backdrop,
  handleElementWithBackdropMount,
  handleElementWithBackdropUnmount,
} from '../../helpers';
import { useMountTransition } from '../../hooks/useMountTransition';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { CloseIcon } from '../../icons/tsx';
import { selection } from '../../helpers/styling';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  box-sizing: border-box;
  margin: 0;
  min-width: 200px;
  &::selection,
  *::selection {
    ${selection}
  }
  ${tokens.base}
  :focus-visible, &.focus-visible {
    ${tokens.focus.base}
  }
`;
const ContentContainer = styled.div`
  display: grid;
  ${tokens.contentContainer.base}
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
    className,
    htmlProps,
    ...rest
  } = props;
  const generatedId = useId();
  const modalId = id ?? `${generatedId}-modal`;
  const headerId = `${modalId}-header`;

  const modalRef = useFocusTrap<HTMLDivElement>(isOpen);
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
  }, [isOpen]);

  useOnClickOutside(modalRef.current, () => handleClose());

  useOnKeyDown(['Escape', 'Esc'], () => handleClose());

  const hasTransitionedIn = useMountTransition(isOpen, 200);

  const backdropProps = {
    isOpen: hasTransitionedIn && isOpen,
  };

  const containerProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    ref: combinedRef,
    role: 'dialog',
    'aria-modal': true,
    'aria-hidden': !isOpen,
    tabIndex: -1,
    'aria-labelledby': headerId,
    id: modalId,
  };

  const headerContainerProps = {
    id: headerId,
  };

  return isOpen || hasTransitionedIn
    ? createPortal(
        <Backdrop {...backdropProps}>
          <Container {...containerProps}>
            <ContentContainer>
              {header && (
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
        parentElement
      )
    : null;
});
