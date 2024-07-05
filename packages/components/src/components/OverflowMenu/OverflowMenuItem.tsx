import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
} from 'react';

import styles from './OverflowMenu.module.css';
import { useCombinedRef } from '../../hooks';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { type SvgIcon } from '../Icon/utils';
import typographyStyles from '../Typography/typographyStyles.module.css';

interface BaseOverflowMenuItemProps {
  title: string;
  icon?: SvgIcon;
  focus?: boolean;
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
  const { title, icon, focus, id, className, htmlProps = {}, ...rest } = props;

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

  const linkProps = {
    href,
    role: 'menuitem',
    tabIndex: focus ? 0 : -1,
  };
  const iconElement = icon && <Icon iconSize="inherit" icon={icon} />;

  const wrapperCn = [
    className,
    styles.list__item,
    typographyStyles['body-sans-01'],
  ];
  const interactiveWrapperCn = [
    ...wrapperCn,
    styles['list__item--link'],
    focusStyles['focusable--inset'],
    utilStyles['normalize-button'],
  ];

  const content = (
    <>
      {iconElement}
      {title}
    </>
  );

  if (!href && !onClick) {
    return (
      <span
        {...{ ...getBaseHTMLProps(id, cn(...wrapperCn), htmlProps, rest), ref }}
      >
        {content}
      </span>
    );
  }

  if (!href) {
    return (
      <button
        {...getBaseHTMLProps(id, cn(...interactiveWrapperCn), htmlProps, rest)}
        {...linkProps}
        ref={combinedRef as ForwardedRef<HTMLButtonElement>}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      {...getBaseHTMLProps(id, cn(...interactiveWrapperCn), htmlProps, rest)}
      {...linkProps}
      ref={combinedRef as ForwardedRef<HTMLAnchorElement>}
    >
      {content}
    </a>
  );
});

OverflowMenuItem.displayName = 'OverflowMenuItem';
