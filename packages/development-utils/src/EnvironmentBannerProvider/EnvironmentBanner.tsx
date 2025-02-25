import styles from './EnvironmentBanner.module.css';

export const environments = [
  'LOKAL',
  'TEST',
  'AT',
  'KURS',
  'PROD',
  'PROTOTYPE',
] as const;
export type Environment = (typeof environments)[number];

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

export const ENVIRONMENT_BANNER_HEIGHT = '2rem';

function cn(...classNames: Array<unknown>) {
  return classNames.filter(Boolean).join(' ');
}

export const EnvironmentBanner = ({
  environment,
  bannerPosition = 'fixed',
}: EnvironmentBannerProps) => {
  return (
    <div
      className={cn(
        styles.banner,
        styles[`banner--position-${bannerPosition}`],
        styles[`banner--environment-${environment}`],
      )}
    >
      {environment}
    </div>
  );
};

EnvironmentBanner.displayName = 'EnvironmentBanner';
