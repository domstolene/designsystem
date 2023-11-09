import styled from 'styled-components';

export const environments = ['LOKAL', 'TEST', 'AT', 'KURS', 'PROD'] as const;
export type Environment = (typeof environments)[number];
type NonProdEnvironment = Exclude<Environment, 'PROD'>;

export type BannerPosition = 'fixed' | 'absolute';

export interface EnvironmentBannerProps {
  /**
   * Miljøet som applikasjonen kjører i.
   * Hvis miljøet er PROD, vises ikke banneren.
   */
  environment: Environment;
  /**
   * @default 'fixed'
   */
  bannerPosition?: BannerPosition;
}

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

export const ENVIRONMENT_BANNER_HEIGHT = '2rem';

const Banner = styled.div<{
  environment: NonProdEnvironment;
  position: 'fixed' | 'absolute';
}>`
  background-color: ${({ environment }) =>
    getBannerColor(environment).background};
  padding: 8px;
  color: ${({ environment }) => getBannerColor(environment).text};
  width: 100%;
  height: ${ENVIRONMENT_BANNER_HEIGHT};
  text-align: center;
  font-weight: bolder;
  letter-spacing: 0.15em;
  z-index: 9999;

  position: ${({ position }) => position};
  top: 0;
  left: 0;
  right: 0;
`;

export const EnvironmentBanner = ({
  environment,
  bannerPosition = 'fixed',
}: EnvironmentBannerProps) => {
  if (environment === 'PROD') {
    return null;
  }

  return (
    <Banner environment={environment} position={bannerPosition}>
      {environment}
    </Banner>
  );
};

EnvironmentBanner.displayName = 'EnvironmentBanner';
