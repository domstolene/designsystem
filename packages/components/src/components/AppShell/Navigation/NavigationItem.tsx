import { type MouseEventHandler } from 'react';
import styled from 'styled-components';

import { type As, type PropsOf } from '../../../types';
import { Icon } from '../../Icon';
import { ChevronRightIcon, OpenExternalIcon } from '../../Icon/icons';
import { type SvgIcon } from '../../Icon/utils';
import { appShellTokens } from '../AppShell.tokens';
import { useAppShellContext } from '../AppShellContext';

const { navigation: navTokens } = appShellTokens;

const navItemTokens = navTokens.navigationItems.item;

const IconContainer = styled.div`
  grid-area: icon;
  display: flex;
  align-items: center;
`;

const TextContainer = styled.span`
  grid-area: text;
`;

const ChevronContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  grid-area: chevron;
`;

const BaseLink = styled.a`
  padding: ${navItemTokens.padding};
  gap: ${navItemTokens.gap};
  border-radius: ${navItemTokens.borderRadius};

  text-decoration: none;
  color: ${navItemTokens.color};
  font-size: ${navItemTokens.fontSize};
  font-style: ${navItemTokens.fontStyle};
  font-family: ${navItemTokens.fontFamily};
  font-weight: ${navItemTokens.fontWeight};
  line-height: ${navItemTokens.lineHeight};
  letter-spacing: ${navItemTokens.letterSpacing};

  &:hover:not(.active) {
    background-color: ${navItemTokens.hover.backgroundColor};
  }

  &.active {
    color: ${navItemTokens.active.color};
    background-color: ${navItemTokens.active.backgroundColor};
  }
`;

const InternalNavItem = styled(BaseLink)`
  display: grid;
  align-items: center;
  grid-template-areas: 'icon text chevron';
  grid-template-columns: min-content 1fr min-content;

  &.active ${ChevronContainer} {
    opacity: 1;
  }
`;

const ExternalNavItem = styled(BaseLink)`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: ${navItemTokens.external.fontSize};
  font-style: ${navItemTokens.external.fontStyle};
  font-family: ${navItemTokens.external.fontFamily};
  font-weight: ${navItemTokens.external.fontWeight};
  line-height: ${navItemTokens.external.lineHeight};
  letter-spacing: ${navItemTokens.external.letterSpacing};
`;

type BaseNavigationItemProps = (
  | {
      icon: SvgIcon;
      active?: boolean;
      external?: undefined | false;
    }
  | { external: true; active?: undefined | false; icon?: undefined }
) & { onClick?: MouseEventHandler };

type NavigationItemProps<T extends As = 'a'> = PropsOf<T> &
  BaseNavigationItemProps;

export const NavigationItem = <T extends As = 'a'>({
  as: _as,
  active,
  icon,
  external,
  children,
  onClick: propOnClick,
  ...rest
}: NavigationItemProps<T>) => {
  const { setOpen } = useAppShellContext();
  const Comp = _as ?? 'a';

  const onClick: MouseEventHandler = e => {
    propOnClick?.(e);
    setOpen(false);
  };
  if (external) {
    return (
      <ExternalNavItem as={Comp} {...rest} onClick={onClick}>
        {children}
        <Icon icon={OpenExternalIcon} iconSize="inherit" />
      </ExternalNavItem>
    );
  }

  return (
    <InternalNavItem
      as={Comp}
      {...rest}
      onClick={onClick}
      className={[active ? 'active' : '', rest.className].join(' ')}
    >
      <IconContainer>{icon && <Icon icon={icon} />}</IconContainer>
      <TextContainer>{children}</TextContainer>
      <ChevronContainer>
        <Icon icon={ChevronRightIcon} />
      </ChevronContainer>
    </InternalNavItem>
  );
};

NavigationItem.displayName = 'AppShell.NavItem';
