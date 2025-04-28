import { ScreenSize } from '../../../hooks';
import { type Breakpoint } from '../../layout/common/Responsive.types';

export const getLiteralScreenSize = (screenSize: ScreenSize): Breakpoint => {
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
