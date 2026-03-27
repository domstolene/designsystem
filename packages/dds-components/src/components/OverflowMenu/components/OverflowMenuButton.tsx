import { type MouseEvent, useEffect, useRef, useState } from 'react';

import { useCombinedRef } from '../../../hooks';
import { StylelessButton } from '../../helpers';
import { DropdownItem } from '../../helpers/Dropdown/DropdownItem';
import { useOverflowMenuContext } from '../OverflowMenu.context';
import { type OverflowMenuButtonProps } from '../OverflowMenu.types';

export const OverflowMenuButton = ({
  onClick,
  onClickAsync,
  closeMenuOnClickAsync = true,
  purpose = 'default',
  loading,
  ref,
  ...rest
}: OverflowMenuButtonProps) => {
  const itemRef = useRef<HTMLButtonElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);

  const { onClose, registerItem, unregisterItem, focusedRef } =
    useOverflowMenuContext();

  const [internalLoading, setInternalLoading] = useState(false);
  const isLoading = loading || internalLoading;

  useEffect(() => {
    registerItem(itemRef);
    return () => unregisterItem(itemRef);
  }, []);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;

    const close = () => onClose?.();

    if (onClickAsync) {
      setInternalLoading(true);
      const shouldAutoClose = closeMenuOnClickAsync === true;

      try {
        await onClickAsync(e);
        if (typeof closeMenuOnClickAsync === 'function') {
          closeMenuOnClickAsync(close);
        } else if (shouldAutoClose) close();
      } finally {
        setInternalLoading(false);
      }
    } else {
      onClick?.(e);
      close();
    }
  };

  return (
    <li>
      <DropdownItem
        as={StylelessButton}
        ref={combinedRef}
        role="menuitem"
        purpose={purpose}
        loading={isLoading}
        onClick={e => handleClick(e)}
        {...rest}
        tabIndex={focusedRef === itemRef ? 0 : -1}
      />
    </li>
  );
};

OverflowMenuButton.displayName = 'OverflowMenuButton';
