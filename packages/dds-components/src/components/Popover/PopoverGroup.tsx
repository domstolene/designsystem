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

import { PopoverContext } from './Popover.context';
import {
  type UseFloatPositionOptions,
  useCombinedRef,
  useFloatPosition,
  useOnKeyDown,
} from '../../hooks';

export interface PopoverGroupProps {
  /**Callback når det trykkes på lukkeknappen. */
  onCloseButtonClick?: () => void;
  /** Callback når det trykkes på anchor-elementet (trigger-elementet). */
  onTriggerClick?: () => void;
  /**Forteller `<Popover>` om den skal være åpen.  */
  isOpen?: boolean;
  /** `id` til `<Popover>.` */
  popoverId?: string;
  /** Barna til wrapperen: anchor-element som det første og `<Popover>` som det andre.  */
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
  const [floatOptions, setFloatOptions] = useState<UseFloatPositionOptions>();
  const { refs, styles: positionStyles } = useFloatPosition(null, floatOptions);

  const handleOnCloseButtonClick = () => {
    setOpen(false);
    onCloseButtonClick && onCloseButtonClick();
  };

  const handleOnTriggerClick = () => {
    setOpen(!open);
    onTriggerClick && onTriggerClick();
  };

  const buttonRef = useRef<HTMLElement>(null);
  const anchorRef = refs.setReference;
  const combinedRef = useCombinedRef(buttonRef, anchorRef);

  useOnKeyDown(['Esc', 'Escape'], () => {
    if (open) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  });

  const handleClose = () => setOpen(false);
  const isAnchorChild = (i: number): boolean => i === 0;

  const Children = ReactChildren.map(children, (child, childIndex) => {
    return (
      isValidElement(child) &&
      (isAnchorChild(childIndex)
        ? cloneElement(child as ReactElement, {
            'aria-haspopup': 'dialog',
            'aria-controls': uniquePopoverId,
            'aria-expanded': open,
            onClick: handleOnTriggerClick,
            ref: combinedRef,
          })
        : cloneElement(child as ReactElement, {
            isOpen: open,
            'aria-hidden': !open,
            onCloseButtonClick: handleOnCloseButtonClick,
            anchorElement: buttonRef.current,
            onClose: handleClose,
          }))
    );
  });

  return (
    <PopoverContext.Provider
      value={{
        floatStyling: positionStyles.floating,
        setFloatOptions,
        floatingRef: refs.setFloating,
        popoverId: uniquePopoverId,
      }}
    >
      {Children}
    </PopoverContext.Provider>
  );
};

PopoverGroup.displayName = 'PopoverGroup';
