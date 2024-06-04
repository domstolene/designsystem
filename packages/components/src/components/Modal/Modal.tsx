import {
  type ReactNode,
  type RefObject,
  forwardRef,
  useEffect,
  useId,
} from 'react';
import { createPortal } from 'react-dom';

import {
  handleElementWithBackdropMount,
  handleElementWithBackdropUnmount,
} from './Backdrop';
import styles from './Modal.module.css';
import {
  useCombinedRef,
  useFocusTrap,
  useMountTransition,
  useOnClickOutside,
  useOnKeyDown,
} from '../../hooks';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { Paper } from '../helpers';
import { focusable } from '../helpers/styling/focus.module.css';
import { CloseIcon } from '../Icon/icons';
import { Typography } from '../Typography';

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
        <div
          className={cn(
            styles.backdrop,
            hasTransitionedIn && isOpen
              ? styles['backdrop--visible']
              : styles['backdrop--hidden'],
          )}
        >
          <Paper
            {...getBaseHTMLProps(
              id,
              cn(className, styles.container, focusable),
              htmlProps,
              rest,
            )}
            ref={combinedRef}
            role="dialog"
            aria-modal
            aria-hidden={!isOpen}
            tabIndex={-1}
            aria-labelledby={headerId}
            id={modalId}
            elevation={4}
          >
            <div className={styles.content}>
              {header && (
                <div id={headerId} className={styles.header}>
                  {typeof header === 'string' ? (
                    <Typography typographyType="headingSans03">
                      {header}
                    </Typography>
                  ) : (
                    header
                  )}
                </div>
              )}
              {children}
            </div>
            {onClose && (
              <Button
                size="small"
                purpose="tertiary"
                icon={CloseIcon}
                onClick={handleClose}
                aria-label="Lukk dialog"
                className={styles['close-button']}
              />
            )}
          </Paper>
        </div>,
        parentElement,
      )
    : null;
});

Modal.displayName = 'Modal';
