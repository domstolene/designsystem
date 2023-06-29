import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { calculateHeightWithLineHeight } from '@norges-domstoler/dds-core';
import { StaticTypographyType } from '@norges-domstoler/dds-typography';

import { ButtonSize } from '.';

const { colors, border, spacing, fontPackages, borderRadius, outerShadow } =
  ddsBaseTokens;

export const typographyTypes: {
  [k in ButtonSize]: StaticTypographyType;
} = {
  large: 'bodySans04',
  medium: 'bodySans02',
  small: 'bodySans01',
  tiny: 'supportingStyleTiny01',
};

const iconSizeTinyPx = calculateHeightWithLineHeight(
  fontPackages.supportingStyle_tiny_01.numbers.lineHeightNumber,
  fontPackages.supportingStyle_tiny_01.numbers.fontSizeNumber
);

const iconSizeSmallPx = calculateHeightWithLineHeight(
  fontPackages.body_sans_01.numbers.lineHeightNumber,
  fontPackages.body_sans_01.numbers.fontSizeNumber
);

const iconSizeMediumPx = calculateHeightWithLineHeight(
  fontPackages.body_sans_02.numbers.lineHeightNumber,
  fontPackages.body_sans_02.numbers.fontSizeNumber
);
const iconSizeLargePx = calculateHeightWithLineHeight(
  fontPackages.body_sans_04.numbers.lineHeightNumber,
  fontPackages.body_sans_04.numbers.fontSizeNumber
);

const svgOffset = spacing.SizesDdsSpacingLocalX0125NumberPx;

const filledButtonColors = {
  primary: {
    base: {
      color: colors.DdsColorNeutralsWhite,
      backgroundColor: colors.DdsColorInteractiveBase,
      borderColor: colors.DdsColorInteractiveBase,
    },
    hover: {
      base: {
        backgroundColor: colors.DdsColorInteractiveDark,
        borderColor: colors.DdsColorInteractiveDark,
      },
    },
    active: {
      base: {
        backgroundColor: colors.DdsColorInteractiveDarker,
        borderColor: colors.DdsColorInteractiveDarker,
      },
    },
  },
  secondary: {
    base: {
      color: colors.DdsColorNeutralsGray8,
      backgroundColor: colors.DdsColorNeutralsGray1,
      borderColor: colors.DdsColorNeutralsGray5,
    },
    hover: {
      base: {
        backgroundColor: colors.DdsColorNeutralsGray2,
        borderColor: colors.DdsColorNeutralsGray5,
      },
    },
    active: {
      base: {
        backgroundColor: colors.DdsColorNeutralsGray3,
        borderColor: colors.DdsColorNeutralsGray5,
      },
    },
  },
  danger: {
    base: {
      color: colors.DdsColorNeutralsWhite,
      backgroundColor: colors.DdsColorDangerBase,
      borderColor: colors.DdsColorDangerBase,
    },
    hover: {
      base: {
        backgroundColor: colors.DdsColorDangerDark,
        borderColor: colors.DdsColorDangerDark,
      },
    },
    active: {
      base: {
        backgroundColor: colors.DdsColorDangerDarker,
        borderColor: colors.DdsColorDangerDarker,
      },
    },
  },
};

const sizes = {
  large: {
    justIcon: {
      icon: {
        fontSize: `${iconSizeLargePx + svgOffset}px`,
        padding: spacing.SizesDdsSpacingLocalX1,
      },
      wrapper: {
        height: `${iconSizeLargePx}px`,
        width: `${iconSizeLargePx}px`,
      },
    },
    text: {
      padding: `${spacing.SizesDdsSpacingLocalX1} ${
        spacing.SizesDdsSpacingLocalX2NumberPx - 2
      }px`,
    },
    textAndIcon: { gap: spacing.SizesDdsSpacingLocalX1 },
  },
  medium: {
    justIcon: {
      icon: {
        fontSize: `${iconSizeMediumPx + svgOffset}px`,
        padding: spacing.SizesDdsSpacingLocalX075,
      },
      wrapper: {
        height: `${iconSizeMediumPx}px`,
        width: `${iconSizeMediumPx}px`,
      },
    },
    text: {
      padding: `${spacing.SizesDdsSpacingLocalX075} ${
        spacing.SizesDdsSpacingLocalX15NumberPx - 2
      }px`,
    },
    textAndIcon: { gap: spacing.SizesDdsSpacingLocalX075 },
  },
  small: {
    justIcon: {
      icon: {
        fontSize: `${iconSizeSmallPx + svgOffset}px`,
        padding: spacing.SizesDdsSpacingLocalX05,
      },
      wrapper: {
        height: `${iconSizeSmallPx}px`,
        width: `${iconSizeSmallPx}px`,
      },
    },
    text: {
      padding: `${spacing.SizesDdsSpacingLocalX05} ${
        spacing.SizesDdsSpacingLocalX1NumberPx - 2
      }px`,
    },
    textAndIcon: { gap: spacing.SizesDdsSpacingLocalX05 },
  },
  tiny: {
    justIcon: {
      icon: {
        fontSize: `${iconSizeTinyPx + svgOffset}px`,
        padding: spacing.SizesDdsSpacingLocalX025,
      },
      wrapper: {
        height: `${iconSizeTinyPx}px`,
        width: `${iconSizeTinyPx}px`,
      },
    },
    text: {
      padding: `${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX075}`,
    },
    textAndIcon: { gap: spacing.SizesDdsSpacingLocalX05 },
  },
};

const appearances = {
  filled: {
    base: {
      borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
      boxShadow: outerShadow.DdsShadow1Onlight,
    },
    purpose: {
      primary: {
        base: filledButtonColors.primary.base,
        hover: filledButtonColors.primary.hover.base,
        active: filledButtonColors.primary.active.base,
      },
      secondary: {
        base: filledButtonColors.secondary.base,
        hover: filledButtonColors.secondary.hover.base,
        active: filledButtonColors.secondary.active.base,
      },
      danger: {
        base: filledButtonColors.danger.base,
        hover: filledButtonColors.danger.hover.base,
        active: filledButtonColors.danger.active.base,
      },
    },
  },
  ghost: {
    base: {
      borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
    purpose: {
      primary: {
        base: {
          color: colors.DdsColorInteractiveBase,
          borderColor: colors.DdsColorInteractiveBase,
        },
        hover: {
          color: colors.DdsColorInteractiveDark,
          borderColor: colors.DdsColorInteractiveDark,
          boxShadow: `0 0 0 1px ${colors.DdsColorInteractiveDark}`,
        },
        active: {
          color: colors.DdsColorInteractiveDarker,
          borderColor: colors.DdsColorInteractiveDarker,
          boxShadow: `0 0 0 1px ${colors.DdsColorInteractiveDarker}`,
        },
      },
      secondary: {
        base: {
          color: colors.DdsColorNeutralsGray7,
          borderColor: colors.DdsColorNeutralsGray7,
        },
        hover: {
          color: colors.DdsColorNeutralsGray8,
          borderColor: colors.DdsColorNeutralsGray8,
          boxShadow: `0 0 0 1px ${colors.DdsColorNeutralsGray8}`,
        },
        active: {
          color: colors.DdsColorNeutralsGray9,
          borderColor: colors.DdsColorNeutralsGray9,
          boxShadow: `0 0 0 1px ${colors.DdsColorNeutralsGray9}`,
        },
      },
      danger: {
        base: {
          color: colors.DdsColorDangerBase,
          borderColor: colors.DdsColorDangerBase,
        },
        hover: {
          color: colors.DdsColorDangerDark,
          borderColor: colors.DdsColorDangerDark,
          boxShadow: `0 0 0 1px ${colors.DdsColorDangerDark}`,
        },
        active: {
          color: colors.DdsColorDangerDarkest,
          borderColor: colors.DdsColorDangerDarkest,
          boxShadow: `0 0 0 1px ${colors.DdsColorDangerDarkest}`,
        },
      },
    },
  },
  borderless: {
    base: {
      borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
      boxShadow: 'none',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textDecoration: 'underline',
      textDecorationColor: 'transparent',
    },
    purpose: {
      primary: {
        base: {
          color: colors.DdsColorInteractiveBase,
        },
        hover: {
          color: colors.DdsColorInteractiveDark,
          textDecorationColor: colors.DdsColorInteractiveDark,
        },
        active: {
          color: colors.DdsColorInteractiveDarker,
          textDecorationColor: colors.DdsColorInteractiveDarker,
        },
        icon: {
          hover: {
            borderColor: colors.DdsColorInteractiveDark,
            boxShadow: `0 0 0 1px ${colors.DdsColorInteractiveDark}`,
          },
          active: {
            borderColor: colors.DdsColorInteractiveDarker,
            boxShadow: `0 0 0 1px ${colors.DdsColorInteractiveDarker}`,
          },
        },
      },
      secondary: {
        base: { color: colors.DdsColorNeutralsGray7 },
        hover: {
          color: colors.DdsColorNeutralsGray8,
          textDecorationColor: colors.DdsColorNeutralsGray8,
        },
        active: {
          color: colors.DdsColorNeutralsGray9,
          textDecorationColor: colors.DdsColorNeutralsGray9,
        },
        icon: {
          hover: {
            borderColor: colors.DdsColorNeutralsGray8,
            boxShadow: `0 0 0 1px ${colors.DdsColorNeutralsGray8}`,
          },
          active: {
            borderColor: colors.DdsColorNeutralsGray9,
            boxShadow: `0 0 0 1px ${colors.DdsColorNeutralsGray9}`,
          },
        },
      },
      danger: {
        base: { color: colors.DdsColorDangerBase },
        hover: {
          color: colors.DdsColorDangerDarker,
          textDecorationColor: colors.DdsColorDangerDarker,
        },
        active: {
          color: colors.DdsColorDangerDarkest,
          textDecorationColor: colors.DdsColorDangerDarkest,
        },
        icon: {
          hover: {
            borderColor: colors.DdsColorDangerDark,
            boxShadow: `0 0 0 1px ${colors.DdsColorDangerDark}`,
          },
          active: {
            borderColor: colors.DdsColorDangerDarker,
            boxShadow: `0 0 0 1px ${colors.DdsColorDangerDarker}`,
          },
        },
      },
    },
  },
  rounded: {
    base: { borderRadius: '100px', boxShadow: outerShadow.DdsShadow1Onlight },
    purpose: {
      primary: {
        base: filledButtonColors.primary.base,
        hover: filledButtonColors.primary.hover.base,
        active: filledButtonColors.primary.active.base,
      },
      secondary: {
        base: filledButtonColors.secondary.base,
        hover: filledButtonColors.secondary.hover.base,
        active: filledButtonColors.secondary.active.base,
      },
      danger: {
        base: filledButtonColors.danger.base,
        hover: filledButtonColors.danger.hover.base,
        active: filledButtonColors.danger.active.base,
      },
    },
  },
};

const button = {
  base: {
    border: `${border.BordersDdsBorderStyleLightStrokeWeight} solid`,
  },
  sizes,
  appearances,
};

export const buttonTokens = {
  button,
};
