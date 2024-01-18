import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { useEffect, useState } from 'react';

const { breakpoints } = ddsBaseTokens;

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
    `only screen and (min-width: ${breakpoints.DdsBreakpointXl})`,
  ],
  [
    ScreenSize.Large,
    `only screen and (min-width: ${breakpoints.DdsBreakpointLg})`,
  ],
  [
    ScreenSize.Medium,
    `only screen and (min-width: ${breakpoints.DdsBreakpointMd})`,
  ],
  [
    ScreenSize.Small,
    `only screen and (min-width: ${breakpoints.DdsBreakpointSm})`,
  ],
  [
    ScreenSize.XSmall,
    `only screen and (min-width: ${breakpoints.DdsBreakpointXs})`,
  ],
];

/**
 * Sjekker skjermstørrelsen basert på brekkpunkter definerte i designsystemet. Eksempel på bruk:
 * ```
 * const MyComponent = () => {
 *  const screenSize = useScreenSize();
 *  const isSmallScreen = screenSize === ScreenSize.Small;
 *
 *  return <div className={isSmallScreen && 'smallDiv'} >innhold</div>
 * }
 * ```
 * @returns den aktuelle skjermstørrelsen basert på {@link ScreenSize}.
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
