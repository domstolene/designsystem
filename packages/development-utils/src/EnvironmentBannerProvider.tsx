import styled from 'styled-components';
import type { ReactNode } from 'react';

export const environments = ['LOKAL', 'TEST', 'AT', 'KURS', 'PROD'] as const;
export type Environment = (typeof environments)[number];
type NonProdEnvironment = Exclude<Environment, 'PROD'>;

type BannerPosition = 'fixed' | 'absolute';

export type EnvironmentBannerProps = {
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
};

function getBannerColor(environment: NonProdEnvironment): {
  background: string;
  text: string;
} {
  switch (environment) {
    case 'TEST':
      return { background: '#F957A5', text: '#5E032F' };
    case 'AT':
      return { background: '#2CC3F2', text: '#064B60' };
    case 'KURS':
      return { background: '#7AB73D', text: '#2B4116' };
    case 'LOKAL':
      return { background: '#F2D32C', text: '#695B07' };
  }
}

const bannerHeight = '2rem';

const Banner = styled.div<{
  environment: NonProdEnvironment;
  position: 'fixed' | 'absolute';
}>`
  background-color: ${({ environment }) =>
    getBannerColor(environment).background};
  padding: 8px;
  color: ${({ environment }) => getBannerColor(environment).text};
  width: 100%;
  height: ${bannerHeight};
  text-align: center;
  font-weight: bolder;
  letter-spacing: 0.15em;
  z-index: 1000;

  position: ${({ position }) => position};
  top: 0;
  left: 0;
  right: 0;
`;

const AppWrapper = styled.div`
  padding-top: ${bannerHeight};
  position: relative;
`;

/**
 * Viser et banner med miljøet applikasjonen kjører i.
 */
export const EnvironmentBannerProvider = ({
  environment,
  children,
  bannerPosition = 'fixed',
}: EnvironmentBannerProps) => {
  if (environment === 'PROD') {
    return <>{children}</>;
  }

  return (
    <AppWrapper>
      <Banner environment={environment} position={bannerPosition}>
        {environment}
      </Banner>
      {children}
    </AppWrapper>
  );
};
