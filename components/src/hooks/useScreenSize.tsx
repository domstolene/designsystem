import { useEffect, useState } from 'react';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { breakpoints } = ddsBaseTokens;

export enum ScreenSize {
  XSmall = 0,
  Small,
  Medium,
  Large,
  XLarge,
}

const screenSizesAndMediaQueries: [ScreenSize, string][] = [
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

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return screenSize;
};
