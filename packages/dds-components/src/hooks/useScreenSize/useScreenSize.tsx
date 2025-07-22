import { useEffect, useState } from 'react';

export enum ScreenSize {
  XSmall = 0,
  Small,
  Medium,
  Large,
  XLarge,
}

const screenSizesAndMediaQueries: Array<[ScreenSize, string]> = [
  [
    ScreenSize.XLarge,
    /** var(--dds-breakpoint-xl) */
    `only screen and (min-width: 1920px)`,
  ],
  [
    ScreenSize.Large,
    /** var(--dds-breakpoint-lg) */
    `only screen and (min-width: 1280px)`,
  ],
  [
    ScreenSize.Medium,
    /** var(--dds-breakpoint-md) */
    `only screen and (min-width: 960px)`,
  ],
  [
    ScreenSize.Small,
    /** var(--dds-breakpoint-sm) */
    `only screen and (min-width: 600px)`,
  ],
  [
    ScreenSize.XSmall,
    /** var(--dds-breakpoint-xs) */
    `only screen and (min-width: 1px)`,
  ],
];

/**
 * Sjekker skjermstørrelsen basert på brekkpunkter definerte i designsystemet.
 * @returns den aktuelle skjermstørrelsen basert på {@link ScreenSize}.
 * @example
 * ```tsx
 * function MyComponent() {
 *  const screenSize = useScreenSize();
 *  const isSmallScreen = screenSize === ScreenSize.Small;
 *
 *  return <div className={isSmallScreen && 'smallDiv'} >innhold</div>
 * }
 * ```
 */

export const useScreenSize = function () {
  const [screenSize, setScreenSize] = useState(ScreenSize.Large);

  useEffect(() => {
    function listener() {
      for (const [screenSize, mediaQuery] of screenSizesAndMediaQueries) {
        if (window.matchMedia(mediaQuery).matches) {
          setScreenSize(screenSize);
          return;
        }
      }
    }
    listener();

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return screenSize;
};
