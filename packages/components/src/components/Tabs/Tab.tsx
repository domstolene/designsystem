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
import styled, { css } from 'styled-components';

import { useTabsContext } from './Tabs.context';
import { tabsTokens as tokens } from './Tabs.tokens';
import { useSetTabWidth } from './TabWidthContext';
import { useCombinedRef, useOnKeyDown } from '../../hooks';
import {
  type BaseComponentPropsWithChildren,
  type Direction,
  getBaseHTMLProps,
} from '../../types';
import {
  focusVisible,
  focusVisibleTransitionValue,
  normalizeButton,
  removeButtonStyling,
} from '../helpers';
import { Icon } from '../Icon';
import { type SvgIcon } from '../Icon/utils';
import { defaultTypographyType, getFontStyling } from '../Typography';

const { tab } = tokens;

interface ButtonProps {
  $active: boolean;
  $direction: Direction;
}

const Button = styled.button<ButtonProps>`
  ${normalizeButton}
  ${removeButtonStyling}
  user-select: text;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${tab.base.borderBottom};
  color: ${tab.base.color};
  padding: ${tab.base.padding};
  ${getFontStyling(defaultTypographyType)}

  @media (prefers-reduced-motion: no-preference) {
    transition:
      box-shadow 0.2s,
      border-bottom 0.2s,
      color 0.2s,
      ${focusVisibleTransitionValue};
  }

  ${({ $direction }) => css`
    flex-direction: ${$direction};
    gap: ${tab[$direction].gap};
  `};

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${tab.active.backgroundColor};
      border-color: ${tab.active.borderColor};
      color: ${tab.active.color};
      box-shadow: ${tab.active.boxShadow};
    `}

  &:focus-visible {
    ${focusVisible}
    outline-offset: -1px;
  }

  &:hover {
    border-color: ${tab.hover.borderColor};
    color: ${tab.hover.color};
    box-shadow: ${tab.hover.boxShadow};
  }
`;

export type TabProps = BaseComponentPropsWithChildren<
  HTMLButtonElement,
  {
    /**Spesifiserer om fanen er aktiv. */
    active?: boolean;
    /** Ikon. */
    icon?: SvgIcon;
    /** Spesifiserer om `<Tab />` skal ha fokus. **OBS!** settes automatisk av forelder.*/
    focus?: boolean;
    /**  Callback som setter fokus. **OBS!** settes automatisk av forelder.*/
    setFocus?: Dispatch<SetStateAction<number>>;
    /** Indeksen til `<Tab />`. **OBS!** settes automatisk av forelder.*/
    index?: number;
    /**
     * Bredden til `<Tab />`. Her er det støtte for de samme enhetene som du kan bruke i `grid-template-columns`.
     * @default '1fr'
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
  const { tabPanelsRef, setHasTabFocus, tabContentDirection } =
    useTabsContext();

  useEffect(() => {
    if (focus) {
      itemRef.current?.focus();
      setHasTabFocus(true);
    }
  }, [focus]);

  useOnKeyDown('Tab', () => {
    setHasTabFocus(false);
    tabPanelsRef?.current?.focus();
  });

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
    <Button
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      ref={combinedRef}
      aria-selected={active}
      role="tab"
      $active={active}
      $direction={tabContentDirection}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      tabIndex={focus ? 0 : -1}
    >
      {icon && <Icon icon={icon} iconSize="inherit" />}
      <span>{children}</span>
    </Button>
  );
});

Tab.displayName = 'Tab';
