import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { colors } = ddsBaseTokens;

const segment = {
  padding: {
    x: '.1rem',
    y: '.05rem',
  },
  focus: {
    textColor: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorPrimaryLight,
  },
  placeholder: {
    textColor: colors.DdsColorNeutralsGray5,
  },
};

const datefield = {
  minWidth: '150px',
  segment,
};

export const datepickerTokens = {
  datefield,
};
