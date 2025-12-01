import { type MouseEvent, useEffect, useRef, useState } from 'react';

import { useCombinedRef } from '../../../hooks';
import { StylelessButton } from '../../helpers';
import { DropdownItem } from '../../helpers/Dropdown/DropdownItem';
import { useOverflowMenuContext } from '../OverflowMenu.context';
import { type OverflowMenuButtonProps } from '../OverflowMenu.types';

export const OverflowMenuButton = ({
  onClick,
  onClickAsync,
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
    if (onClickAsync) {
      setInternalLoading(true);
      try {
        await onClickAsync(e);
      } finally {
        setInternalLoading(false);
        onClose?.();
      }
    } else {
      onClick?.(e);
      onClose?.();
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
