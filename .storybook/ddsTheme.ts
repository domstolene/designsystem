import { create } from '@storybook/theming';
import elsaLogoHigh from './images/Elsa-logo-hoy.png';
import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

export default create({
  base: 'light',

  brandTitle: 'Elsa - Domstolenes Designsystem',
  brandUrl: 'https://design.domstol.no',
  brandImage: elsaLogoHigh,

  // Interaction color
  colorSecondary: ddsTokens.ddsColorSurfaceActionSelected,

  // Typography
  fontBase: `${ddsTokens.ddsFontFamilySans}, 'Trebuchet MS', sans-serif`,
  fontCode: `${ddsTokens.ddsFontFamilyMonospace}, monospace`,
  textMutedColor: ddsTokens.ddsColorTextMedium,
  textColor: ddsTokens.ddsColorTextDefault,

  //UI
  appBorderRadius: ddsTokens.ddsBorderRadius1NumberPx,
});
