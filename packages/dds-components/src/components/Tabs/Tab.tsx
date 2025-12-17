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

import { useTabsContext } from './Tabs.context';
import styles from './Tabs.module.css';
import { useSetTabWidth } from './TabWidthContext';
import { useCombinedRef } from '../../hooks';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { type SvgIcon } from '../Icon/utils';
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
  } & PickedAttributes,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof PickedAttributes>
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
      <span>{children}</span>
    </button>
  );
};

Tab.displayName = 'Tab';
