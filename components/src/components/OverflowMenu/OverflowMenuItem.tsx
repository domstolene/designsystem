import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  MouseEvent,
  KeyboardEvent
} from 'react';
import styled from 'styled-components';
import { overflowMenuTokens as tokens } from './OverflowMenu.tokens';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { IconWrapper } from '../IconWrapper';
import { useCombinedRef } from '../../hooks';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

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
  transition: background-color 0.2s;
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

export const StyledIconWrapper = styled(IconWrapper)``;

type BaseOverflowMenuItemProps = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
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
    Icon,
    focus,
    setFocus,
    index,
    id,
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
  const icon = Icon && <StyledIconWrapper iconSize="inline" Icon={Icon} />;

  if (!href && !onClick) {
    return (
      <Span {...{ ...getBaseHTMLProps(id, htmlProps, rest), ref }}>
        {icon}
        {title}
      </Span>
    );
  }

  if (!href) {
    return (
      <Link
        {...getBaseHTMLProps(id, htmlProps, rest)}
        {...linkProps}
        as="button"
        ref={combinedRef as React.ForwardedRef<HTMLButtonElement>}
      >
        {icon}
        {title}
      </Link>
    );
  }

  return (
    <Link
      {...getBaseHTMLProps(id, htmlProps, rest)}
      {...linkProps}
      as="a"
      ref={combinedRef as React.ForwardedRef<HTMLAnchorElement>}
    >
      {icon}
      {title}
    </Link>
  );
});
