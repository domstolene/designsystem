import styled from 'styled-components';

import { appShellTokens } from '../AppShell.tokens';
const { navigation: navTokens } = appShellTokens;

const fontPackage = (small?: boolean) => {
  if (small) {
    return navTokens.logoAndVersion.logo.small;
  }

  return navTokens.logoAndVersion.logo;
};

export const NavigationLogo = styled.a.withConfig({
  shouldForwardProp: prop => prop !== 'small',
})<{ small?: boolean }>`
  font: ${({ small }) => fontPackage(small).font};
  font-weight: ${({ small }) => fontPackage(small).fontWeight};
  letter-spacing: ${({ small }) => fontPackage(small).letterSpacing};
  text-align: middle;
`;
