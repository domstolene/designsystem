import { create } from '@storybook/theming';
import elsaLogoHigh from './images/Elsa-logo-hoy.png';
import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

export default create({
  base: 'light',

  brandTitle: 'Elsa - Domstolenes Designsystem',
  brandUrl: 'https://design.domstol.no',
  brandImage: elsaLogoHigh,

  // Interaction color
  colorSecondary: ddsTokens.DdsColorSurfaceSelectedDefault,

  // Typography
  fontBase: `${ddsTokens.DdsFontBodySans02FontFamily}, 'Trebuchet MS', sans-serif`,
  fontCode: `${ddsTokens.DdsFontCodeMonospace02FontFamily}, monospace`,
  textMutedColor: ddsTokens.DdsColorTextMedium,
  textColor: ddsTokens.DdsColorTextDefault,

  //UI
  appBorderRadius: ddsTokens.DdsBorderRadius1NumberPx,
});
