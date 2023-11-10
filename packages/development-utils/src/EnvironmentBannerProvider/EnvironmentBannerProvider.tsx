import styled from 'styled-components';
import type { ReactNode } from 'react';
import {
  BannerPosition,
  ENVIRONMENT_BANNER_HEIGHT,
  Environment,
  EnvironmentBanner,
} from './EnvironmentBanner';

export interface EnvironmentBannerProviderProps {
  /**
   * Miljøet som applikasjonen kjører i.
   * Hvis miljøet er PROD, vises ikke banneren.
   */
  environment: Environment;
  /**
   * Applikasjonskoden din.
   */
  children: ReactNode;
  /**
   * @default 'fixed'
   */
  bannerPosition?: BannerPosition;
}

const AppWrapper = styled.div`
  padding-top: ${ENVIRONMENT_BANNER_HEIGHT};
  position: relative;
`;

/**
 * Viser et banner med miljøet applikasjonen kjører i.
 */
export const EnvironmentBannerProvider = ({
  environment,
  children,
  bannerPosition = 'fixed',
}: EnvironmentBannerProviderProps) => {
  if (environment === 'PROD') {
    return <>{children}</>;
  }

  return (
    <AppWrapper>
      <EnvironmentBanner
        environment={environment}
        bannerPosition={bannerPosition}
      />
      {children}
    </AppWrapper>
  );
};

EnvironmentBannerProvider.displayName = 'EnvironmentBannerProvider';
