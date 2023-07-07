import { Children, ReactElement } from 'react';
import styled from 'styled-components';

import { appShellTokens } from '../AppShell.tokens';
import { Divider } from '../../Divider';
import { NavigationItem } from './NavigationItem';

const { navigation: navTokens } = appShellTokens;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${navTokens.width};
  padding: ${navTokens.padding};
  color: ${navTokens.color};
  background-color: ${navTokens.backgroundColor};
  box-sizing: border-box;

  position: sticky;
  top: 0;
  left: 0;
`;

const LogoAndVersionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${navTokens.logoAndVersion.color};
  padding: ${navTokens.logoAndVersion.padding};
`;

const Logo = styled.a`
  font-size: ${navTokens.logoAndVersion.logo.fontSize};
  font-style: ${navTokens.logoAndVersion.logo.fontStyle};
  font-family: ${navTokens.logoAndVersion.logo.fontFamily};
  font-weight: ${navTokens.logoAndVersion.logo.fontWeight};
  line-height: ${navTokens.logoAndVersion.logo.lineHeight};
  letter-spacing: ${navTokens.logoAndVersion.logo.letterSpacing};
  text-align: middle;
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

export type NavigationProps = {
  version: string;
  internal: ReactElement[];
  external: ReactElement[];
};

export const Navigation = ({
  version,
  internal,
  external,
}: NavigationProps) => {
  return (
    <Sidebar>
      <LogoAndVersionContainer>
        <Logo>Lovisa</Logo>
        {version !== '' && <Version>v {version}</Version>}
      </LogoAndVersionContainer>
      <NavigationItems>
        {Children.map(internal, item => {
          if (item.type !== NavigationItem) {
            console.warn(
              `Du bruker en React-komponent som ikke er tillat i AppShell-internal. Du kan kun bruke AppShell.NavItem i AppShell-internal.`
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
              'Du bruker en React-komponent som ikke er tillat i AppShell-external. Du kan kun bruke AppShell.NavItem i AppShell-external.'
            );
            return null;
          }
          return item;
        })}
      </NavigationItems>
    </Sidebar>
  );
};
