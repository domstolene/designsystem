import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef
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
const TitleContainer = styled.div``;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export type ModalProps = {
  onClose?: () => void;
  isOpen?: boolean;
  parentElement?: HTMLElement;
  title?: string | ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen = false,
      parentElement = document.body,
      children,
      title,
      onClose,
      ...rest
    },
    ref
  ) => {
    const titleId = 'id';

    const modalRef = useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRef(ref, modalRef);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      console.log('isOpen', isOpen);
      if (isOpen) {
        setTimeout(() => modalRef.current?.focus(), 0);
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
      'aria-labelledby': titleId,
      ...rest
    };

    const titleContainerProps = {
      id: titleId
    };

    return createPortal(
      <Backdrop {...backdropProps}>
        <Container {...containerProps}>
          <ContentContainer>
            {title && (
              <TitleContainer {...titleContainerProps}>
                {typeof title === 'string' ? (
                  <Typography typographyType="headingSans03">
                    {title}
                  </Typography>
                ) : (
                  title
                )}
              </TitleContainer>
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
