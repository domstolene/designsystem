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
  onCloseButton?: () => void;
  onTriggerClick?: () => void;
  isOpen?: boolean;
  popoverId?: string;
  children: ReactNode;
};

let nextUniqueId = 0;

export const PopoverGroup = ({
  isOpen = false,
  onCloseButton,
  onTriggerClick,
  children,
  popoverId
}: PopoverGroupProps) => {
  const [open, setOpen] = useState(isOpen);
  const uniqueId = nextUniqueId++;
  const [uniquePopoverId] = useState<string>(
    popoverId ?? `popover-${uniqueId}`
  );
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleOnCloseButton = () => {
    setOpen(false);
    onCloseButton && onCloseButton();
  };

  const handleOnTriggerClick = () => {
    setOpen(!open);
    onTriggerClick && onTriggerClick();
  };

  useOnKeyDown(['Esc', 'Escape'], () => {
    setOpen(false);
  });

  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

  useOnClickOutside([popoverRef.current, buttonRef.current], () => {
    if (open) setOpen(false);
  });

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement(child) &&
      (childIndex === 0
        ? cloneElement(child as ReactElement, {
            'aria-haspopup': true,
            'aria-controls': uniquePopoverId,
            onClick: handleOnTriggerClick,
            ref: buttonRef
          })
        : cloneElement(child as ReactElement, {
            isOpen: open,
            id: uniquePopoverId,
            onCloseButton: handleOnCloseButton,
            anchorElement: buttonRef.current,
            ref: popoverRef
          }))
    );
  });
  return <>{Children}</>;
};
