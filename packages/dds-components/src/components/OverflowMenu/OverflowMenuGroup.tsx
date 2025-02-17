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

import { OverflowMenuContextProvider } from './OverflowMenu.context';
import {
  type UseFloatPositionOptions,
  useCombinedRef,
  useFloatPosition,
  useOnClickOutside,
  useOnKeyDown,
} from '../../hooks';

export interface OverflowMenuGroupProps {
  /**Om `<OverflowMenu>` er åpen ved første render.
   * @default false
   */
  isInitiallyOpen?: boolean;
  /**Implementerer kontrollert tilstand: forteller `<OverflowMenu>` om den skal være åpen. */
  isOpen?: boolean;
  /**Implementerer kontrollert tilstand: funksjon for å kontrollere `isOpen`. */
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  /**Callback når `<OverflowMenu>` åpnes. */
  onOpen?: () => void;
  /**Callback når `<OverflowMenu>` lukkes. */
  onClose?: () => void;
  /**Barn, anchor-elementet som første og `<OverflowMenu>` som andre. */
  children: ReactNode;
  /**Custom id for `<OverflowMenu>`. */
  overflowMenuId?: string;
}

export const OverflowMenuGroup = ({
  children,
  onClose,
  onOpen,
  setIsOpen: propSetIsOpen,
  isOpen: propIsOpen,
  isInitiallyOpen = false,
  overflowMenuId,
}: OverflowMenuGroupProps) => {
  const [internalIsOpen, internalSetIsOpen] = useState(isInitiallyOpen);

  const [isOpen, setIsOpen] = [
    propIsOpen ?? internalIsOpen,
    propSetIsOpen ?? internalSetIsOpen,
  ];
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const generatedId = useId();
  const uniqueOverflowMenuId = overflowMenuId ?? `${generatedId}-overflowMenu`;

  const [floatOptions, setFloatOptions] = useState<UseFloatPositionOptions>();
  const { refs, styles: positionStyles } = useFloatPosition(null, floatOptions);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = refs.setReference;
  const combinedAnchorRef = useCombinedRef(buttonRef, anchorRef);
  const menuRef = useRef<HTMLDivElement>(null);
  const floatingRef = refs.setFloating;
  const combinedMenuRef = useCombinedRef(menuRef, floatingRef);

  const handleClose = () => {
    if (isOpen) {
      onClose && onClose();
      close();
    }
  };

  const handleToggle = () => {
    !isOpen && onOpen?.();
    isOpen && onClose?.();
    toggle();
  };

  useOnClickOutside([menuRef.current, buttonRef.current], () => {
    handleClose();
  });

  useOnKeyDown(['Esc', 'Escape'], () => {
    if (isOpen) {
      onClose && onClose();
      close();
      buttonRef.current?.focus();
    }
  });

  useOnKeyDown(['Tab'], () => {
    handleClose();
  });

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement(child) &&
      (childIndex === 0
        ? cloneElement(child as ReactElement, {
            'aria-haspopup': 'menu',
            'aria-controls': uniqueOverflowMenuId,
            'aria-expanded': isOpen,
            onClick: handleToggle,
            ref: combinedAnchorRef,
          })
        : child)
    );
  });

  return (
    <OverflowMenuContextProvider
      isOpen={isOpen}
      onClose={handleClose}
      menuRef={combinedMenuRef}
      setFloatOptions={setFloatOptions}
      floatStyling={positionStyles.floating}
      menuId={uniqueOverflowMenuId}
    >
      {Children}
    </OverflowMenuContextProvider>
  );
};

OverflowMenuGroup.displayName = 'OverflowMenuGroup';
