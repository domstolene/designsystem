import { create } from '@storybook/theming';
import elsaLogo from '../src/assets/png/Elsa-logo.png';
import elsaLogoHigh from '../src/assets/png/Elsa-logo-hoy.png';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const {
    colors: Colors,
    fontPackages: FontPackages,
    borderRadius: BorderRadius
} = ddsBaseTokens;

export default create({
  base: 'light',

  brandTitle: 'Domstolenes Designsystem',
  brandUrl: 'https://design.domstol.no',
  brandImage: elsaLogoHigh,

  colorSecondary: Colors.DdsColorPrimaryBase,

  // Text color
  textColor: Colors.DdsColorNeutralsGray9,

  // Typography
  fontBase: FontPackages.sansRegularx1.base.fontFamily,
  fontCode: 'monospace',

  //UI
  appBorderRadius: BorderRadius.RadiiDdsBorderRadius1RadiusNumberPx

});