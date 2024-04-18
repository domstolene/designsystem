import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { calculateHeightWithLineHeight } from '../../utils';

const { fontPackages } = ddsBaseTokens;

const iconSizeTinyPx = calculateHeightWithLineHeight(
  fontPackages.supportingStyle_tiny_01.numbers.lineHeightNumber,
  fontPackages.supportingStyle_tiny_01.numbers.fontSizeNumber,
);

const iconSizeSmallPx = calculateHeightWithLineHeight(
  fontPackages.body_sans_01.numbers.lineHeightNumber,
  fontPackages.body_sans_01.numbers.fontSizeNumber,
);

const iconSizeMediumPx = calculateHeightWithLineHeight(
  fontPackages.body_sans_02.numbers.lineHeightNumber,
  fontPackages.body_sans_02.numbers.fontSizeNumber,
);
const iconSizeLargePx = calculateHeightWithLineHeight(
  fontPackages.body_sans_04.numbers.lineHeightNumber,
  fontPackages.body_sans_04.numbers.fontSizeNumber,
);

const button = {
  large: {
    spinner: {
      size: `${iconSizeLargePx}px`,
    },
  },
  medium: {
    spinner: {
      size: `${iconSizeMediumPx}px`,
    },
  },
  small: {
    spinner: {
      size: `${iconSizeSmallPx}px`,
    },
  },
  tiny: {
    spinner: {
      size: `${iconSizeTinyPx}px`,
    },
  },
};

export const buttonTokens = {
  button,
};
