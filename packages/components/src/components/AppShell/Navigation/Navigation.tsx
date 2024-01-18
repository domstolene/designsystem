import { ENVIRONMENT_BANNER_HEIGHT } from '@norges-domstoler/development-utils';
import { Children, type ReactElement, useEffect } from 'react';
import styled from 'styled-components';

import { NavigationItem } from './NavigationItem';
import { NavigationLogo } from './NavigationLogo';
import { TopBar, type User } from './TopBar';
import { Divider } from '../../Divider';
import { type OverflowMenuProps } from '../../OverflowMenu';
import { appShellTokens } from '../AppShell.tokens';
import { useAppShellContext } from '../AppShellContext';

const { navigation: navTokens } = appShellTokens;

const Sidebar = styled.div.withConfig({
  shouldForwardProp: prop =>
    prop !== 'isOpen' && prop !== 'environmentBannerActive',
})<{
  isOpen: boolean;
  environmentBannerActive: boolean;
}>`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${navTokens.topBar.height});
  width: 100vw;
  padding: ${navTokens.padding};
  color: ${navTokens.color};
  background-color: ${navTokens.backgroundColor};
  box-sizing: border-box;

  position: fixed;
  top: ${({ environmentBannerActive }) =>
    environmentBannerActive
      ? `calc(${ENVIRONMENT_BANNER_HEIGHT} + ${navTokens.topBar.height})`
      : navTokens.topBar.height};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  @media (min-width: ${navTokens.mobile.breakpoint}) {
    height: ${({ environmentBannerActive }) =>
      environmentBannerActive
        ? `calc(100vh - ${ENVIRONMENT_BANNER_HEIGHT})`
        : '100vh'};
    top: ${({ environmentBannerActive }) =>
      environmentBannerActive ? ENVIRONMENT_BANNER_HEIGHT : 0};
    width: ${navTokens.width};
    position: fixed;

    transform: translateX(0);
    opacity: 1;
  }
`;

const LogoAndVersionContainer = styled.div`
  display: none;

  @media (min-width: ${navTokens.mobile.breakpoint}) {
    display: flex;
    flex-direction: column;
    color: ${navTokens.logoAndVersion.color};
    padding: ${navTokens.logoAndVersion.padding};
  }
`;

const Version = styled.span`
  font-size: ${navTokens.logoAndVersion.version.fontSize};
  font-style: ${navTokens.logoAndVersion.version.fontStyle};
  font-family: ${navTokens.logoAndVersion.version.fontFamily};
  font-weight: ${navTokens.logoAndVersion.version.fontWeight};
  line-height: ${navTokens.logoAndVersion.version.lineHeight};
  letter-spacing: ${navTokens.logoAndVersion.version.letterSpacing};
`;

export const NavigationItems = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${navTokens.navigationItems.gap};
`;

const DividerWrapper = styled.div`
  padding-left: ${navTokens.navigationItems.item.padding};
  padding-right: ${navTokens.navigationItems.item.padding};
`;
const StyledDivider = styled(Divider)`
  border-color: ${navTokens.dividerColor};
`;

export interface NavigationProps {
  version: string;
  internal: Array<ReactElement>;
  external: Array<ReactElement>;
  user: User;
  userMenuItems?: OverflowMenuProps['items'];
  environmentBannerActive: boolean;
  title: string;
}

export const Navigation = ({
  version,
  user,
  userMenuItems,
  internal,
  external,
  environmentBannerActive,
  title,
}: NavigationProps) => {
  const { isOpen, setOpen } = useAppShellContext();

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'o') {
        setOpen(prev => !prev);
      }
    };

    window.addEventListener('keypress', listener);
    return () => window.removeEventListener('keypress', listener);
  });

  return (
    <div>
      <TopBar
        user={user}
        userMenuItems={userMenuItems}
        isNavigationOpen={isOpen}
        onNavigationOpenChange={newOpen => setOpen(newOpen)}
        environmentBannerActive={environmentBannerActive}
        title={title}
      />
      <Sidebar
        isOpen={isOpen}
        environmentBannerActive={environmentBannerActive}
      >
        <LogoAndVersionContainer>
          <NavigationLogo>{title}</NavigationLogo>
          {version !== '' && <Version>v {version}</Version>}
        </LogoAndVersionContainer>
        <NavigationItems>
          {Children.map(internal, item => {
            if (item.type !== NavigationItem) {
              console.warn(
                `Du bruker en React-komponent som ikke er tillat i AppShell-internal. Du kan kun bruke AppShell.NavItem i AppShell-internal.`,
              );
              return null;
            }
            return item;
          })}

          {external.length > 0 && (
            <DividerWrapper>
              <StyledDivider />
            </DividerWrapper>
          )}

          {Children.map(external, item => {
            if (item.type !== NavigationItem) {
              console.warn(
                'Du bruker en React-komponent som ikke er tillat i AppShell-external. Du kan kun bruke AppShell.NavItem i AppShell-external.',
              );
              return null;
            }
            return item;
          })}
        </NavigationItems>
      </Sidebar>
    </div>
  );
};
