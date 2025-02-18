import {
  type ReactNode,
  type RefObject,
  forwardRef,
  useContext,
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
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { CloseIcon } from '../Icon/icons';
import { ThemeContext } from '../ThemeProvider';
import { Heading } from '../Typography';

export type ModalProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Spesifiserer om `<Modal>` skal åpnes. */
    isOpen?: boolean;
    /**Funksjon kjørt ved lukking; gjør at `<Modal>` blir lukkbar via: Esc-tast, klikk utenfor, klikk på dedikert lukkeknapp. */
    onClose?: () => void;
    /**Fordeler DOM node for `<Modal>` via React portal. Brukes med f.eks `document.getElementById("id")` eller `ref` (skaper ikke ny DOM node).
     * @default themeProviderRef
     */
    parentElement?: HTMLElement;
    /**Header i `<Modal>`. Returnerer default `<Heading>` ved `string`. Setter også `aria-labelledby`. */
    header?: string | ReactNode;
    /**Ref som brukes til returnering av fokus. */
    triggerRef?: RefObject<HTMLElement | null>;
    /**Ref som skal motta fokus når `<Modal>` åpnes. Hvis utelatt blir `<Modal>` fokusert. */
    initialFocusRef?: RefObject<HTMLElement | null>;
    /** Gjør at innholdet kan scrolles */
    scrollable?: boolean;
  }
>;

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    isOpen = false,
    parentElement,
    children,
    header,
    onClose,
    id,
    triggerRef,
    initialFocusRef,
    scrollable,
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
      triggerRef?.current?.focus();
      onClose();
    }
  };

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Modal must be used within a ThemeProvider');
  }

  const portalTarget = parentElement ?? themeContext?.el;

  useEffect(() => {
    if (isOpen) {
      handleElementWithBackdropMount(document.body);
    } else {
      handleElementWithBackdropUnmount(document.body);
    }

    return () => handleElementWithBackdropUnmount(document.body);
  }, [isOpen]);

  const backdropRef = useRef<HTMLDivElement>(null);
  const onBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === backdropRef.current && isOpen) {
      handleClose();
    }
  };

  useOnKeyDown(['Escape', 'Esc'], () => handleClose());

  const hasTransitionedIn = useMountTransition(isOpen, 200);

  return (isOpen || hasTransitionedIn) && portalTarget
    ? createPortal(
        <Backdrop
          zIndex="modal"
          isMounted={isOpen && hasTransitionedIn}
          ref={backdropRef}
          onClick={onBackdropClick}
        >
          <Paper
            {...getBaseHTMLProps(
              id,
              cn(
                className,
                styles.container,
                focusable,
                scrollable && styles['container-scrollable'],
                utilStyles.scrollbar,
              ),
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
            {onClose && (
              <Button
                size="small"
                purpose="tertiary"
                icon={CloseIcon}
                onClick={handleClose}
                aria-label="Lukk dialog"
                className={styles['close-button']}
                htmlProps={{ tabIndex: -1 }}
              />
            )}

            <div className={styles.content}>
              {!!header && (
                <div id={headerId} className={styles.header}>
                  {typeof header === 'string' ? (
                    <Heading level={2} typographyType="headingLarge">
                      {header}
                    </Heading>
                  ) : (
                    header
                  )}
                </div>
              )}
              {children}
            </div>
          </Paper>
        </Backdrop>,
        portalTarget,
      )
    : null;
});

Modal.displayName = 'Modal';
