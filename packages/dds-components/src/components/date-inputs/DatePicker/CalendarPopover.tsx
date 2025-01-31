import {
  type ReactElement,
  type ReactNode,
  type RefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react';

import {
  useCombinedRef,
  useFloatPosition,
  useOnClickOutside,
  useOnKeyDown,
} from '../../../hooks';
import styles from '../common/DateInput.module.css';

/**------------------------------------------------------------------------
 * CalendarPopover
 *------------------------------------------------------------------------*/

interface CalendarPopoverContextValue {
  anchorRef: RefObject<HTMLDivElement> | null;
  isOpen: boolean;
  onClose: () => void;
  showWeekNumbers: boolean;
}

export const CalendarPopoverContext =
  createContext<CalendarPopoverContextValue>({
    anchorRef: null,
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
  useOnKeyDown('Escape', onClose);
  return (
    <CalendarPopoverContext.Provider value={{ anchorRef, onClose, ...props }}>
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
}

export const CalendarPopoverContent = ({
  children,
}: CalendarPopoverContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { refs, styles: floatingStyles } = useFloatPosition(null, {
    placement: 'bottom-start',
  });
  const { isOpen, onClose, anchorRef } = useContext(CalendarPopoverContext);
  const combinedRef = useCombinedRef(refs.setFloating, ref);

  useOnClickOutside(ref.current, onClose);

  useEffect(() => {
    refs.setReference(anchorRef?.current ?? null);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      ref={combinedRef}
      className={styles.popover}
      style={floatingStyles.floating}
    >
      {children}
    </div>
  );
};
