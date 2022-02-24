import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { calculateHeightWithLineHeight } from '../../helpers/functions';

const {
  colors: Colors,
  border: Border,
  spacing: Spacing,
  fontPackages: FontPackages,
  borderRadius: BorderRadius,
  outerShadow: OuterShadow
} = ddsBaseTokens;

const justIconSmallBase: CSSObject = {
  ...FontPackages.supportingStyle_inputtext_03.base,
  padding: Spacing.SizesDdsSpacingLocalX05
};

const justIconWrapperSmallBase: CSSObject = {
  height: `${calculateHeightWithLineHeight(
    FontPackages.body_sans_01.numbers.lineHeightNumber,
    FontPackages.body_sans_01.numbers.fontSizeNumber
  )}px`,
  width: `${calculateHeightWithLineHeight(
    FontPackages.body_sans_01.numbers.lineHeightNumber,
    FontPackages.body_sans_01.numbers.fontSizeNumber
  )}px`
};

const textSmallBase: CSSObject = {
  ...FontPackages.body_sans_01.base,
  padding: `${Spacing.SizesDdsSpacingLocalX05} ${
    Spacing.SizesDdsSpacingLocalX1NumberPx - 2
  }px`
};

const justIconMediumBase: CSSObject = {
  ...FontPackages.heading_sans_03.base,
  padding: Spacing.SizesDdsSpacingLocalX075
};

const justIconWrapperMediumBase: CSSObject = {
  height: `${calculateHeightWithLineHeight(
    FontPackages.body_sans_02.numbers.lineHeightNumber,
    FontPackages.body_sans_02.numbers.fontSizeNumber
  )}px`,
  width: `${calculateHeightWithLineHeight(
    FontPackages.body_sans_02.numbers.lineHeightNumber,
    FontPackages.body_sans_02.numbers.fontSizeNumber
  )}px`
};

const textMediumBase: CSSObject = {
  ...FontPackages.body_sans_02.base,
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${
    Spacing.SizesDdsSpacingLocalX15NumberPx - 2
  }px`
};

const justIconLargeBase: CSSObject = {
  ...FontPackages.heading_sans_04.base,
  padding: Spacing.SizesDdsSpacingLocalX1
};

const justIconWrapperLargeBase: CSSObject = {
  height: `${calculateHeightWithLineHeight(
    FontPackages.supportingStyle_inputtext_03.numbers.lineHeightNumber,
    FontPackages.supportingStyle_inputtext_03.numbers.fontSizeNumber
  )}px`,
  width: `${calculateHeightWithLineHeight(
    FontPackages.supportingStyle_inputtext_03.numbers.lineHeightNumber,
    FontPackages.supportingStyle_inputtext_03.numbers.fontSizeNumber
  )}px`
};

const textLargeBase: CSSObject = {
  ...FontPackages.supportingStyle_inputtext_03.base,
  padding: `${Spacing.SizesDdsSpacingLocalX1} ${
    Spacing.SizesDdsSpacingLocalX2NumberPx - 2
  }px`
};

const justIconTinyBase: CSSObject = {
  ...FontPackages.body_sans_04.base,
  padding: Spacing.SizesDdsSpacingLocalX025
};

const justIconWrapperTinyBase: CSSObject = {
  height: `${calculateHeightWithLineHeight(
    FontPackages.supportingStyle_tiny_01.numbers.lineHeightNumber,
    FontPackages.supportingStyle_tiny_01.numbers.fontSizeNumber
  )}px`,
  width: `${calculateHeightWithLineHeight(
    FontPackages.supportingStyle_tiny_01.numbers.lineHeightNumber,
    FontPackages.supportingStyle_tiny_01.numbers.fontSizeNumber
  )}px`
};

const textTinyBase: CSSObject = {
  ...FontPackages.supportingStyle_tiny_01.base,
  padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX075}`
};

const buttonBase: CSSObject = {
  border: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid`
};

const filledButtonColors = {
  primary: {
    base: {
      color: Colors.DdsColorNeutralsWhite,
      backgroundColor: Colors.DdsColorInteractiveBase,
      borderColor: Colors.DdsColorInteractiveBase
    },
    hover: {
      base: {
        backgroundColor: Colors.DdsColorInteractiveDark,
        borderColor: Colors.DdsColorInteractiveDark
      }
    },
    active: {
      base: {
        backgroundColor: Colors.DdsColorInteractiveDarker,
        borderColor: Colors.DdsColorInteractiveDarker
      }
    }
  },
  secondary: {
    base: {
      color: Colors.DdsColorNeutralsGray8,
      backgroundColor: Colors.DdsColorNeutralsGray1,
      borderColor: Colors.DdsColorNeutralsGray5
    },
    hover: {
      base: {
        backgroundColor: Colors.DdsColorNeutralsGray2
      }
    },
    active: {
      base: {
        backgroundColor: Colors.DdsColorNeutralsGray3
      }
    }
  },
  danger: {
    base: {
      color: Colors.DdsColorNeutralsWhite,
      backgroundColor: Colors.DdsColorDangerBase,
      borderColor: Colors.DdsColorDangerBase
    },
    hover: {
      base: {
        backgroundColor: Colors.DdsColorDangerDark,
        borderColor: Colors.DdsColorDangerDark
      }
    },
    active: {
      base: {
        backgroundColor: Colors.DdsColorDangerDarker,
        borderColor: Colors.DdsColorDangerDarker
      }
    }
  }
};

const filledBase: CSSObject = {
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  boxShadow: OuterShadow.DdsShadow1Onlight
};

const filledPrimaryBase: CSSObject = {
  ...filledButtonColors.primary.base
};

const filledPrimaryHoverBase: CSSObject = {
  ...filledButtonColors.primary.hover.base
};

const filledPrimaryActiveBase: CSSObject = {
  ...filledButtonColors.primary.active.base
};

const filledSecondaryBase: CSSObject = {
  ...filledButtonColors.secondary.base
};

const filledSecondaryHoverBase: CSSObject = {
  ...filledButtonColors.secondary.hover.base
};

const filledSecondaryActiveBase: CSSObject = {
  ...filledButtonColors.secondary.active.base
};

const filledDangerBase: CSSObject = {
  ...filledButtonColors.danger.base
};

const filledDangerHoverBase: CSSObject = {
  ...filledButtonColors.danger.hover.base
};

const filledDangerActiveBase: CSSObject = {
  ...filledButtonColors.danger.active.base
};

const roundedPrimaryBase: CSSObject = {
  ...filledButtonColors.primary.base
};

const roundedPrimaryHoverBase: CSSObject = {
  ...filledButtonColors.primary.hover.base
};

const roundedPrimaryActiveBase: CSSObject = {
  ...filledButtonColors.primary.active.base
};

const roundedSecondaryBase: CSSObject = {
  ...filledButtonColors.secondary.base
};

const roundedSecondaryHoverBase: CSSObject = {
  ...filledButtonColors.secondary.hover.base
};

const roundedSecondaryActiveBase: CSSObject = {
  ...filledButtonColors.secondary.active.base
};
const roundedDangerBase: CSSObject = {
  ...filledButtonColors.danger.base
};

const roundedDangerHoverBase: CSSObject = {
  ...filledButtonColors.danger.hover.base
};

const roundedDangerActiveBase: CSSObject = {
  ...filledButtonColors.danger.active.base
};

const borderlessBase: CSSObject = {
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  boxShadow: 'none',
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  textDecoration: 'underline',
  textDecorationColor: 'transparent'
};

const borderlessPrimaryBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase,
  taxtDecorationColor: Colors.DdsColorInteractiveBase
};

const borderlessPrimaryHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveDark,
  textDecorationColor: Colors.DdsColorInteractiveDark
};

const borderlessPrimaryActiveBase: CSSObject = {
  color: Colors.DdsColorInteractiveDarker,
  textDecorationColor: Colors.DdsColorInteractiveDarker
};

const borderlessPrimaryIconHoverBase: CSSObject = {
  borderColor: Colors.DdsColorInteractiveDark,
  boxShadow: `0 0 0 1px ${Colors.DdsColorInteractiveDark}`
};

const borderlessPrimaryIconActiveBase: CSSObject = {
  borderColor: Colors.DdsColorInteractiveDarker,
  boxShadow: `0 0 0 1px ${Colors.DdsColorInteractiveDarker}`
};

const borderlessSecondaryBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray7
};

const borderlessSecondaryHoverBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray8,
  textDecorationColor: Colors.DdsColorNeutralsGray8
};

const borderlessSecondaryActiveBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray9,
  textDecorationColor: Colors.DdsColorNeutralsGray9
};

const borderlessSecondaryIconHoverBase: CSSObject = {
  borderColor: Colors.DdsColorNeutralsGray8,
  boxShadow: `0 0 0 1px ${Colors.DdsColorNeutralsGray8}`
};

const borderlessSecondaryIconActiveBase: CSSObject = {
  borderColor: Colors.DdsColorNeutralsGray9,
  boxShadow: `0 0 0 1px ${Colors.DdsColorNeutralsGray9}`
};

const borderlessDangerBase: CSSObject = {
  color: Colors.DdsColorDangerBase
};

const borderlessDangerHoverBase: CSSObject = {
  color: Colors.DdsColorDangerDarker,
  textDecorationColor: Colors.DdsColorDangerDarker
};

const borderlessDangerActiveBase: CSSObject = {
  color: Colors.DdsColorDangerDarkest,
  textDecorationColor: Colors.DdsColorDangerDarkest
};

const borderlessDangerIconHoverBase: CSSObject = {
  borderColor: Colors.DdsColorDangerDark,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerDark}`
};

const borderlessDangerIconActiveBase: CSSObject = {
  borderColor: Colors.DdsColorDangerDarker,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerDarker}`
};

const ghostBase: CSSObject = {
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  boxShadow: 'none',
  backgroundColor: 'transparent'
};

const ghostPrimaryBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase,
  borderColor: Colors.DdsColorInteractiveBase
};

const ghostPrimaryHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveDark,
  borderColor: Colors.DdsColorInteractiveDark,
  boxShadow: `0 0 0 1px ${Colors.DdsColorInteractiveDark}`
};

const ghostPrimaryActiveBase: CSSObject = {
  color: Colors.DdsColorInteractiveDarker,
  borderColor: Colors.DdsColorInteractiveDarker,
  boxShadow: `0 0 0 1px ${Colors.DdsColorInteractiveDarker}`
};

const ghostSecondaryBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray7,
  borderColor: Colors.DdsColorNeutralsGray7
};

const ghostSecondaryHoverBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray8,
  borderColor: Colors.DdsColorNeutralsGray8,
  boxShadow: `0 0 0 1px ${Colors.DdsColorNeutralsGray8}`
};

const ghostSecondaryActiveBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray9,
  borderColor: Colors.DdsColorNeutralsGray9,
  boxShadow: `0 0 0 1px ${Colors.DdsColorNeutralsGray9}`
};
const ghostDangerBase: CSSObject = {
  color: Colors.DdsColorDangerBase,
  borderColor: Colors.DdsColorDangerBase
};

const ghostDangerHoverBase: CSSObject = {
  color: Colors.DdsColorDangerDark,
  borderColor: Colors.DdsColorDangerDark,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerDark}`
};

const ghostDangerActiveBase: CSSObject = {
  color: Colors.DdsColorDangerDarkest,
  borderColor: Colors.DdsColorDangerDarkest,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerDarkest}`
};

const roundedBase: CSSObject = {
  borderRadius: '100px',
  boxShadow: OuterShadow.DdsShadow1Onlight
};

export const buttonTokens = {
  base: buttonBase,
  focusOutline: {
    color: Border.BordersDdsBorderFocusBaseStroke,
    width: Border.BordersDdsBorderStyleLightStrokeWeight
  },
  sizes: {
    small: {
      justIcon: {
        base: justIconSmallBase
      },
      justIconWrapper: {
        base: justIconWrapperSmallBase
      },
      text: {
        base: textSmallBase
      },
      iconWithTextMargin: Spacing.SizesDdsSpacingLocalX025
    },
    medium: {
      justIcon: {
        base: justIconMediumBase
      },
      justIconWrapper: {
        base: justIconWrapperMediumBase
      },
      text: {
        base: textMediumBase
      },
      iconWithTextMargin: Spacing.SizesDdsSpacingLocalX05
    },
    large: {
      justIcon: {
        base: justIconLargeBase
      },
      justIconWrapper: {
        base: justIconWrapperLargeBase
      },
      text: {
        base: textLargeBase
      },
      iconWithTextMargin: Spacing.SizesDdsSpacingLocalX075
    },
    tiny: {
      justIcon: {
        base: justIconTinyBase
      },
      justIconWrapper: {
        base: justIconWrapperTinyBase
      },
      iconWithTextMargin: Spacing.SizesDdsSpacingLocalX025,
      text: {
        base: textTinyBase
      }
    }
  },
  appearance: {
    filled: {
      base: filledBase,
      primary: {
        base: filledPrimaryBase,
        hover: {
          base: filledPrimaryHoverBase
        },
        active: {
          base: filledPrimaryActiveBase
        }
      },
      secondary: {
        base: filledSecondaryBase,
        hover: {
          base: filledSecondaryHoverBase
        },
        active: {
          base: filledSecondaryActiveBase
        }
      },
      danger: {
        base: filledDangerBase,
        hover: {
          base: filledDangerHoverBase
        },
        active: {
          base: filledDangerActiveBase
        }
      }
    },
    ghost: {
      base: ghostBase,
      primary: {
        base: ghostPrimaryBase,
        hover: {
          base: ghostPrimaryHoverBase
        },
        active: {
          base: ghostPrimaryActiveBase
        }
      },
      secondary: {
        base: ghostSecondaryBase,
        hover: {
          base: ghostSecondaryHoverBase
        },
        active: {
          base: ghostSecondaryActiveBase
        }
      },
      danger: {
        base: ghostDangerBase,
        hover: {
          base: ghostDangerHoverBase
        },
        active: {
          base: ghostDangerActiveBase
        }
      }
    },
    borderless: {
      base: borderlessBase,
      primary: {
        base: borderlessPrimaryBase,
        hover: {
          base: borderlessPrimaryHoverBase
        },
        active: {
          base: borderlessPrimaryActiveBase
        },
        justIcon: {
          hover: {
            base: borderlessPrimaryIconHoverBase
          },
          active: {
            base: borderlessPrimaryIconActiveBase
          }
        }
      },
      secondary: {
        base: borderlessSecondaryBase,
        hover: {
          base: borderlessSecondaryHoverBase
        },
        active: {
          base: borderlessSecondaryActiveBase
        },
        justIcon: {
          hover: {
            base: borderlessSecondaryIconHoverBase
          },
          active: {
            base: borderlessSecondaryIconActiveBase
          }
        }
      },
      danger: {
        base: borderlessDangerBase,
        hover: {
          base: borderlessDangerHoverBase
        },
        active: {
          base: borderlessDangerActiveBase
        },
        justIcon: {
          hover: {
            base: borderlessDangerIconHoverBase
          },
          active: {
            base: borderlessDangerIconActiveBase
          }
        }
      }
    },
    rounded: {
      base: roundedBase,
      primary: {
        base: roundedPrimaryBase,
        hover: {
          base: roundedPrimaryHoverBase
        },
        active: {
          base: roundedPrimaryActiveBase
        }
      },
      secondary: {
        base: roundedSecondaryBase,
        hover: {
          base: roundedSecondaryHoverBase
        },
        active: {
          base: roundedSecondaryActiveBase
        }
      },
      danger: {
        base: roundedDangerBase,
        hover: {
          base: roundedDangerHoverBase
        },
        active: {
          base: roundedDangerActiveBase
        }
      }
    }
  }
};
