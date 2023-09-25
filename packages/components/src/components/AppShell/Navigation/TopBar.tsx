import styled from 'styled-components';
import { MenuIcon, CloseIcon, SvgProps } from '@norges-domstoler/dds-icons';
import { ENVIRONMENT_BANNER_HEIGHT } from '@norges-domstoler/development-utils';

import { EmbeteIcon, EmbeteType } from './EmbeteIcon';
import { appShellTokens } from '../AppShell.tokens';
import { NavigationLogo } from './NavigationLogo';
import { Button } from '../../Button';
import {
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuProps,
} from '../../OverflowMenu';

const { navigation: navTokens, floatingActionButtons } = appShellTokens;

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
  > :first-child {
    font-size: 1.65rem;
  }
  @media (max-width: ${navTokens.mobile.breakpoint}) {
    border: 0;
    box-shadow: none;
    padding: 12px;
    &:hover,
    &:active {
      color: ${navTokens.topBar.buttonTextColor};
      text-decoration-color: ${navTokens.topBar.buttonTextColor};
      box-shadow: none;
    }
    gap: 0;
  }
`;

const IconButtonText = styled.span`
  display: none; // Ikke vis tekst på mobil
  width: 0;
`;

const Bar = styled.div<{ environmentBannerActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${navTokens.topBar.gap};
  width: 100vw;
  height: ${navTokens.topBar.height};
  color: ${navTokens.color};
  background-color: ${navTokens.backgroundColor};
  box-sizing: border-box;
  z-index: 101;

  position: fixed;
  top: ${({ environmentBannerActive }) =>
    environmentBannerActive ? ENVIRONMENT_BANNER_HEIGHT : '0'};
  left: 0;
  right: 0;

  @media (min-width: ${navTokens.mobile.breakpoint}) {
    justify-content: flex-end;
    background-color: transparent;
    margin-left: ${navTokens.width};
    width: calc(100vw - ${navTokens.width});

    pointer-events: none;
    & > * {
      pointer-events: initial;
    }

    ${LogoBurgerGroup} {
      display: none;
    }

    ${ActionButtonGroup} {
      padding-right: calc(2 * ${navTokens.topBar.gap});
      gap: ${floatingActionButtons.gap};
    }

    ${IconButton} {
      background-color: ${floatingActionButtons.backgroundColor};
      color: ${floatingActionButtons.textColor};
      box-shadow: 8px 16px 32px 0px rgba(0, 0, 0, 0.1);
      border-radius: ${floatingActionButtons.borderRadius};

      ${IconButtonText} {
        display: unset;
      }
    }
  }
`;

type TopBarProps = {
  user: User;
  userMenuItems?: OverflowMenuProps['items'];
  isNavigationOpen: boolean;
  onNavigationOpenChange: (isOpen: boolean) => void;
  environmentBannerActive: boolean;
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
  environmentBannerActive,
}: TopBarProps) => {
  const Icon = (props: SvgProps) => (
    <EmbeteIcon {...props} type={user.embete.type} />
  );

  return (
    <Bar environmentBannerActive={environmentBannerActive}>
      <LogoBurgerGroup>
        <IconButton
          icon={isNavigationOpen ? CloseIcon : MenuIcon}
          onClick={() => onNavigationOpenChange(!isNavigationOpen)}
        />
        <NavigationLogo small>Lovisa</NavigationLogo>
      </LogoBurgerGroup>
      <ActionButtonGroup>
        <OverflowMenuGroup>
          <IconButton
            icon={Icon}
            label={<IconButtonText>{user.name}</IconButtonText>}
          />
          <OverflowMenu items={userMenuItems} />
        </OverflowMenuGroup>
      </ActionButtonGroup>
    </Bar>
  );
};