import { create } from '@storybook/theming';
import elsaLogoHigh from '../src/assets/png/Elsa-logo-hoy.png';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const {
  colors: Colors,
  fontPackages: FontPackages,
  borderRadius: BorderRadius
} = ddsBaseTokens;

const isFontFamily =
  FontPackages &&
  FontPackages.body_sans_02 &&
  FontPackages.body_sans_02.base &&
  FontPackages.body_sans_02.base.fontFamily;

export default create({
  base: 'light',

  brandTitle: 'Elsa - Domstolenes Designsystem',
  brandUrl: 'https://design.domstol.no',
  brandImage: elsaLogoHigh,

  colorSecondary: Colors.DdsColorInteractiveBase,

  // Text color
  textColor: Colors.DdsColorNeutralsGray9,

  // Typography
  fontBase: `${
    isFontFamily && FontPackages.body_sans_02.base.fontFamily + ', '
  }'Trebuchet MS', sans-serif`,
  fontCode: 'monospace',

  //UI
  appBorderRadius: BorderRadius.RadiiDdsBorderRadius1RadiusNumberPx
});
