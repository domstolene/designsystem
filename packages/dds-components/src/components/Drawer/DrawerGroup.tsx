import {
  type Dispatch,
  Children as ReactChildren,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
  cloneElement,
  isValidElement,
  useId,
  useRef,
  useState,
} from 'react';

import { DrawerContext } from './Drawer.context';
import { useOnKeyDown } from '../../hooks';

export interface DrawerGroupProps {
  /**Barna til komponenten: trigger-element og `<Drawer>`. */
  children: ReactNode;
  /**
   * Om `<Drawer>` er åpen ved første render.
   */
  isInitiallyOpen?: boolean;
  /**
   * Implementerer kontrollert tilstand: om `<Drawer>` er åpen.
   */
  isOpen?: boolean;
  /**
   * Implementerer kontrollert tilstand: funksjon som kontrollerer `isOpen`.
   */
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  /**`id` til `<Drawer>`. */
  drawerId?: string;
  /**Ekstra logikk som kjøres når `<Drawer>` åpnes. */
  onOpen?: () => void;
  /**Ekstra logikk som kjøres når `<Drawer>` lukkes. */
  onClose?: () => void;
}

export const DrawerGroup = ({
  children,
  isInitiallyOpen,
  isOpen: propIsOpen,
  setIsOpen: propSetIsOpen,
  drawerId,
  onOpen,
  onClose,
}: DrawerGroupProps) => {
  const [internalIsOpen, internalSetIsOpen] = useState(isInitiallyOpen);
  const [isOpen, setIsOpen] = [
    propIsOpen ?? internalIsOpen,
    propSetIsOpen ?? internalSetIsOpen,
  ];

  const generatedId = useId();
  const uniqueDrawerId = drawerId ?? `${generatedId}-drawer`;

  const triggerRef = useRef<HTMLElement>(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleOpen = () => {
    open();
    onOpen?.();
  };

  const handleClose = () => {
    close();
    onClose?.();
  };

  useOnKeyDown(['Esc', 'Escape'], () => {
    if (isOpen) {
      triggerRef?.current?.focus();
      handleClose();
    }
  });

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement(child) &&
      (childIndex === 0
        ? cloneElement(child as ReactElement, {
            'aria-haspopup': 'dialog',
            'aria-controls': uniqueDrawerId,
            'aria-expanded': isOpen,
            ref: triggerRef,
            onClick: handleOpen,
          })
        : child)
    );
  });
  return (
    <DrawerContext.Provider
      value={{
        drawerId: uniqueDrawerId,
        isOpen,
        onClose: handleClose,
        triggerEl: triggerRef.current,
      }}
    >
      {Children}
    </DrawerContext.Provider>
  );
};

DrawerGroup.displayName = 'DrawerGroup';
