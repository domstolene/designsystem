import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { colors } = ddsBaseTokens;

const segment = {
  font: {
    ...ddsBaseTokens.fontPackages.body_sans_02.base,
  },
  padding: {
    x: '0.05rem',
    y: '0',
  },
  focus: {
    textColor: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
  },
  placeholder: {
    ...ddsBaseTokens.fontPackages.supportingStyle_placeholdertext_01.base,
    textColor: colors.DdsColorNeutralsGray6,
  },
};

const calendarButton = {
  color: colors.DdsColorNeutralsGray9,
  background: 'transparent',
  borderRadius: ddsBaseTokens.borderRadius.RadiiDdsBorderRadius1Radius,
  size: '32px',
  hover: {
    background: colors.DdsColorInteractiveLightest,
    color: colors.DdsColorInteractiveBase,
  },
  active: {
    background: colors.DdsColorInteractiveLighter,
    color: colors.DdsColorInteractiveBase,
  },
};

const datefield = {
  minWidth: '160px',
  padding: `${ddsBaseTokens.spacing.SizesDdsSpacingLocalX075} ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05}`,
  segment,
};

export const datePickerTokens = {
  gap: ddsBaseTokens.spacing.SizesDdsSpacingLocalX025,
  datefield,
  calendarButton,
};
