import {
  type DetailedHTMLProps,
  type Dispatch,
  type HTMLAttributes,
  Children as ReactChildren,
  type ReactNode,
  type SetStateAction,
  cloneElement,
  isValidElement,
  useId,
  useRef,
  useState,
} from 'react';

import { PopoverContext } from './Popover.context';
import {
  type UseFloatPositionOptions,
  useCombinedRef,
  useFloatPosition,
  useOnClickOutside,
  useOnKeyDown,
} from '../../hooks';

export interface PopoverGroupProps {
  /** Barna til wrapperen: anchor-element som det første og `<Popover>` som det andre.  */
  children: ReactNode;
  /**Forteller `<Popover>` om den skal være åpen på første render.  */
  isInitiallyOpen?: boolean;
  /**Implementerer kontrollert tilstand: forteller `<Popover>` om den skal være åpen.  */
  isOpen?: boolean;
  /**Implementerer kontrollert tilstand: funksjon for å kontrollere `isOpen`.  */
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  /**Callback når <Popover> åpnes. */
  onOpen?: () => void;
  /**Callback når <Popover> lukkes. */
  onClose?: () => void;
  /** `id` til `<Popover>.` */
  popoverId?: string;
}

export const PopoverGroup = ({
  isOpen: propIsOpen,
  setIsOpen: propSetIsOpen,
  onClose,
  onOpen,
  isInitiallyOpen = false,
  children,
  popoverId,
}: PopoverGroupProps) => {
  const [internalIsOpen, internalSetIsOpen] = useState(isInitiallyOpen);

  const open = propIsOpen ?? internalIsOpen;
  const setOpen = propSetIsOpen ?? internalSetIsOpen;

  const generatedId = useId();
  const uniquePopoverId = popoverId ?? `${generatedId}-popover`;
  const [floatOptions, setFloatOptions] = useState<UseFloatPositionOptions>();
  const { refs, styles: positionStyles } = useFloatPosition(null, floatOptions);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleOpen = () => {
    setOpen(true);
    onOpen?.();
  };

  const handleToggle = () => {
    if (open) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const buttonRef = useRef<HTMLElement>(null);
  const anchorRef = refs.setReference;
  const combinedAnchorRef = useCombinedRef(buttonRef, anchorRef);

  const popoverRef = useRef<HTMLDivElement>(null);
  const floatingRef = refs.setFloating;
  const combinedPopoverRef = useCombinedRef(popoverRef, floatingRef);

  useOnKeyDown(['Esc', 'Escape'], () => {
    if (open) {
      handleClose();
      buttonRef.current?.focus();
    }
  });

  const elements: Array<HTMLElement | null> = [popoverRef.current!];
  if (buttonRef.current) elements.push(buttonRef.current);

  useOnClickOutside(elements, () => {
    if (open) handleClose();
  });

  const isAnchorChild = (i: number): boolean => i === 0;

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      >(child) &&
      (isAnchorChild(childIndex)
        ? cloneElement(child, {
            'aria-haspopup': 'dialog',
            'aria-controls': uniquePopoverId,
            'aria-expanded': open,
            onClick: handleToggle,
            ref: combinedAnchorRef,
          })
        : child)
    );
  });

  return (
    <PopoverContext
      value={{
        floatStyling: positionStyles.floating,
        setFloatOptions,
        floatingRef: combinedPopoverRef,
        popoverId: uniquePopoverId,
        onClose: handleClose,
        isOpen: open,
        anchorEl: buttonRef.current ?? undefined,
      }}
    >
      {Children}
    </PopoverContext>
  );
};

PopoverGroup.displayName = 'PopoverGroup';
