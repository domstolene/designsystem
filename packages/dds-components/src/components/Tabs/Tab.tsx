import type * as CSS from 'csstype';
import {
  type ButtonHTMLAttributes,
  type Dispatch,
  type KeyboardEvent,
  type MouseEvent,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { type TabSize } from './Tabs';
import { useTabsContext } from './Tabs.context';
import styles from './Tabs.module.css';
import { useSetTabWidth } from './TabWidthContext';
import { useCombinedRef } from '../../hooks';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Badge, type BadgeInComponentProps, type BadgeSize } from '../Badge';
import focusStyles from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { type SvgIcon } from '../Icon/utils';
import { Box, HStack } from '../layout';
import typographyStyles from '../Typography/typographyStyles.module.css';

type PickedAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'onKeyDown'
>;

export type TabProps = BaseComponentPropsWithChildren<
  HTMLButtonElement,
  {
    /**Spesifiserer om fanen er aktiv.
     * @default false
     */
    active?: boolean;
    /** Ikon. */
    icon?: SvgIcon;
    /** Spesifiserer om `<Tab>` skal ha fokus. **OBS!** settes automatisk av forelder.*/
    focus?: boolean;
    /**  Callback som setter fokus. **OBS!** settes automatisk av forelder.*/
    setFocus?: Dispatch<SetStateAction<number>>;
    /** Indeksen til `<Tab>`. **OBS!** settes automatisk av forelder.*/
    index?: number;
    /** Bredden til `<Tab>`. Støtter samme enheter som `grid-template-columns`.
     * @default "1fr"
     */
    width?: CSS.Properties['width'];
    badgeProps?: BadgeInComponentProps;
  } & PickedAttributes
>;

export const Tab = ({
  active = false,
  icon,
  children,
  focus,
  setFocus,
  index,
  onClick,
  onKeyDown,
  id,
  className,
  htmlProps = {},
  style,
  width = '1fr',
  ref,
  badgeProps,
  ...rest
}: TabProps) => {
  // Tell parent what my width should be
  // This is used for the grid layout
  useSetTabWidth(index!, width);

  const itemRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);
  const { tabContentDirection, size } = useTabsContext();

  const { type = 'button', ...restHtmlProps } = htmlProps;
  const fixedHtmlProps = { type, ...restHtmlProps };

  useEffect(() => {
    if (focus) {
      itemRef.current?.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    if (setFocus && index) {
      setFocus(index);
    }
  }, [index, setFocus]);

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    handleSelect();
    onClick?.(e);
  };

  const handleOnKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement> & KeyboardEvent<HTMLButtonElement>,
  ) => {
    handleSelect();
    onKeyDown?.(e);
  };

  const badgeSize: Record<TabSize, BadgeSize> = {
    small: 'xsmall',
    medium: 'small',
  };

  const hasIcon = !!icon;

  const hasVerticalBadge =
    badgeProps &&
    !!badgeProps?.children === false &&
    tabContentDirection === 'column' &&
    hasIcon;

  const hasHorizontalBadge = badgeProps && !hasVerticalBadge;

  const hasHorizontalBadgeRow =
    hasHorizontalBadge && tabContentDirection === 'row';
  const hasHorizontalBadgeColumn =
    hasHorizontalBadge && tabContentDirection === 'column';

  const content = hasHorizontalBadgeRow ? (
    <>
      <span>{children}</span>
      <Box as={Badge} {...badgeProps} size={badgeSize[size]} />
    </>
  ) : hasHorizontalBadgeColumn ? (
    <HStack gap="x0.5">
      {children}
      <Box as={Badge} {...badgeProps} size={badgeSize[size]} />
    </HStack>
  ) : hasVerticalBadge ? (
    <>
      <span>{children}</span>
      <Box
        as={Badge}
        {...badgeProps}
        size={badgeSize[size]}
        className={cn(styles['tab--column__badge'], badgeProps?.className)}
        top="x0.125"
        right="calc(50% - (var(--dds-size-icon-component) / 2 ))"
      />
    </>
  ) : (
    <span>{children}</span>
  );

  return (
    <button
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.tab,
          styles[`tab--${size}--${tabContentDirection}`],
          active && styles['tab--active'],
          styles[`tab--${tabContentDirection}`],
          typographyStyles[`body-short-${size}`],
          focusStyles['focusable--inset'],
        ),
        style,
        fixedHtmlProps,
        rest,
      )}
      ref={combinedRef}
      aria-selected={active}
      role="tab"
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      tabIndex={focus ? 0 : -1}
    >
      {icon && <Icon icon={icon} iconSize="component" />}
      {content}
    </button>
  );
};

Tab.displayName = 'Tab';
