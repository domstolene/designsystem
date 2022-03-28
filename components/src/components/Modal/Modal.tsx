import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { modalTokens as tokens } from './Modal.tokens';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { trapFocus } from '../../utils';
import { useCombinedRef, useOnClickOutside, useOnKeyDown } from '../../hooks';
import { visibilityTransition } from '../../helpers/styling';
import { createPortal } from 'react-dom';
import { Typography } from '../Typography';

type BackdropProps = { isOpen: boolean };

const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isOpen }) =>
    isOpen ? 'rgb(0 0 0 / 30%)' : 'transparent'};
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  ${({ isOpen }) => visibilityTransition(isOpen)}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  box-sizing: border-box;
  margin: 0;
  min-width: 200px;
  ${tokens.base}
  :focus {
    /* outline: none; */
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
      ...rest
    },
    ref
  ) => {
    const uniqueId = nextUniqueId++;
    const [modalId] = useState<string>(id ?? `modal-${uniqueId}`);
    const headerId = `${modalId}-header`;

    const modalRef = useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRef(ref, modalRef);

    useEffect(() => {
      if (isOpen) {
        modalRef.current?.focus();
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }, [isOpen]);

    useOnClickOutside(modalRef.current, () => onClose && isOpen && onClose());

    useOnKeyDown(['Escape', 'Esc'], () => {
      onClose && isOpen && onClose();
    });

    trapFocus(modalRef);

    const backdropProps = {
      isOpen
    };

    const containerProps = {
      ref: combinedRef,
      role: 'dialog',
      'aria-modal': true,
      'aria-hidden': !isOpen,
      tabIndex: 0,
      'aria-labelledby': headerId,
      id: modalId,
      ...rest
    };

    const headerContainerProps = {
      id: headerId
    };

    return createPortal(
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
              onClick={onClose}
              aria-label="Lukk dialog"
            />
          )}
        </Container>
      </Backdrop>,
      parentElement
    );
  }
);
