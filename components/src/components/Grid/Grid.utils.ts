import { ScreenSize } from '../../hooks';

export type ScreenSizeLiteral = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const getLiteralScreenSize = (
  screenSize: ScreenSize
): ScreenSizeLiteral => {
  switch (screenSize) {
    case ScreenSize.XLarge:
      return 'xl';
    case ScreenSize.Large:
      return 'lg';
    case ScreenSize.Medium:
      return 'md';
    case ScreenSize.Small:
      return 'sm';
    case ScreenSize.XSmall:
      return 'xs';
  }
};
