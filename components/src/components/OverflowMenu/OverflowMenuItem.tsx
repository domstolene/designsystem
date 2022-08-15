import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  MouseEvent,
  KeyboardEvent,
  ForwardedRef
} from 'react';
import styled from 'styled-components';
import { overflowMenuTokens as tokens } from './OverflowMenu.tokens';
import { Icon } from '../Icon';
import { useCombinedRef } from '../../hooks';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { SvgIcon } from '../../icons/utils';

export const Span = styled.span`
  ${tokens.link.base}
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const Link = styled.a`
  box-sizing: border-box;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  ${tokens.link.base}
  display: flex;
  align-items: center;
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
  &:hover {
    ${tokens.link.hover.base}
  }
  &:active {
    ${tokens.link.active.base}
  }
  &:focus-visible,
  &.focus-visible {
    ${tokens.link.focus.base}
  }
`;

type BaseOverflowMenuItemProps = {
  title: string;
  icon?: SvgIcon;
  focus?: boolean;
  setFocus?: Dispatch<SetStateAction<number>>;
  index?: number;
  isMenuClosed?: boolean;
};

type AnchorOverflowMenuItemProps = BaseOverflowMenuItemProps &
  BaseComponentProps<
    HTMLAnchorElement,
    {
      href?: string;
    },
    AnchorHTMLAttributes<HTMLAnchorElement>
  >;

type ButtonOverflowMenuItemProps = BaseOverflowMenuItemProps &
  BaseComponentProps<
    HTMLButtonElement,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
    ButtonHTMLAttributes<HTMLButtonElement>
  >;

type OtherOverflowMenuItemProps = BaseOverflowMenuItemProps &
  BaseComponentProps<HTMLSpanElement>;

export type OverflowMenuItemProps =
  | AnchorOverflowMenuItemProps
  | ButtonOverflowMenuItemProps
  | OtherOverflowMenuItemProps;

const isAnchorProps = (
  props: OverflowMenuItemProps
): props is AnchorOverflowMenuItemProps =>
  (props as AnchorOverflowMenuItemProps).href !== undefined;

const isButtonProps = (
  props: OverflowMenuItemProps
): props is ButtonOverflowMenuItemProps =>
  (props as AnchorOverflowMenuItemProps).href === undefined &&
  (props as ButtonOverflowMenuItemProps).onClick !== undefined;

export const OverflowMenuItem = forwardRef<
  HTMLAnchorElement,
  OverflowMenuItemProps
>((props, ref) => {
  const {
    title,
    icon,
    focus,
    setFocus,
    index,
    id,
    className,
    htmlProps = {},
    ...rest
  } = props;

  const { onKeyDown } = htmlProps;

  let href: AnchorOverflowMenuItemProps['href'];
  let onClick: ButtonOverflowMenuItemProps['onClick'];
  if (isAnchorProps(props)) {
    href = props.href;
  } else if (isButtonProps(props)) {
    onClick = props.onClick;
  }

  const itemRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);

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

  const handleOnClick = (
    e: MouseEvent<HTMLAnchorElement> & MouseEvent<HTMLButtonElement>
  ) => {
    handleSelect();
    onClick && onClick(e);
  };

  const handleOnKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement> & KeyboardEvent<HTMLButtonElement>
  ) => {
    handleSelect();
    onKeyDown && onKeyDown(e);
  };

  const linkProps = {
    href,
    onClick: handleOnClick,
    onKeyDown: handleOnKeyDown,
    role: 'menuitem',
    tabIndex: focus ? 0 : -1
  };
  const iconElement = icon && <Icon iconSize="inherit" icon={icon} />;

  if (!href && !onClick) {
    return (
      <Span {...{ ...getBaseHTMLProps(id, className, htmlProps, rest), ref }}>
        {iconElement}
        {title}
      </Span>
    );
  }

  if (!href) {
    return (
      <Link
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        {...linkProps}
        as="button"
        ref={combinedRef as ForwardedRef<HTMLButtonElement>}
      >
        {iconElement}
        {title}
      </Link>
    );
  }

  return (
    <Link
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      {...linkProps}
      as="a"
      ref={combinedRef as ForwardedRef<HTMLAnchorElement>}
    >
      {iconElement}
      {title}
    </Link>
  );
});
