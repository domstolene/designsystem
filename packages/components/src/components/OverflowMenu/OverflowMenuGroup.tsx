import {
  useRef,
  useState,
  Children as ReactChildren,
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
  useId,
} from 'react';

export type OverflowMenuGroupProps = {
  /**Ekstra logikk som kjøres når `<OverflowMenu />` åpnes og lukkes. */
  onToggle?: () => void;
  /**Ekstra logikk som kjøres når `<OverflowMenu />` åpnes. */
  onOpen?: () => void;
  /**Ekstra logikk som kjøres når `<OverflowMenu />` lukkes. */
  onClose?: () => void;
  /**Barn, anchor-elementet som første og `<OverflowMenu />` som andre. */
  children: ReactNode;
  /**Custom id for `<OverflowMenu />`. */
  overflowMenuId?: string;
};

export const OverflowMenuGroup = ({
  children,
  onClose,
  onToggle,
  onOpen,
  overflowMenuId,
}: OverflowMenuGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const generatedId = useId();
  const uniqueOverflowMenuId = overflowMenuId ?? `${generatedId}-overflowMenu`;

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
            ref: buttonRef,
          })
        : cloneElement(child as ReactElement, {
            isOpen: isOpen,
            id: uniqueOverflowMenuId,
            onClose: handleClose,
            onToggle: handleToggle,
            anchorRef: buttonRef,
          }))
    );
  });

  return <>{Children}</>;
};
