import { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

import { appShellTokens } from './AppShell.tokens';
import { Navigation } from './Navigation/Navigation';
import { User } from './Navigation/TopBar';
import { OverflowMenuProps } from '../OverflowMenu';

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
}>;

export type AppShellNavigationProps = {
  /**
   * Interne lenker i navigasjonen.
   */
  internal?: ReactElement[];
  /**
   * Eksterne lenker i navigasjonen.
   */
  external?: ReactElement[];
};

const AppShellContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${appShellTokens.navigation.mobile.breakpoint}) {
    flex-direction: row;
  }
`;

const MainContent = styled.main`
  min-height: calc(100vh - ${appShellTokens.navigation.topBar.height});
  margin-top: ${appShellTokens.navigation.topBar.height};
  @media (min-width: ${appShellTokens.navigation.mobile.breakpoint}) {
    min-height: unset;
    margin-top: 0;
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
}: AppShellProps) => {
  return (
    <AppShellContainer>
      <Navigation
        user={user}
        userMenuItems={userMenuItems}
        version={version}
        internal={internal}
        external={external}
      />
      <MainContent>{children}</MainContent>
    </AppShellContainer>
  );
};
