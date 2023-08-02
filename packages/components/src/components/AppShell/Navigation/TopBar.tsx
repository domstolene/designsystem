import styled from 'styled-components';
import { MenuIcon, CloseIcon, SvgProps } from '@norges-domstoler/dds-icons';

import { EmbeteIcon, EmbeteType } from './EmbeteIcon';
import { appShellTokens } from '../AppShell.tokens';
import { NavigationLogo } from './NavigationLogo';
import { Button } from '../../Button';
import {
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuProps,
} from '../../OverflowMenu';

const { navigation: navTokens } = appShellTokens;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${navTokens.topBar.gap};
  width: 100vw;
  height: ${navTokens.topBar.height};
  color: ${navTokens.color};
  background-color: ${navTokens.backgroundColor};
  box-sizing: border-box;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (min-width: ${navTokens.mobile.breakpoint}) {
    display: none;
  }
`;

const LogoBurgerGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${navTokens.topBar.gap};
`;

const ActionButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${navTokens.topBar.gap};
`;

const IconButton = styled(Button).attrs({
  appearance: 'borderless',
  purpose: 'secondary',
})`
  color: ${navTokens.topBar.buttonTextColor};
`;

type TopBarProps = {
  user: User;
  userMenuItems?: OverflowMenuProps['items'];
  isNavigationOpen: boolean;
  onNavigationOpenChange: (isOpen: boolean) => void;
};

export type User = {
  /**Brukerens fulle navn (for- og etternavn). */
  name: string;
  /**Det aktive embetet til brukeren. */
  embete: Embete;
};

export type Embete = {
  /**Navnet på embetet. */
  name: string;
  /**Hvilken instans embetet er. */
  type: EmbeteType;
};

export const TopBar = ({
  user,
  userMenuItems,
  isNavigationOpen,
  onNavigationOpenChange,
}: TopBarProps) => {
  const Icon = (props: SvgProps) => (
    <EmbeteIcon {...props} type={user.embete.type} />
  );

  return (
    <Bar>
      <LogoBurgerGroup>
        <IconButton
          icon={isNavigationOpen ? CloseIcon : MenuIcon}
          onClick={() => onNavigationOpenChange(!isNavigationOpen)}
        />
        <NavigationLogo small>Lovisa</NavigationLogo>
      </LogoBurgerGroup>
      <ActionButtonGroup>
        <OverflowMenuGroup>
          <IconButton icon={Icon} />
          <OverflowMenu items={userMenuItems} />
        </OverflowMenuGroup>
      </ActionButtonGroup>
    </Bar>
  );
};
