import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  fontPackages: FontPackages,
  spacing: Spacing
} = ddsBaseTokens;

const { focus, textDefault } = ddsReferenceTokens;

export const textColors = {
  interactive: Colors.DdsColorInteractiveBase,
  primary: Colors.DdsColorPrimaryBase,
  danger: Colors.DdsColorDangerBase,
  success: Colors.DdsColorSuccessBase,
  warning: Colors.DdsColorWarningBase
};

const aBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase,
  ...FontPackages.body_sans_02.base,
  textDecoration: 'underline',
  width: 'fit-content'
};

const aMarginsBase: CSSObject = {
  marginTop: FontPackages.body_sans_02.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_sans_02.paragraph.paragraphSpacing
};

const aHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveDark
};

const aFocusBase: CSSObject = {
  backgroundColor: Colors.DdsColorWarningDarkest,
  color: Colors.DdsColorNeutralsWhite,
  textDecoration: 'none',
  outline: 'none'
};

const aBoldBase: CSSObject = {
  ...FontPackages.body_sans_02,
  fontWeight: 600
};

const boldBase: CSSObject = {
  fontWeight: 600
};

const italicBase: CSSObject = {
  fontStyle: 'italic'
};

const headingSans01Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.heading_sans_01.base
};

const headingSans01MarginsBase: CSSObject = {
  marginTop: FontPackages.heading_sans_01.paragraph.paragraphSpacing,
  marginBottom: FontPackages.heading_sans_01.paragraph.paragraphSpacing
};

const headingSans02Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.heading_sans_02.base
};

const headingSans02MarginsBase: CSSObject = {
  marginTop: FontPackages.heading_sans_02.paragraph.paragraphSpacing,
  marginBottom: FontPackages.heading_sans_02.paragraph.paragraphSpacing
};

const headingSans03Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.heading_sans_03.base
};

const headingSans03MarginsBase: CSSObject = {
  marginTop: FontPackages.heading_sans_03.paragraph.paragraphSpacing,
  marginBottom: FontPackages.heading_sans_03.paragraph.paragraphSpacing
};

const headingSans04Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.heading_sans_04.base
};

const headingSans04MarginsBase: CSSObject = {
  marginTop: FontPackages.heading_sans_04.paragraph.paragraphSpacing,
  marginBottom: FontPackages.heading_sans_04.paragraph.paragraphSpacing
};

const headingSans05Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.heading_sans_05.base
};

const headingSans05MarginsBase: CSSObject = {
  marginTop: FontPackages.heading_sans_05.paragraph.paragraphSpacing,
  marginBottom: FontPackages.heading_sans_05.paragraph.paragraphSpacing
};

const headingSans06Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.heading_sans_06.base
};

const headingSans06MarginsBase: CSSObject = {
  marginTop: FontPackages.heading_sans_06.paragraph.paragraphSpacing,
  marginBottom: FontPackages.heading_sans_06.paragraph.paragraphSpacing
};

const headingSans07Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.heading_sans_07.base
};

const headingSans07MarginsBase: CSSObject = {
  marginTop: FontPackages.heading_sans_07.paragraph.paragraphSpacing,
  marginBottom: FontPackages.heading_sans_07.paragraph.paragraphSpacing
};

const headingSans08Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.heading_sans_08.base
};

const headingSans08MarginsBase: CSSObject = {
  marginTop: FontPackages.heading_sans_08.paragraph.paragraphSpacing,
  marginBottom: FontPackages.heading_sans_08.paragraph.paragraphSpacing
};

const bodySans01Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_sans_01.base
};

const bodySans01MarginsBase: CSSObject = {
  marginTop: FontPackages.body_sans_01.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_sans_01.paragraph.paragraphSpacing
};

const bodySans02Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_sans_02.base
};

const bodySans02MarginsBase: CSSObject = {
  marginTop: FontPackages.body_sans_02.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_sans_02.paragraph.paragraphSpacing
};

const bodySans03Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_sans_03.base
};

const bodySans03MarginsBase: CSSObject = {
  marginTop: FontPackages.body_sans_03.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_sans_03.paragraph.paragraphSpacing
};

const bodySans04Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_sans_04.base
};

const bodySans04MarginsBase: CSSObject = {
  marginTop: FontPackages.body_sans_04.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_sans_04.paragraph.paragraphSpacing
};

const bodySerif01Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_serif_01.base
};

const bodySerif01MarginsBase: CSSObject = {
  marginTop: FontPackages.body_serif_01.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_serif_01.paragraph.paragraphSpacing
};

const bodySerif02Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_serif_02.base
};

const bodySerif02MarginsBase: CSSObject = {
  marginTop: FontPackages.body_serif_02.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_serif_02.paragraph.paragraphSpacing
};

const bodySerif03Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_serif_03.base
};

const bodySerif03MarginsBase: CSSObject = {
  marginTop: FontPackages.body_serif_03.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_serif_03.paragraph.paragraphSpacing
};

const bodySerif04Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_serif_04.base
};

const bodySerif04MarginsBase: CSSObject = {
  marginTop: FontPackages.body_serif_04.paragraph.paragraphSpacing,
  marginBottom: FontPackages.body_serif_04.paragraph.paragraphSpacing
};

const leadSans01Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.lead_sans_01.base
};

const leadSans01MarginsBase: CSSObject = {
  marginTop: FontPackages.lead_sans_01.paragraph.paragraphSpacing,
  marginBottom: FontPackages.lead_sans_01.paragraph.paragraphSpacing
};

const leadSans02Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.lead_sans_02.base
};

const leadSans02MarginsBase: CSSObject = {
  marginTop: FontPackages.lead_sans_02.paragraph.paragraphSpacing,
  marginBottom: FontPackages.lead_sans_02.paragraph.paragraphSpacing
};

const leadSans03Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.lead_sans_03.base
};

const leadSans03MarginsBase: CSSObject = {
  marginTop: FontPackages.lead_sans_03.paragraph.paragraphSpacing,
  marginBottom: FontPackages.lead_sans_03.paragraph.paragraphSpacing
};

const leadSans04Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.lead_sans_04.base
};

const leadSans04MarginsBase: CSSObject = {
  marginTop: FontPackages.lead_sans_04.paragraph.paragraphSpacing,
  marginBottom: FontPackages.lead_sans_04.paragraph.paragraphSpacing
};

const leadSans05Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.lead_sans_05.base
};

const leadSans05MarginsBase: CSSObject = {
  marginTop: FontPackages.lead_sans_05.paragraph.paragraphSpacing,
  marginBottom: FontPackages.lead_sans_05.paragraph.paragraphSpacing
};

const supportingStyleLabel01Base: CSSObject = {
  color: Colors.DdsColorNeutralsGray7,
  ...FontPackages.supportingStyle_label_01.base,
  margin: 0
};

const supportingStyleLabel01MarginsBase: CSSObject = {
  marginTop: FontPackages.supportingStyle_label_01.paragraph.paragraphSpacing,
  marginBottom: FontPackages.supportingStyle_label_01.paragraph.paragraphSpacing
};

const supportingStyleHelperText01Base: CSSObject = {
  color: Colors.DdsColorNeutralsGray6,
  ...FontPackages.supportingStyle_helpertext_01.base,
  margin: 0
};

const supportingStyleHelperText01MarginsBase: CSSObject = {
  marginTop:
    FontPackages.supportingStyle_helpertext_01.paragraph.paragraphSpacing,
  marginBottom:
    FontPackages.supportingStyle_helpertext_01.paragraph.paragraphSpacing
};

const supportingStyleInputText01Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.supportingStyle_inputtext_01.base,
  margin: 0
};

const supportingStyleInputText01MarginsBase: CSSObject = {
  marginTop:
    FontPackages.supportingStyle_inputtext_01.paragraph.paragraphSpacing,
  marginBottom:
    FontPackages.supportingStyle_inputtext_01.paragraph.paragraphSpacing
};

const supportingStyleInputText02Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.supportingStyle_inputtext_02.base,
  margin: 0
};

const supportingStyleInputText02MarginsBase: CSSObject = {
  marginTop:
    FontPackages.supportingStyle_inputtext_02.paragraph.paragraphSpacing,
  marginBottom:
    FontPackages.supportingStyle_inputtext_02.paragraph.paragraphSpacing
};

const supportingStyleInputText03Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.supportingStyle_inputtext_03.base,
  margin: 0
};

const supportingStyleInputText03MarginsBase: CSSObject = {
  marginTop:
    FontPackages.supportingStyle_inputtext_03.paragraph.paragraphSpacing,
  marginBottom:
    FontPackages.supportingStyle_inputtext_03.paragraph.paragraphSpacing
};

const supportingStylePlaceholderText01Base: CSSObject = {
  color: Colors.DdsColorNeutralsGray6,
  ...FontPackages.supportingStyle_placeholdertext_01.base,
  margin: 0
};

const supportingStylePlaceholderText01MarginsBase: CSSObject = {
  marginTop:
    FontPackages.supportingStyle_placeholdertext_01.paragraph.paragraphSpacing,
  marginBottom:
    FontPackages.supportingStyle_placeholdertext_01.paragraph.paragraphSpacing
};

const supportingStyleTiny01Base: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.supportingStyle_tiny_01.base,
  margin: 0
};

const supportingStyleTiny01MarginsBase: CSSObject = {
  marginTop: FontPackages.supportingStyle_tiny_01.paragraph.paragraphSpacing,
  marginBottom: FontPackages.supportingStyle_tiny_01.paragraph.paragraphSpacing
};

const selectionBase: CSSObject = {
  color: textDefault.textColor,
  backgroundColor: Colors.DdsColorTertiaryLightest
};

export const typographyTokens = {
  selection: {
    base: selectionBase
  },
  typographyType: {
    a: {
      base: aBase,
      hover: {
        base: aHoverBase
      },
      margins: {
        base: aMarginsBase
      },
      focus: {
        base: aFocusBase
      },
      bold: {
        base: aBoldBase
      },
      icon: {
        marginLeft: Spacing.SizesDdsSpacingLocalX0125
      }
    },
    headingSans01: {
      base: headingSans01Base,
      margins: {
        base: headingSans01MarginsBase
      }
    },
    headingSans02: {
      base: headingSans02Base,
      margins: {
        base: headingSans02MarginsBase
      }
    },
    headingSans03: {
      base: headingSans03Base,
      margins: {
        base: headingSans03MarginsBase
      }
    },
    headingSans04: {
      base: headingSans04Base,
      margins: {
        base: headingSans04MarginsBase
      }
    },
    headingSans05: {
      base: headingSans05Base,
      margins: {
        base: headingSans05MarginsBase
      }
    },
    headingSans06: {
      base: headingSans06Base,
      margins: {
        base: headingSans06MarginsBase
      }
    },
    headingSans07: {
      base: headingSans07Base,
      margins: {
        base: headingSans07MarginsBase
      }
    },
    headingSans08: {
      base: headingSans08Base,
      margins: {
        base: headingSans08MarginsBase
      }
    },
    bodySans01: {
      base: bodySans01Base,
      margins: {
        base: bodySans01MarginsBase
      }
    },
    bodySans02: {
      base: bodySans02Base,
      margins: {
        base: bodySans02MarginsBase
      }
    },
    bodySans03: {
      base: bodySans03Base,
      margins: {
        base: bodySans03MarginsBase
      }
    },
    bodySans04: {
      base: bodySans04Base,
      margins: {
        base: bodySans04MarginsBase
      }
    },
    bodySerif01: {
      base: bodySerif01Base,
      margins: {
        base: bodySerif01MarginsBase
      }
    },
    bodySerif02: {
      base: bodySerif02Base,
      margins: {
        base: bodySerif02MarginsBase
      }
    },
    bodySerif03: {
      base: bodySerif03Base,
      margins: {
        base: bodySerif03MarginsBase
      }
    },
    bodySerif04: {
      base: bodySerif04Base,
      margins: {
        base: bodySerif04MarginsBase
      }
    },
    leadSans01: {
      base: leadSans01Base,
      margins: {
        base: leadSans01MarginsBase
      }
    },
    leadSans02: {
      base: leadSans02Base,
      margins: {
        base: leadSans02MarginsBase
      }
    },
    leadSans03: {
      base: leadSans03Base,
      margins: {
        base: leadSans03MarginsBase
      }
    },
    leadSans04: {
      base: leadSans04Base,
      margins: {
        base: leadSans04MarginsBase
      }
    },
    leadSans05: {
      base: leadSans05Base,
      margins: {
        base: leadSans05MarginsBase
      }
    },
    supportingStyleLabel01: {
      base: supportingStyleLabel01Base,
      margins: {
        base: supportingStyleLabel01MarginsBase
      }
    },
    supportingStyleHelperText01: {
      base: supportingStyleHelperText01Base,
      margins: {
        base: supportingStyleHelperText01MarginsBase
      }
    },
    supportingStyleInputText01: {
      base: supportingStyleInputText01Base,
      margins: {
        base: supportingStyleInputText01MarginsBase
      }
    },
    supportingStyleInputText02: {
      base: supportingStyleInputText02Base,
      margins: {
        base: supportingStyleInputText02MarginsBase
      }
    },
    supportingStyleInputText03: {
      base: supportingStyleInputText03Base,
      margins: {
        base: supportingStyleInputText03MarginsBase
      }
    },
    supportingStylePlaceholderText01: {
      base: supportingStylePlaceholderText01Base,
      margins: {
        base: supportingStylePlaceholderText01MarginsBase
      }
    },
    supportingStyleTiny01: {
      base: supportingStyleTiny01Base,
      margins: {
        base: supportingStyleTiny01MarginsBase
      }
    }
  },
  style: {
    bold: {
      base: boldBase
    },
    italic: {
      base: italicBase
    }
  }
};
