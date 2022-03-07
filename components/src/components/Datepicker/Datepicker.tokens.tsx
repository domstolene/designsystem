import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  iconSizes: IconSizes,
  spacing: Spacing,
  border: Border
} = ddsBaseTokens;

const calendarIndicatorBase: CSSObject = {
  height: IconSizes.DdsIconsizeMedium,
  width: IconSizes.DdsIconsizeMedium,
  position: 'absolute',
  right: Spacing.SizesDdsSpacingLocalX075
};

const calendarIndicatorFocusBase: CSSObject = {
  outline: `${Border.BordersDdsBorderFocusInputfieldStroke} solid ${Border.BordersDdsBorderFocusInputfieldStrokeWeight}`,
  outlineOffset: Spacing.SizesDdsSpacingLocalX0125
};

export const datepickerTokens = {
  calendarIndicator: {
    base: calendarIndicatorBase,
    focus: {
      base: calendarIndicatorFocusBase
    }
  }
};
