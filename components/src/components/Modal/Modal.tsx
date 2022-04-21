import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { modalTokens as tokens } from './Modal.tokens';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { useFocusTrap } from '../../hooks';
import { useCombinedRef, useOnClickOutside, useOnKeyDown } from '../../hooks';
import { createPortal } from 'react-dom';
import { Typography } from '../Typography';
import {
  Backdrop,
  handleElementWithBackdropMount,
  handleElementWithBackdropUnmount
} from '../../helpers/Backdrop';
import { useMountTransition } from '../../hooks/useMountTransition';
import { typographyTokens } from '../Typography/Typography.tokens';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  box-sizing: border-box;
  margin: 0;
  min-width: 200px;
  &::selection,
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${tokens.base}
  :focus-visible {
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

export type ModalProps = {
  onClose?: () => void;
  isOpen?: boolean;
  parentElement?: HTMLElement;
  header?: string | ReactNode;
  triggerRef?: RefObject<HTMLElement>;
} & HTMLAttributes<HTMLDivElement>;

let nextUniqueId = 0;

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen = false,
      parentElement = document.body,
      children,
      header,
      onClose,
      id,
      triggerRef,
      ...rest
    },
    ref
  ) => {
    const uniqueId = nextUniqueId++;
    const [modalId] = useState<string>(id ?? `modal-${uniqueId}`);
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
      isOpen: hasTransitionedIn && isOpen
    };

    const containerProps = {
      ref: combinedRef,
      role: 'dialog',
      'aria-modal': true,
      'aria-hidden': !isOpen,
      tabIndex: -1,
      'aria-labelledby': headerId,
      id: modalId,
      ...rest
    };

    const headerContainerProps = {
      id: headerId
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
                  Icon={CloseOutlinedIcon}
                  onClick={handleClose}
                  aria-label="Lukk dialog"
                />
              )}
            </Container>
          </Backdrop>,
          parentElement
        )
      : null;
  }
);
