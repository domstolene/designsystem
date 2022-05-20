import {
  useEffect,
  useState,
  ReactElement,
  Children as ReactChildren,
  cloneElement,
  isValidElement,
  useRef,
  ReactNode
} from 'react';
import { useOnKeyDown, useOnClickOutside } from '../../hooks';

export type PopoverGroupProps = {
  /**Callback når det trykkes på lukkeknappen. */
  onCloseButtonClick?: () => void;
  /** Callback når det trykkes på anchor-elementet (trigger-elementet). */
  onTriggerClick?: () => void;
  /**Forteller `<Popover />` om den skal være åpen.  */
  isOpen?: boolean;
  /** `id` til `<Popover />.` */
  popoverId?: string;
  /** Barna til wrapperen: anchor-element som det første og `<Popover />` so det adnre.  */
  children: ReactNode;
};

let nextUniqueId = 0;

export const PopoverGroup = ({
  isOpen = false,
  onCloseButtonClick,
  onTriggerClick,
  children,
  popoverId
}: PopoverGroupProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const uniqueId = nextUniqueId++;
  const [uniquePopoverId] = useState<string>(
    popoverId ?? `popover-${uniqueId}`
  );

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

  const handleBlur = () => {
    setTimeout(function () {
      buttonRef.current?.focus();
    }, 5);
    setOpen(false);
  };

  useOnKeyDown(['Esc', 'Escape'], () => {
    if (open) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  });

  useOnClickOutside([popoverRef.current, buttonRef.current], () => {
    if (open) setOpen(false);
  });

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement(child) &&
      (childIndex === 0
        ? cloneElement(child as ReactElement, {
            'aria-haspopup': 'dialog',
            'aria-controls': uniquePopoverId,
            'aria-expanded': open,
            onClick: handleOnTriggerClick,
            ref: buttonRef
          })
        : cloneElement(child as ReactElement, {
            isOpen: open,
            'aria-hidden': !open,
            id: uniquePopoverId,
            onCloseButtonClick: handleOnCloseButtonClick,
            onCloseButtonBlur: handleBlur,
            anchorElement: buttonRef.current,
            ref: popoverRef
          }))
    );
  });

  return <>{Children}</>;
};
