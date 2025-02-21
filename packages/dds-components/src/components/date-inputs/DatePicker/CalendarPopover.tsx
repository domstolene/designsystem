import {
  type KeyboardEvent,
  type KeyboardEventHandler,
  type ReactElement,
  type ReactNode,
  type RefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

import {
  useCombinedRef,
  useFloatPosition,
  useMountTransition,
  useOnClickOutside,
  useOnKeyDown,
} from '../../../hooks';
import { cn } from '../../../utils';
import { Button } from '../../Button';
import {
  Backdrop,
  Paper,
  type ScreenSizeLiteral,
  handleElementWithBackdropMount,
  handleElementWithBackdropUnmount,
} from '../../helpers';
import { CloseIcon } from '../../Icon/icons';
import { ThemeContext } from '../../ThemeProvider';
import styles from '../common/DateInput.module.css';

/**------------------------------------------------------------------------
 * CalendarPopover
 *------------------------------------------------------------------------*/

interface CalendarPopoverContextValue {
  anchorRef: RefObject<HTMLDivElement> | null;
  closeButtonRef: RefObject<HTMLButtonElement> | null;
  isOpen: boolean;
  onClose: () => void;
  showWeekNumbers: boolean;
}

export const CalendarPopoverContext =
  createContext<CalendarPopoverContextValue>({
    anchorRef: null,
    closeButtonRef: null,
    isOpen: false,
    onClose: () => null,
    showWeekNumbers: true,
  });

interface CalendarPopoverProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  showWeekNumbers: boolean;
}

export const CalendarPopover = ({
  children,
  onClose,
  ...props
}: CalendarPopoverProps) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useOnKeyDown('Escape', onClose);
  return (
    <CalendarPopoverContext.Provider
      value={{ anchorRef, closeButtonRef, onClose, ...props }}
    >
      {children}
    </CalendarPopoverContext.Provider>
  );
};

/**------------------------------------------------------------------------
 * CalendarPopoverAnchor
 *------------------------------------------------------------------------*/

interface CalendarPopoverAnchorProps {
  children: ReactElement;
}

export const CalendarPopoverAnchor = ({
  children,
}: CalendarPopoverAnchorProps) => {
  const { anchorRef } = useContext(CalendarPopoverContext);
  return <div ref={anchorRef ?? undefined}>{children}</div>;
};

/**------------------------------------------------------------------------
 * CalendarPopoverContent
 *------------------------------------------------------------------------*/

interface CalendarPopoverContentProps {
  children: ReactNode;
  className?: string;
  smallScreenBreakpoint?: ScreenSizeLiteral;
}

export const CalendarPopoverContent = ({
  children,
  className,
  smallScreenBreakpoint,
}: CalendarPopoverContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { refs, styles: floatingStyles } = useFloatPosition(null, {
    placement: 'bottom-start',
  });

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('DatePicker must be used within a ThemeProvider');
  }

  const portalTarget = themeContext.el;
  const { isOpen, onClose, anchorRef, closeButtonRef } = useContext(
    CalendarPopoverContext,
  );
  const hasTransitionedIn = useMountTransition(isOpen, 500);
  const isMounted = isOpen && hasTransitionedIn;
  const combinedRef = useCombinedRef(refs.setFloating, ref);

  useOnClickOutside([ref.current, modalRef.current], onClose);

  useEffect(() => {
    refs.setReference(anchorRef?.current ?? null);
  }, []);

  const hasBreakpoint = !!smallScreenBreakpoint;

  useEffect(() => {
    if (hasBreakpoint && modalRef.current?.checkVisibility()) {
      if (isOpen) {
        handleElementWithBackdropMount(document.body);
      } else {
        handleElementWithBackdropUnmount(document.body);
      }

      return () => handleElementWithBackdropUnmount(document.body);
    }
  }, [isOpen, hasBreakpoint]);

  const closeOnKeyboardBlurBack: KeyboardEventHandler<HTMLButtonElement> = (
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === 'Tab' && event.shiftKey === true) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {portalTarget &&
        hasBreakpoint &&
        createPortal(
          <div
            className={cn(
              styles.modal,
              !!smallScreenBreakpoint &&
                styles[`modal--small-screen-show-${smallScreenBreakpoint}`],
            )}
          >
            <Backdrop zIndex="modal" isMounted={isMounted}>
              <Paper
                ref={modalRef}
                className={cn(styles.popover, className)}
                elevation={2}
                border="default"
              >
                <div className={styles['modal-close-button-wrapper']}>
                  <Button
                    ref={closeButtonRef}
                    icon={CloseIcon}
                    size="small"
                    purpose="tertiary"
                    aria-label="Lukk"
                    onClick={onClose}
                    htmlProps={{ onKeyDown: closeOnKeyboardBlurBack }}
                  />
                </div>
                {children}
              </Paper>
            </Backdrop>
          </div>,
          portalTarget,
        )}
      <Paper
        ref={combinedRef}
        className={cn(
          styles.popover,
          !!smallScreenBreakpoint &&
            styles[`popover--large-screen-hide-${smallScreenBreakpoint}`],
          className,
        )}
        style={floatingStyles.floating}
        elevation={2}
        border="default"
      >
        {children}
      </Paper>
    </>
  );
};
