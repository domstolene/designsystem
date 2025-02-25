import type { ReactNode } from 'react';

import {
  type BannerPosition,
  type Environment,
  EnvironmentBanner,
} from './EnvironmentBanner';
import styles from './EnvironmentBanner.module.css';

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
    <div className={styles['banner-wrapper']}>
      <EnvironmentBanner
        environment={environment}
        bannerPosition={bannerPosition}
      />
      {children}
    </div>
  );
};

EnvironmentBannerProvider.displayName = 'EnvironmentBannerProvider';
