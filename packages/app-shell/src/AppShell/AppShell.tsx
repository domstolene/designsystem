import { type SvgIcon } from '@norges-domstoler/dds-components';
import {
  ENVIRONMENT_BANNER_HEIGHT,
  type Environment,
  EnvironmentBanner,
} from '@norges-domstoler/development-utils';
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from 'react';
import styled from 'styled-components';

import { appShellTokens } from './AppShell.tokens';
import { AppShellContextProvider } from './AppShellContext';
import { Navigation } from './Navigation/Navigation';
import { type User } from './Navigation/TopBar';

export type UserMenuItem = {
  children: ReactNode;
  href?: string;
  icon?: SvgIcon;
  onClick?: () => void;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

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
  userMenuItems?: Array<UserMenuItem>;
  /**
   * `environment` brukes for å  vise en banner øverst i appen som viser hvilket miljø du er i.
   * Når environment er undefined eller `"PROD"` så vises ikke banneret.
   */
  environment?: Environment;
  /**
   * `title` brukes for å definere en egen tittel øverst i komponenten.
   * Når `title` er undefined blir tittel satt til `Lovisa`.
   */
  title?: string;
}>;

export interface AppShellNavigationProps {
  /**
   * Interne lenker i navigasjonen.
   */
  internal?: Array<ReactElement>;
  /**
   * Eksterne lenker i navigasjonen.
   */
  external?: Array<ReactElement>;
}

const AppShellContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${appShellTokens.navigation.mobile.breakpoint}) {
    flex-direction: row;
  }
`;

const MainContent = styled.main.withConfig({
  shouldForwardProp: prop => prop !== 'environmentBannerActive',
})<{ environmentBannerActive: boolean }>`
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
  title = 'Lovisa',
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
          title={title}
        />
        <MainContent environmentBannerActive={environmentBannerActive}>
          {children}
        </MainContent>
      </AppShellContainer>
    </AppShellContextProvider>
  );
};

AppShell.displayName = 'AppShell';
