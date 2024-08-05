import {
  Button,
  CloseIcon,
  MenuIcon,
  OverflowMenu,
  OverflowMenuButton,
  type OverflowMenuButtonProps,
  OverflowMenuGroup,
  OverflowMenuLink,
  type OverflowMenuLinkProps,
  type SvgProps,
} from '@norges-domstoler/dds-components';
import { ENVIRONMENT_BANNER_HEIGHT } from '@norges-domstoler/development-utils';
import styled from 'styled-components';

import { EmbeteIcon, type EmbeteType } from './EmbeteIcon';
import { NavigationLogo } from './NavigationLogo';
import { type UserMenuItem } from '../AppShell';
import { appShellTokens } from '../AppShell.tokens';

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
  margin-top: ${navTokens.topBar.marginTop};
`;

const IconButton = styled(Button).attrs({
  purpose: 'tertiary',
})`
  color: ${navTokens.topBar.buttonTextColor};
  > :first-child {
    font-size: 1.65rem;
  }
  @media (max-width: ${navTokens.mobile.breakpoint}) {
    border: 0;
    box-shadow: none;
    padding: 12px !important;
    &:hover,
    &:active {
      color: ${navTokens.topBar.buttonTextColor} !important;
      text-decoration-color: ${navTokens.topBar.buttonTextColor};
      background-color: ${navTokens.topBar.button.hover
        .backgroundColor} !important;
    }
    gap: 0 !important;
  }
`;

const IconButtonText = styled.span`
  display: none; // Ikke vis tekst på mobil
  width: 0;
`;

const Bar = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'environmentBannerActive',
})<{ environmentBannerActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${navTokens.topBar.gap};
  width: 100vw;
  height: ${navTokens.topBar.height};
  color: ${navTokens.color};
  background-color: ${navTokens.backgroundColor};
  box-sizing: border-box;
  z-index: 99;

  position: absolute;
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

interface TopBarProps {
  user: User;
  userMenuItems?: Array<UserMenuItem>;
  isNavigationOpen: boolean;
  onNavigationOpenChange: (isOpen: boolean) => void;
  environmentBannerActive: boolean;
  title: string;
}

export interface User {
  /**Brukerens fulle navn (for- og etternavn). */
  name: string;
  /**Det aktive embetet til brukeren. */
  embete: Embete;
}

export interface Embete {
  /**Navnet på embetet. */
  name: string;
  /**Hvilken instans embetet er. */
  type: EmbeteType;
}

export const TopBar = ({
  user,
  userMenuItems,
  isNavigationOpen,
  onNavigationOpenChange,
  environmentBannerActive,
  title,
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
        <NavigationLogo small>{title}</NavigationLogo>
      </LogoBurgerGroup>
      <ActionButtonGroup>
        <OverflowMenuGroup>
          <IconButton icon={Icon}>
            <IconButtonText>{user.name}</IconButtonText>
          </IconButton>
          <OverflowMenu>
            {userMenuItems?.map((item, index) => {
              const { children, ...rest } = item;
              if (rest.href) {
                return (
                  <OverflowMenuLink
                    {...(rest as OverflowMenuLinkProps)}
                    key={index}
                  >
                    {children}
                  </OverflowMenuLink>
                );
              }
              return (
                <OverflowMenuButton
                  {...(rest as OverflowMenuButtonProps)}
                  key={index}
                >
                  {children}
                </OverflowMenuButton>
              );
            })}
          </OverflowMenu>
        </OverflowMenuGroup>
      </ActionButtonGroup>
    </Bar>
  );
};
