import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';

const { colors, fontPackages, spacing } = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

const a = {
  base: {
    color: colors.DdsColorInteractiveBase,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.body_sans_02.paragraph.paragraphSpacing,
  },
  hover: {
    color: colors.DdsColorInteractiveDark,
  },
  icon: {
    marginTop: spacing.SizesDdsSpacingX025,
    marginLeft: spacing.SizesDdsSpacingX025,
  },
};

const bold = {
  fontWeight: 600,
};

const headingSans01 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.heading_sans_01.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.heading_sans_01.paragraph.paragraphSpacing,
    paddingTop: spacing.SpacingDdsSpacingPaddingTopHeadingSans01Top,
  },
};

const headingSans02 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.heading_sans_02.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.heading_sans_02.paragraph.paragraphSpacing,
    paddingTop: spacing.SpacingDdsSpacingPaddingTopHeadingSans02Top,
  },
};

const headingSans03 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.heading_sans_03.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.heading_sans_03.paragraph.paragraphSpacing,
    paddingTop: spacing.SpacingDdsSpacingPaddingTopHeadingSans03Top,
  },
};

const headingSans04 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.heading_sans_04.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.heading_sans_04.paragraph.paragraphSpacing,
    paddingTop: spacing.SpacingDdsSpacingPaddingTopHeadingSans04Top,
  },
};

const headingSans05 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.heading_sans_05.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.heading_sans_05.paragraph.paragraphSpacing,
    paddingTop: spacing.SpacingDdsSpacingPaddingTopHeadingSans05Top,
  },
};

const headingSans06 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.heading_sans_06.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.heading_sans_06.paragraph.paragraphSpacing,
    paddingTop: spacing.SpacingDdsSpacingPaddingTopHeadingSans06Top,
  },
};

const headingSans07 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.heading_sans_07.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.heading_sans_07.paragraph.paragraphSpacing,
    paddingTop: spacing.SpacingDdsSpacingPaddingTopHeadingSans07Top,
  },
};

const headingSans08 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.heading_sans_08.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.heading_sans_08.paragraph.paragraphSpacing,
    paddingTop: spacing.SpacingDdsSpacingPaddingTopHeadingSans08Top,
  },
};

const bodySans01 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.body_sans_01.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.body_sans_01.paragraph.paragraphSpacing,
  },
};

const bodySans02 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.body_sans_02.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.body_sans_02.paragraph.paragraphSpacing,
  },
};

const bodySans03 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.body_sans_03.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.body_sans_03.paragraph.paragraphSpacing,
  },
};

const bodySans04 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.body_sans_04.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.body_sans_04.paragraph.paragraphSpacing,
  },
};

const leadSans01 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.lead_sans_01.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.lead_sans_01.paragraph.paragraphSpacing,
  },
};

const leadSans02 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.lead_sans_02.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.lead_sans_02.paragraph.paragraphSpacing,
  },
};

const leadSans03 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.lead_sans_03.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.lead_sans_03.paragraph.paragraphSpacing,
  },
};

const leadSans04 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.lead_sans_04.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.lead_sans_04.paragraph.paragraphSpacing,
  },
};

const leadSans05 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.lead_sans_05.base,
  },
  margins: {
    marginTop: 0,
    marginBottom: fontPackages.lead_sans_05.paragraph.paragraphSpacing,
  },
};

const supportingStyleLabel01 = {
  base: {
    color: colors.DdsColorNeutralsGray7,
    font: fontPackages.supportingStyle_label_01.base,
    margin: 0,
  },
  margins: {
    marginTop: fontPackages.supportingStyle_label_01.paragraph.paragraphSpacing,
    marginBottom:
      fontPackages.supportingStyle_label_01.paragraph.paragraphSpacing,
  },
};

const supportingStyleHelperText01 = {
  base: {
    color: colors.DdsColorNeutralsGray6,
    font: fontPackages.supportingStyle_helpertext_01.base,
    margin: 0,
  },
  margins: {
    marginTop:
      fontPackages.supportingStyle_helpertext_01.paragraph.paragraphSpacing,
    marginBottom:
      fontPackages.supportingStyle_helpertext_01.paragraph.paragraphSpacing,
  },
};

const supportingStylePlaceholderText01 = {
  base: {
    color: colors.DdsColorNeutralsGray6,
    font: fontPackages.supportingStyle_placeholdertext_01.base,
    margin: 0,
  },
  margins: {
    marginTop:
      fontPackages.supportingStyle_placeholdertext_01.paragraph
        .paragraphSpacing,
    marginBottom:
      fontPackages.supportingStyle_placeholdertext_01.paragraph
        .paragraphSpacing,
  },
};
const supportingStylePlaceholderText02 = {
  base: {
    color: colors.DdsColorNeutralsGray6,
    font: fontPackages.supportingStyle_placeholdertext_02.base,
    margin: 0,
  },
  margins: {
    marginTop:
      fontPackages.supportingStyle_placeholdertext_02.paragraph
        .paragraphSpacing,
    marginBottom:
      fontPackages.supportingStyle_placeholdertext_02.paragraph
        .paragraphSpacing,
  },
};
const supportingStylePlaceholderText03 = {
  base: {
    color: colors.DdsColorNeutralsGray6,
    font: fontPackages.supportingStyle_placeholdertext_03.base,
    margin: 0,
  },
  margins: {
    marginTop:
      fontPackages.supportingStyle_placeholdertext_03.paragraph
        .paragraphSpacing,
    marginBottom:
      fontPackages.supportingStyle_placeholdertext_03.paragraph
        .paragraphSpacing,
  },
};

const supportingStyleTiny01 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.supportingStyle_tiny_01.base,
    margin: 0,
  },
  margins: {
    marginTop: fontPackages.supportingStyle_tiny_01.paragraph.paragraphSpacing,
    marginBottom:
      fontPackages.supportingStyle_tiny_01.paragraph.paragraphSpacing,
  },
};

const supportingStyleTiny02 = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.supportingStyle_tiny_02.base,
    margin: 0,
  },
  margins: {
    marginTop: fontPackages.supportingStyle_tiny_02.paragraph.paragraphSpacing,
    marginBottom:
      fontPackages.supportingStyle_tiny_02.paragraph.paragraphSpacing,
  },
};

export const typographyTokens = {
  typographyType: {
    a,
    headingSans01,
    headingSans02,
    headingSans03,
    headingSans04,
    headingSans05,
    headingSans06,
    headingSans07,
    headingSans08,
    bodySans01,
    bodySans02,
    bodySans03,
    bodySans04,
    leadSans01,
    leadSans02,
    leadSans03,
    leadSans04,
    leadSans05,
    supportingStyleLabel01,
    supportingStyleHelperText01,
    supportingStylePlaceholderText01,
    supportingStylePlaceholderText02,
    supportingStylePlaceholderText03,
    supportingStyleTiny01,
    supportingStyleTiny02,
  },
  style: {
    bold,
  },
};
