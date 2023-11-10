import { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

import { appShellTokens } from './AppShell.tokens';
import { Navigation } from './Navigation/Navigation';
import { User } from './Navigation/TopBar';
import { OverflowMenuProps } from '../OverflowMenu';
import {
  Environment,
  EnvironmentBanner,
  ENVIRONMENT_BANNER_HEIGHT,
} from '@norges-domstoler/development-utils';
import { AppShellContextProvider } from './AppShellContext';

export type AppShellProps = PropsWithChildren<{
  /**
   * Versjon på appen på formatet 0.0.0
   */
  version?: string;
  navigation: AppShellNavigationProps;
  /**
   * Den innloggede brukeren.
   */
  user: User;
  /**
   * Menyvalg som skal vises i OverflowMenu knyttet til "bruker"-knappen.
   */
  userMenuItems?: OverflowMenuProps['items'];
  /**
   * `environment` brukes for å  vise en banner øverst i appen som viser hvilket miljø du er i.
   * Når environment er undefined eller `"PROD"` så vises ikke banneret.
   */
  environment?: Environment;
}>;

export interface AppShellNavigationProps {
  /**
   * Interne lenker i navigasjonen.
   */
  internal?: ReactElement[];
  /**
   * Eksterne lenker i navigasjonen.
   */
  external?: ReactElement[];
}

const AppShellContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${appShellTokens.navigation.mobile.breakpoint}) {
    flex-direction: row;
  }
`;

const MainContent = styled.main<{ environmentBannerActive: boolean }>`
  min-height: calc(100vh - ${appShellTokens.navigation.topBar.height});
  margin-top: ${({ environmentBannerActive }) =>
    environmentBannerActive
      ? `calc(${ENVIRONMENT_BANNER_HEIGHT} + ${appShellTokens.navigation.topBar.height})`
      : appShellTokens.navigation.topBar.height};
  @media (min-width: ${appShellTokens.navigation.mobile.breakpoint}) {
    min-height: unset;
    margin-top: ${({ environmentBannerActive }) =>
      environmentBannerActive ? ENVIRONMENT_BANNER_HEIGHT : 0};
    margin-left: ${appShellTokens.navigation.width};
    min-width: calc(100vw - ${appShellTokens.navigation.width});
    max-width: calc(100vw - ${appShellTokens.navigation.width});
  }
`;

export const AppShell = ({
  children,
  version = '',
  navigation: { internal = [], external = [] },
  user,
  userMenuItems,
  environment = 'PROD',
}: AppShellProps) => {
  const environmentBannerActive = environment !== 'PROD';
  return (
    <AppShellContextProvider>
      <AppShellContainer>
        <EnvironmentBanner environment={environment} />
        <Navigation
          user={user}
          userMenuItems={userMenuItems}
          version={version}
          internal={internal}
          external={external}
          environmentBannerActive={environmentBannerActive}
        />
        <MainContent environmentBannerActive={environmentBannerActive}>
          {children}
        </MainContent>
      </AppShellContainer>
    </AppShellContextProvider>
  );
};

AppShell.displayName = 'AppShell';
