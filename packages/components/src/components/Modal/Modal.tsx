import {
  type ReactNode,
  type RefObject,
  forwardRef,
  useEffect,
  useId,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';
import {
  useCombinedRef,
  useFocusTrap,
  useMountTransition,
  useOnElementClick,
  useOnKeyDown,
} from '../../hooks';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import {
  Backdrop,
  Paper,
  handleElementWithBackdropMount,
  handleElementWithBackdropUnmount,
} from '../helpers';
import { focusable } from '../helpers/styling/focus.module.css';
import { CloseIcon } from '../Icon/icons';
import { Heading } from '../Typography';

export type ModalProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Spesifiserer om modal skal vises. */
    isOpen?: boolean;
    /**Funksjon kjørt ved lukking; Settes hvis modal skal være lukkbar. Legger en lukkeknapp i hjørnet og kjøres ved Esc-trykk, lukkeknappklikk og museklikk utenfor. */
    onClose?: () => void;
    /**Spesifiserer hvilken DOM node `<Modal />` skal ha som forelder via React portal. Brukes med f.eks `document.getElementById("id")` (skaper ikke ny DOM node).
     * @default document.body
     */
    parentElement?: HTMLElement;
    /**Tittel/header i modal. Setter også `aria-labelledby`. */
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

  const backdropRef = useRef<HTMLDivElement>(null);
  useOnElementClick(backdropRef.current, () => {
    handleClose();
  });

  useOnKeyDown(['Escape', 'Esc'], () => handleClose());

  const hasTransitionedIn = useMountTransition(isOpen, 200);

  return isOpen || hasTransitionedIn
    ? createPortal(
        <Backdrop isMounted={isOpen && hasTransitionedIn} ref={backdropRef}>
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
              {!!header && (
                <div id={headerId} className={styles.header}>
                  {typeof header === 'string' ? (
                    <Heading level={2} typographyType="headingSans03">
                      {header}
                    </Heading>
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
        </Backdrop>,
        parentElement,
      )
    : null;
});

Modal.displayName = 'Modal';
