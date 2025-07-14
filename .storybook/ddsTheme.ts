import { create } from 'storybook/theming';
import elsaLogoHigh from './images/Elsa-logo-hoy.png';
import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

/** Storybook bruker core som tema */
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
  appBorderRadius: theme.ddsBorderRadiusSurfaceNumberPx,
});

/**------------------------------------------------------------------------
 * Styling for Storybook som bruker design tokens og ikke kan settes via create()
 * Kun for styling som knekker med index.css på rotnivå der design tokens ikke finnes og betydelig påvirker UX, som ::selection
 *------------------------------------------------------------------------*/

export const injectCSS = () => {
  const style = document.createElement('style');
  style.innerHTML = `:root {
  --sb-color-surface-highlight: ${theme.ddsColorSurfaceHighlightedDefault};
  --sb-color-text-highlight: ${theme.ddsColorTextDefault};
  }

  *::selection {
  background-color: var(--sb-color-surface-highlight);
  color: var(--sb-color-text-highlight);
}
`;
  document.head.appendChild(style);
};
