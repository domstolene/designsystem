import {
  type ReactElement,
  type ReactNode,
  type RefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';

import { calendarTokens } from './Calendar/Calendar.tokens';
import {
  useCombinedRef,
  useFloatPosition,
  useOnClickOutside,
  useOnKeyDown,
} from '../../../hooks';

const { popover: popoverTokens } = calendarTokens;

/**------------------------------------------------------------------------
 * CalendarPopover
 *------------------------------------------------------------------------*/

interface CalendarPopoverContextValue {
  anchorRef: RefObject<HTMLDivElement> | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarPopoverContext =
  createContext<CalendarPopoverContextValue>({
    anchorRef: null,
    isOpen: false,
    onClose: () => null,
  });

interface CalendarPopoverProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarPopover = ({
  children,
  isOpen,
  onClose,
}: CalendarPopoverProps) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  useOnKeyDown('Escape', onClose);
  return (
    <CalendarPopoverContext.Provider value={{ anchorRef, isOpen, onClose }}>
      {children}
    </CalendarPopoverContext.Provider>
  );
};

/**------------------------------------------------------------------------
 * CalendarPopoverAnchor
 *------------------------------------------------------------------------*/

const Anchor = styled.div``;

interface CalendarPopoverAnchorProps {
  children: ReactElement;
}

export const CalendarPopoverAnchor = ({
  children,
}: CalendarPopoverAnchorProps) => {
  const { anchorRef } = useContext(CalendarPopoverContext);
  return <Anchor ref={anchorRef ?? undefined}>{children}</Anchor>;
};

/**------------------------------------------------------------------------
 * CalendarPopoverContent
 *------------------------------------------------------------------------*/

const PopoverContentContainer = styled.div`
  background-color: ${popoverTokens.backgroundColor};
  border: ${popoverTokens.border};
  border-radius: ${popoverTokens.borderRadius};
  padding: ${popoverTokens.padding};
  z-index: ${popoverTokens.zIndex};
`;

interface CalendarPopoverContentProps {
  children: ReactNode;
}

export const CalendarPopoverContent = ({
  children,
}: CalendarPopoverContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { refs, styles } = useFloatPosition(null, {
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
    <PopoverContentContainer ref={combinedRef} style={styles.floating}>
      {children}
    </PopoverContentContainer>
  );
};
