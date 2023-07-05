import { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

import { Navigation } from './Navigation/Navigation';

export type AppShellProps = PropsWithChildren<{
  /**Versjon på appen på formatet 0.0.0 */
  version?: string;
  navigation: AppShellNavigationProps;
}>;

export type AppShellNavigationProps = {
  /**Interne lenker i navigasjonen. */
  internal?: ReactElement[];
  /**Eksterne lenker i navigasjonen. */
  external?: ReactElement[];
};

const AppShellContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AppShell = ({
  children,
  version = '',
  navigation: { internal = [], external = [] },
}: AppShellProps) => {
  return (
    <AppShellContainer>
      <Navigation version={version} internal={internal} external={external} />
      {children}
    </AppShellContainer>
  );
};
