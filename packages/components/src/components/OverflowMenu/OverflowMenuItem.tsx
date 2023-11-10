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
  ForwardedRef,
} from 'react';
import styled, { css } from 'styled-components';
import {
  overflowMenuTokens as tokens,
  typographyType,
} from './OverflowMenu.tokens';
import { Icon } from '@norges-domstoler/dds-icons';
import { useCombinedRef } from '@norges-domstoler/dds-core';
import {
  BaseComponentProps,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { SvgIcon } from '@norges-domstoler/dds-icons';
import { normalizeButton } from '@norges-domstoler/dds-core';
import {
  focusVisibleLink,
  getFontStyling,
} from '@norges-domstoler/dds-typography';

const { element, link } = tokens;

const elementBaseCSS = css`
  display: flex;
  box-sizing: border-box;
  color: ${element.base.color};
  text-decoration: ${element.base.textDecoration};
  background-color: ${element.base.backgroundColor};
  padding: ${element.base.padding};
  gap: ${element.base.gap};
  ${getFontStyling(typographyType)}
`;

export const Span = styled.span`
  ${elementBaseCSS}
`;

export const Link = styled.a`
  ${normalizeButton}
  text-align: left;
  user-select: text;
  border: none;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  ${elementBaseCSS}
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
  &:hover {
    background-color: ${link.hover.backgroundColor};
  }
  &:active {
    background-color: ${link.active.backgroundColor};
  }
  &:focus-visible,
  &.focus-visible {
    ${focusVisibleLink}
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  height: ${link.iconWrapper.height};
`;

interface BaseOverflowMenuItemProps {
  title: string;
  icon?: SvgIcon;
  focus?: boolean;
  setFocus?: Dispatch<SetStateAction<number>>;
  index?: number;
  isMenuClosed?: boolean;
}

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
  props: OverflowMenuItemProps,
): props is AnchorOverflowMenuItemProps =>
  (props as AnchorOverflowMenuItemProps).href !== undefined;

const isButtonProps = (
  props: OverflowMenuItemProps,
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
    e: MouseEvent<HTMLAnchorElement> & MouseEvent<HTMLButtonElement>,
  ) => {
    handleSelect();
    onClick && onClick(e);
  };

  const handleOnKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement> & KeyboardEvent<HTMLButtonElement>,
  ) => {
    handleSelect();
    onKeyDown && onKeyDown(e);
  };

  const linkProps = {
    href,
    onClick: handleOnClick,
    onKeyDown: handleOnKeyDown,
    role: 'menuitem',
    tabIndex: focus ? 0 : -1,
  };
  const iconElement = icon && <Icon iconSize="inherit" icon={icon} />;

  if (!href && !onClick) {
    return (
      <Span {...{ ...getBaseHTMLProps(id, className, htmlProps, rest), ref }}>
        <IconWrapper>{iconElement}</IconWrapper>
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
        <IconWrapper>{iconElement}</IconWrapper>
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
      <IconWrapper>{iconElement}</IconWrapper>
      {title}
    </Link>
  );
});

OverflowMenuItem.displayName = 'OverflowMenuItem';
