import { type MouseEvent, useEffect, useRef, useState } from 'react';

import { useCombinedRef } from '../../../hooks';
import { cn } from '../../../utils';
import focusStyles from '../../helpers/styling/focus.module.css';
import utilStyles, {
  invisible,
} from '../../helpers/styling/utilStyles.module.css';
import { Icon } from '../../Icon';
import { Spinner } from '../../Spinner';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import { useOverflowMenuContext } from '../OverflowMenu.context';
import styles from '../OverflowMenu.module.css';
import { type OverflowMenuButtonProps } from '../OverflowMenu.types';

export const OverflowMenuButton = ({
  id,
  icon,
  children,
  className,
  onClick,
  onClickAsync,
  purpose = 'default',
  loading,
  loadingTooltip,
  'aria-disabled': ariaDisabled,
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
      <button
        ref={combinedRef}
        role="menuitem"
        id={id}
        className={cn(
          className,
          styles.list__item,
          styles[purpose],
          typographyStyles['body-small'],
          styles['list__item--link'],
          focusStyles['focusable--inset'],
          loading && styles['button-loading'],
        )}
        onClick={e => handleClick(e)}
        aria-disabled={
          isLoading ? true : ariaDisabled ? ariaDisabled : undefined
        }
        {...rest}
        tabIndex={focusedRef === itemRef ? 0 : -1}
      >
        {isLoading && (
          <span className={cn(utilStyles['center-absolute'])}>
            <Spinner
              size="var(--dds-icon-size-medium)"
              tooltip={loadingTooltip}
            />
          </span>
        )}

        {icon && (
          <Icon
            className={cn(isLoading && invisible)}
            iconSize="inherit"
            icon={icon}
          />
        )}
        <span className={cn(isLoading && invisible)}>{children}</span>
      </button>
    </li>
  );
};

OverflowMenuButton.displayName = 'OverflowMenuButton';
