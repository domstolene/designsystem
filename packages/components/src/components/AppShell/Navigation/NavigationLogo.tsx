import styled from 'styled-components';

import { appShellTokens } from '../AppShell.tokens';
const { navigation: navTokens } = appShellTokens;

const fontPackage = (small?: boolean) => {
  if (small) {
    return navTokens.logoAndVersion.logo.small;
  }

  return navTokens.logoAndVersion.logo;
};

export const NavigationLogo = styled.a<{ small?: boolean }>`
  font-size: ${({ small }) => fontPackage(small).fontSize};
  font-style: ${({ small }) => fontPackage(small).fontStyle};
  font-family: ${({ small }) => fontPackage(small).fontFamily};
  font-weight: ${({ small }) => fontPackage(small).fontWeight};
  line-height: ${({ small }) => fontPackage(small).lineHeight};
  letter-spacing: ${({ small }) => fontPackage(small).letterSpacing};
  text-align: middle;
`;
