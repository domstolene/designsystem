import { create } from '@storybook/theming';
import elsaLogoHigh from './images/Elsa-logo-hoy.png';
import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

const theme = ddsTokens.core;

export default create({
  base: 'light',

  brandTitle: 'Elsa - Domstolenes Designsystem',
  brandUrl: 'https://design.domstol.no',
  brandImage: elsaLogoHigh,

  // Interaction color
  colorSecondary: theme.ddsColorSurfaceActionSelected,

  // Typography
  fontBase: theme.ddsFontFamilySans,
  fontCode: theme.ddsFontFamilyMonospace,
  textMutedColor: theme.ddsColorTextMedium,
  textColor: theme.ddsColorTextDefault,

  //UI
  appBorderRadius: theme.ddsBorderRadius1NumberPx,
});
