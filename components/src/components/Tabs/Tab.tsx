import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import {
  ButtonHTMLAttributes,
  Dispatch,
  forwardRef,
  SetStateAction,
  useCallback,
  useEffect,
  MouseEvent,
  useRef,
  KeyboardEvent
} from 'react';
import styled, { css } from 'styled-components';
import { IconWrapper } from '../IconWrapper';
import { tabsTokens as tokens } from './Tabs.tokens';
import { useCombinedRef, useOnKeyDown } from '../../hooks';
import { useTabsContext } from './Tabs.context';
import {
  BaseComponentPropsWithChildren,
  Direction,
  getBaseHTMLProps
} from '../../types';
import { Property } from 'csstype';
import { focusVisibleTransitionValue } from '../../helpers/styling';

type ButtonProps = {
  active: boolean;
  direction: Direction;
  width: Property.Width;
};

const Button = styled.button<ButtonProps>`
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-bottom 0.2s, color 0.2s,
      ${focusVisibleTransitionValue};
  }
  ${tokens.tab.base}
  width: ${({ width }) => width};

  ${({ direction }) => tokens.tab.direction[direction].base};

  ${({ active }) =>
    active &&
    css`
      ${tokens.tab.active.base}
    `}

  &:focus-visible {
    ${tokens.tab.focus.base}
  }

  &:hover {
    ${tokens.tab.hover.base}
  }
`;

export type TabProps = BaseComponentPropsWithChildren<
  HTMLButtonElement,
  {
    /**Spesifiserer om fanen er aktiv. */
    active?: boolean;
    /** Ikon. */
    Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
    /** Custom bredde for enkel fane. */
    width?: Property.Width;
    /** Spesifiserer om `<Tab />` skal ha fokus. **OBS!** settes automatisk av forelder.*/
    focus?: boolean;
    /**  Callback som setter fokus. **OBS!** settes automatisk av forelder.*/
    setFocus?: Dispatch<SetStateAction<number>>;
    /** Indeksen til `<Tab />`. **OBS!** settes automatisk av forelder.*/
    index?: number;
  } & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onKeyDown'>,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onKeyDown'>
>;

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const {
    active = false,
    width,
    Icon,
    children,
    focus,
    setFocus,
    index,
    onClick,
    onKeyDown,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const itemRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);
  const { tabPanelsRef, setHasTabFocus, tabContentDirection, tabWidth } =
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
    e: KeyboardEvent<HTMLAnchorElement> & KeyboardEvent<HTMLButtonElement>
  ) => {
    handleSelect();
    onKeyDown && onKeyDown(e);
  };

  const buttonProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    ref: combinedRef,
    'aria-selected': active,
    role: 'tab',
    active,
    width: width ?? tabWidth,
    direction: tabContentDirection,
    onClick: handleOnClick,
    onKeyDown: handleOnKeyDown,
    tabIndex: focus ? 0 : -1
  };
  return (
    <Button {...buttonProps}>
      {Icon && <IconWrapper Icon={Icon} iconSize="inline" />}
      <span>{children}</span>
    </Button>
  );
});
