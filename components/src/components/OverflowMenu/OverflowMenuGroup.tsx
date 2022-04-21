import {
  useRef,
  useState,
  Children as ReactChildren,
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement
} from 'react';

export type OverflowMenuGroupProps = {
  onToggle?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
  children: ReactNode;
  overflowMenuId?: string;
};

let nextUniqueId = 0;

export const OverflowMenuGroup = ({
  children,
  onClose,
  onToggle,
  onOpen,
  overflowMenuId
}: OverflowMenuGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const uniqueId = nextUniqueId++;
  const [uniqueOverflowMenuId] = useState<string>(
    overflowMenuId ?? `overflowMenu-${uniqueId}`
  );

  const handleClose = () => {
    onClose && onClose();
    close();
  };

  const handleToggle = () => {
    onOpen && !isOpen && onOpen();
    onClose && isOpen && onClose();
    onToggle && onToggle();
    toggle();
  };

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement(child) &&
      (childIndex === 0
        ? cloneElement(child as ReactElement, {
            'aria-haspopup': 'menu',
            'aria-controls': uniqueOverflowMenuId,
            'aria-expanded': isOpen,
            onClick: handleToggle,
            ref: buttonRef
          })
        : cloneElement(child as ReactElement, {
            isOpen: isOpen,
            id: uniqueOverflowMenuId,
            onClose: handleClose,
            anchorRef: buttonRef
          }))
    );
  });

  return <> {Children} </>;
};
