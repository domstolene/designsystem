import type * as CSS from 'csstype';
import { type ComponentProps, forwardRef, useRef } from 'react';

import { useTabsContext } from './Tabs.context';
import styles from './Tabs.module.css';
import { useSetTabWidth } from './TabWidthContext';
import { useCombinedRef } from '../../hooks';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { PlusIcon } from '../Icon/icons';
import { defaultTypographyType, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type AddTabButtonProps = {
  /** Bredden. Her er det støtte for de samme enhetene som du kan bruke i `grid-template-columns`.
   * @default "1fr"
   */
  width?: CSS.Properties['width'];
  index?: number;
} & ComponentProps<'button'>;

export const AddTabButton = forwardRef<HTMLButtonElement, AddTabButtonProps>(
  (props, ref) => {
    const { children, index, className, width = '1fr', ...rest } = props;

    // Tell parent what my width should be
    // This is used for the grid layout
    useSetTabWidth(index!, width);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const combinedRef = useCombinedRef(ref, buttonRef);
    const { tabContentDirection } = useTabsContext();

    return (
      <button
        {...rest}
        ref={combinedRef}
        className={cn(
          className,
          styles.tab,
          styles[`tab--${tabContentDirection}`],
          typographyStyles[getTypographyCn(defaultTypographyType)],
          focusStyles['focusable--inset'],
        )}
      >
        <Icon icon={PlusIcon} iconSize="inherit" />
        <span>{children}</span>
      </button>
    );
  },
);

AddTabButton.displayName = 'AddTabButton';
