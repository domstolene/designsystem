import { CSSObject } from 'styled-components';
import {
  ddsReferenceTokens,
  ddsBaseTokens
} from '@norges-domstoler/dds-design-tokens';

const { spacing: Spacing, colors: Colors } = ddsBaseTokens;

const { inputLabel } = ddsReferenceTokens;

const indicatorLabelBase: CSSObject = {
  color: inputLabel.textColor,
  ...inputLabel.font.base
};

const indicatorTextBase: CSSObject = {
  color: inputLabel.textColor,
  ...inputLabel.font.base
};

const listBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray7
};

export const paginationTokens = {
  container: {
    spaceBetweenItems: Spacing.SizesDdsSpacingLocalX075
  },
  indicatorsContainer: {
    spacing: Spacing.SizesDdsSpacingLocalX075
  },
  indicatorLabel: {
    base: indicatorLabelBase
  },
  indicatorText: {
    base: indicatorTextBase
  },
  list: {
    base: listBase
  },
  paginationItem: {
    spacing: Spacing.SizesDdsSpacingLocalX075
  }
};
