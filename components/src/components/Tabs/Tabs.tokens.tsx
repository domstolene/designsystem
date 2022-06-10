import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisible } from '../../helpers/styling';
import { removeButtonStyling } from '../../helpers/styling';

const { border: Border, spacing: Spacing, colors: Colors } = ddsBaseTokens;

const tabListBase: CSSObject = {
  transition: '0.2s',
  display: 'flex',
  borderBottom: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid ${Border.BordersDdsBorderStyleLightStroke}`,
  overflowX: 'auto'
};

const tabListFocusBase: CSSObject = {
  ...focusVisible
};

const tabBase: CSSObject = {
  ...removeButtonStyling,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid transparent`,
  color: Colors.DdsColorNeutralsGray7
};

const tabRowBase: CSSObject = {
  flexDirection: 'row',
  padding: `${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`,
  gap: Spacing.SizesDdsSpacingLocalX05
};

const tabColumnBase: CSSObject = {
  flexDirection: 'column',
  padding: `${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX025}`,
  gap: Spacing.SizesDdsSpacingLocalX025
};

const tabActiveBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveLightest,
  color: Colors.DdsColorInteractiveDarkest,
  boxShadow: `inset 0 -2px 0 0 ${Colors.DdsColorInteractiveDarker}`,
  borderBottom: `1px solid ${Colors.DdsColorInteractiveDarker}`
};

const tabHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveDarkest,
  boxShadow: `inset 0 -2px 0 0 ${Colors.DdsColorInteractiveDarker}`,
  borderBottom: `1px solid ${Colors.DdsColorInteractiveDarker}`
};

const tabActiveHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveLightest,
  color: Colors.DdsColorInteractiveDarkest,
  boxShadow: `inset 0 -2px 0 0 ${Colors.DdsColorInteractiveDarker}`,
  borderBottom: `1px solid ${Colors.DdsColorInteractiveDarker}`
};

const tabFocusBase: CSSObject = {
  ...focusVisible,
  outlineOffset: '-1px'
};

const tabPanelBase: CSSObject = {
  padding: Spacing.SizesDdsSpacingLocalX025
};

const tabPanelFocusVisibleBase: CSSObject = {
  ...focusVisible
};

export const tabsTokens = {
  tabList: {
    base: tabListBase,
    focus: {
      base: tabListFocusBase
    }
  },
  tab: {
    base: tabBase,
    direction: {
      row: {
        base: tabRowBase
      },
      column: {
        base: tabColumnBase
      }
    },
    active: {
      base: tabActiveBase
    },
    hover: {
      base: tabHoverBase,
      active: {
        base: tabActiveHoverBase
      }
    },
    focus: {
      base: tabFocusBase
    }
  },
  panel: {
    base: tabPanelBase,
    focusVisible: {
      base: tabPanelFocusVisibleBase
    }
  }
};
