import {
  ReactNode,
  Children as ReactChildren,
  isValidElement,
  cloneElement,
  ReactElement,
  useState,
  useRef
} from 'react';

type drawerGroupProps = {
  children: ReactNode;
  drawerId?: string;
  onOpen?: () => void;
  onClose?: () => void;
};

let nextUniqueId = 0;

export const DrawerGroup = ({
  children,
  drawerId,
  onOpen,
  onClose
}: drawerGroupProps) => {
  const uniqueId = nextUniqueId++;
  const [uniqueDrawerId] = useState<string>(drawerId ?? `drawer-${uniqueId}`);

  const buttonRef = useRef<HTMLElement>(null);

  const [closed, setClosed] = useState(true);
  const open = () => setClosed(false);
  const close = () => setClosed(true);

  const handleOpen = () => {
    open();
    onOpen && onOpen();
  };

  const handleClose = () => {
    close();
    onClose && onClose();
  };

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement(child) &&
      (childIndex === 0
        ? cloneElement(child as ReactElement, {
            'aria-haspopup': 'dialog',
            'aria-controls': uniqueDrawerId,
            'aria-expanded': !closed,
            ref: buttonRef,
            onClick: handleOpen
          })
        : cloneElement(child as ReactElement, {
            id: uniqueDrawerId,
            triggerRef: buttonRef,
            isOpen: !closed,
            onClose: handleClose
          }))
    );
  });
  return <> {Children} </>;
};
