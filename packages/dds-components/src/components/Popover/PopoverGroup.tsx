import {
  Children as ReactChildren,
  type ReactElement,
  type ReactNode,
  cloneElement,
  isValidElement,
  useId,
  useRef,
  useState,
} from 'react';

import { useOnKeyDown } from '../../hooks';

export interface PopoverGroupProps {
  /**Callback når det trykkes på lukkeknappen. */
  onCloseButtonClick?: () => void;
  /** Callback når det trykkes på anchor-elementet (trigger-elementet). */
  onTriggerClick?: () => void;
  /**Forteller `<Popover />` om den skal være åpen.  */
  isOpen?: boolean;
  /** `id` til `<Popover />.` */
  popoverId?: string;
  /** Barna til wrapperen: anchor-element som det første og `<Popover />` som det andre.  */
  children: ReactNode;
}

export const PopoverGroup = ({
  isOpen = false,
  onCloseButtonClick,
  onTriggerClick,
  children,
  popoverId,
}: PopoverGroupProps) => {
  const [open, setOpen] = useState(isOpen);

  const generatedId = useId();
  const uniquePopoverId = popoverId ?? `${generatedId}-popover`;

  const handleOnCloseButtonClick = () => {
    setOpen(false);
    onCloseButtonClick && onCloseButtonClick();
  };

  const handleOnTriggerClick = () => {
    setOpen(!open);
    onTriggerClick && onTriggerClick();
  };

  const buttonRef = useRef<HTMLElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useOnKeyDown(['Esc', 'Escape'], () => {
    if (open) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  });

  const handleClose = () => setOpen(false);

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement(child) &&
      (childIndex === 0
        ? cloneElement(child as ReactElement, {
            'aria-haspopup': 'dialog',
            'aria-controls': uniquePopoverId,
            'aria-expanded': open,
            onClick: handleOnTriggerClick,
            ref: buttonRef,
          })
        : cloneElement(child as ReactElement, {
            isOpen: open,
            'aria-hidden': !open,
            id: uniquePopoverId,
            onCloseButtonClick: handleOnCloseButtonClick,
            anchorElement: buttonRef.current,
            ref: popoverRef,
            onClose: handleClose,
          }))
    );
  });

  return <>{Children}</>;
};

PopoverGroup.displayName = 'PopoverGroup';
