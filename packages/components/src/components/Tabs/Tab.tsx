import type * as CSS from 'csstype';
import {
  type ButtonHTMLAttributes,
  type Dispatch,
  type KeyboardEvent,
  type MouseEvent,
  type SetStateAction,
  forwardRef,
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
import { defaultTypographyType, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

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
    /** Bredden til `<Tab>`. Her er det støtte for de samme enhetene som du kan bruke i `grid-template-columns`.
     * @default "1fr"
     */
    width?: CSS.Properties['width'];
  } & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onKeyDown'>,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onKeyDown'>
>;

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const {
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
    htmlProps,
    width = '1fr',
    ...rest
  } = props;

  // Tell parent what my width should be
  // This is used for the grid layout
  useSetTabWidth(index!, width);

  const itemRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);
  const { tabContentDirection } = useTabsContext();

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
    onClick && onClick(e);
  };

  const handleOnKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement> & KeyboardEvent<HTMLButtonElement>,
  ) => {
    handleSelect();
    onKeyDown && onKeyDown(e);
  };

  return (
    <button
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.tab,
          active && styles['tab--active'],
          styles[`tab--${tabContentDirection}`],
          typographyStyles[getTypographyCn(defaultTypographyType)],
          focusStyles['focusable--inset'],
        ),
        htmlProps,
        rest,
      )}
      ref={combinedRef}
      aria-selected={active}
      role="tab"
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      tabIndex={focus ? 0 : -1}
    >
      {icon && <Icon icon={icon} iconSize="inherit" />}
      <span>{children}</span>
    </button>
  );
});

Tab.displayName = 'Tab';
